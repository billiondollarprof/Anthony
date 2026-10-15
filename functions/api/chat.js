<script>
  const WEBHOOK_PATH = '/api/chat';
  const MAX_MESSAGE_CHARS = 1000;
  const MAX_HISTORY_CHARS = 6000;

  const log = document.getElementById('log');
  const form = document.getElementById('form');
  const input = document.getElementById('text');
  const send = document.getElementById('send');
  const chips = document.getElementById('chips');
  const history = [];

  function linkify(el, text){
    const re = /(https?:\/\/[^\s)]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;
    let last = 0, m;
    while ((m = re.exec(text)) !== null){
      el.append(text.slice(last, m.index));
      const a = document.createElement('a');
      const isMail = m[0].includes('@') && !m[0].startsWith('http');
      a.href = isMail ? 'mailto:' + m[0] : m[0];
      if (!isMail){ a.target = '_blank'; a.rel = 'noopener'; }
      a.textContent = m[0];
      el.append(a);
      last = m.index + m[0].length;
    }
    el.append(text.slice(last));
  }

  function addMessage(kind, text){
    const d = document.createElement('div');
    d.className = 'msg ' + kind;
    linkify(d, text);
    log.append(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }

  function showTyping(){
    const d = document.createElement('div');
    d.className = 'msg bot';
    d.innerHTML = '<span class="typing" aria-label="The assistant is typing"><i></i><i></i><i></i></span>';
    log.append(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }

  function setBusy(b){ input.disabled = b; send.disabled = b; }

  function composeHistoryText(){
    return history
      .map(h => (h.role === 'user' ? 'Visitor: ' : 'Assistant: ') + h.text)
      .join('\n')
      .slice(-MAX_HISTORY_CHARS);
  }

  async function ask(text){
    text = (text || '').trim();
    if (!text) return;

    const limitedText = text.slice(0, MAX_MESSAGE_CHARS);
    chips.hidden = true;
    addMessage('user', limitedText);
    history.push({ role: 'user', text: limitedText });
    input.value = '';
    setBusy(true);
    const typing = showTyping();

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);

    try {
      const body = new URLSearchParams({
        message: limitedText,
        history: composeHistoryText()
      });

      const res = await fetch(WEBHOOK_PATH, {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: controller.signal
      });

      const raw = await res.text();
      let reply = raw;
      try { const json = JSON.parse(raw); reply = json.reply || json.text || json.message || raw; } catch (_) {}

      if (!res.ok || !String(reply).trim()) {
        throw new Error('empty');
      }

      const finalReply = String(reply).trim();
      typing.remove();
      addMessage('bot', finalReply);
      history.push({ role: 'bot', text: finalReply });
    } catch (err) {
      typing.remove();
      addMessage('note', 'I could not get a reply. Please email anthony@stellaxafe.com and I will answer directly.');
    } finally {
      clearTimeout(timer);
      setBusy(false);
      input.focus();
    }
  }

  form.addEventListener('submit', e => { e.preventDefault(); ask(input.value); });
  chips.addEventListener('click', e => { if (e.target.tagName === 'BUTTON') ask(e.target.textContent); });
</script>
