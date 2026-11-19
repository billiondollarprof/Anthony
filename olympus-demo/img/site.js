
document.documentElement.classList.add('js');
const IMG='/i/',$=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],RM=matchMedia('(prefers-reduced-motion:reduce)').matches,WA='2348032575150';
try{if(localStorage.getItem('oth')==='light')document.documentElement.dataset.theme='light'}catch(e){}
const IC={phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',glass:'<path d="M8 22h8M12 15v7M5 3h14l-7 12z"/><path d="M7.5 7h9"/>',music:'<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',gym:'<path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11"/>',pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',ig:'<rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4zM17.5 6.5h.01"/>',fb:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',wa:'<path fill="currentColor" stroke="none" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/>'};
$$('[data-i]').forEach(e=>e.outerHTML=`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[e.dataset.i]}</svg>`);
const ts=$('#ts'),toast=t=>{ts.textContent=t;ts.classList.add('on');setTimeout(()=>ts.classList.remove('on'),2800)};
$('#th').onclick=()=>{const r=document.documentElement,l=r.dataset.theme!=='light';if(l)r.dataset.theme='light';else delete r.dataset.theme;try{localStorage.setItem('oth',l?'light':'dark')}catch(e){}};
/* menu */
const mn=$('#mn'),mb=$('#mb'),sh=$('#sh'),op=v=>{if(v)mn.style.top=$('header').getBoundingClientRect().bottom+8+'px';mn.classList.toggle('open',v);sh.classList.toggle('on',v);mb.setAttribute('aria-expanded',v)};
mb.onclick=()=>op(!mn.classList.contains('open'));sh.onclick=()=>op(0);mn.onclick=e=>{if(e.target.closest('a'))op(0)};addEventListener('keydown',e=>e.key=='Escape'&&op(0));
/* tonight */
const NT={3:'Divas & Boots',5:'Luxury & Lavish',0:'Bottles'},DN=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],td=new Date().getDay();
let nx=0;while(!NT[(td+nx)%7])nx++;const nd=(td+nx)%7;
$('#lvt').textContent=nx?`Next night: ${DN[nd]}, ${NT[nd]}`:`Tonight: ${NT[td]} on New Road`;
$('#qn').textContent=nx?`Next: ${NT[nd]}`:`Tonight: ${NT[td]}`;$('#qs').textContent=nx?DN[nd]+' night':'Book your table now';
$$('.nt').forEach(n=>n.classList.toggle('now',+n.dataset.day===td));
/* hero slideshow: first image is in the HTML, the rest load after the page */
const hs=$('#hs'),sg=$('#sg'),pm=matchMedia('(orientation:portrait)').matches;let hi=0,ht,hims=[hs.firstElementChild];
const src=(k,a,b)=>({src:IMG+k+'-'+b+'.webp',srcset:`${IMG}${k}-${a}.webp ${a}w, ${IMG}${k}-${b}.webp ${b}w`});
addEventListener('load',()=>{const L=pm?[['day',600,1000],['club',800,1600],['taverna',800,1600],['ffr',600,1000]]:[['club',800,1600],['day',600,1000],['lounge',800,1600],['gymr',800,1400]];
 L.forEach((x,i)=>{const m=new Image(),s=src(...x);m.sizes='100vw';m.srcset=s.srcset;m.src=s.src;m.alt='';m.decoding='async';if(i%2==0)m.classList.add('zo');if(x[0]=='day')m.style.objectPosition='center 60%';hs.append(m);hims.push(m)});
 hims.forEach(()=>sg.append(document.createElement('i')));shw(0)});
const shw=i=>{const p=hims[hi];if(p&&hi!=i){p.classList.remove('on');p.classList.add('out');setTimeout(()=>p.classList.remove('out'),1500)}const m=hims[i];m.classList.remove('out');void m.offsetWidth;m.classList.add('on');hi=i;[...sg.children].forEach((b,j)=>{b.classList.remove('on');void b.offsetWidth;if(j==i)b.classList.add('on')});clearTimeout(ht);if(!RM)ht=setTimeout(()=>shw((i+1)%hims.length),5200)};
/* marquees */
const mq=(id,items)=>{const d=document.createElement('div');for(let r=0;r<2;r++)items.forEach(t=>{const s=document.createElement('span');s.textContent=t;d.append(s);const p=document.createElement('i');p.textContent='✦';d.append(p)});$(id).append(d)};
mq('#m1',['Night Club','Lounge','Taverna','Bottle Service','Live DJs','Karaoke']);mq('#m2',['Olympus Fitness','Fast Food','Confectionery','Salon','Pharmacy','Boutique']);
/* one scroll loop: progress bar, header, hero layers, parallax, marquee speed, scrub */
const pg=$('#pg'),hdr=$('header'),hin=$('#hin'),l1=$('#ly1'),l2=$('#ly2'),pxs=$$('.px'),mqa=()=>$$('.mq>div').flatMap(d=>d.getAnimations());
const stg=$('#night'),lys=$$('#stage .ly'),scs=$$('#stage .sc'),tls=[...$('#tl').children],cn=$('#cn'),hint=$('#hint'),wl=$('#wl'),N=lys.length;
const sks=$$('.sk'),rgv=$('#rgv'),TOUCH=matchMedia('(hover:none)').matches;let ly=scrollY,boost=1,last=-1,rgA=0,rgT=0,rgIn=0,rgY=scrollY,lastY=-1,lastH=0,MQA=null;
function frame(){const y=scrollY,vh=innerHeight,moved=y!==lastY||vh!==lastH;lastY=y;lastH=vh;
 if(moved){const dh=document.documentElement.scrollHeight-vh;pg.style.transform=`scaleX(${dh>0?y/dh:0})`;hdr.classList.toggle('scd',y>10)}
 if(!RM&&!TOUCH&&moved){
  if(y<vh*1.2){hs.style.transform=`translate3d(0,${y*.35}px,0)`;l1.style.transform=`translate3d(0,${y*.2}px,0)`;l2.style.transform=`translate3d(0,${y*.1}px,0)`;hin.style.transform=`translate3d(0,${y*-.06}px,0)`;hin.style.opacity=Math.max(0,1-y/(vh*.8))}
  const pr=pxs.map(el=>el.getBoundingClientRect());pxs.forEach((el,i)=>{const r=pr[i];if(r.bottom<-100||r.top>vh+100)return;const cc=(r.top+r.height/2-vh/2)/vh;el.style.transform=`translate3d(0,${(-cc*100*(+el.dataset.s)).toFixed(1)}%,0)`});
 }
 if(!RM&&!TOUCH){MQA=MQA||$$('.mq>div').flatMap(d=>d.getAnimations());const tb=Math.min(1+Math.abs(y-ly)/12,5);boost+=(tb-boost)*.2;boost+=(1-boost)*.05;ly=y;if(Math.abs(boost-(MQA[0]&&MQA[0].playbackRate||1))>.02)MQA.forEach(a=>a.playbackRate=boost)}
 if(moved){
  const r=stg.getBoundingClientRect();
  const sr=sks.map(s=>s.getBoundingClientRect());
  if(r.top<vh&&r.bottom>0){const p=Math.min(1,Math.max(0,-r.top/(r.height-vh))),f=p*(N-1);let k=0,wy=-1;
   lys.forEach((im,i)=>{if(i){const t=Math.min(1,Math.max(0,(f-(i-1)-.2)/.6));im.style.clipPath=`inset(${(100-t*100).toFixed(2)}% 0 0 0)`;if(t>0&&t<1)wy=100-t*100;if(t>=.5)k=i;if(!RM)im.style.transform=`scale(${(1.12-.12*t).toFixed(3)})`}
    else if(!RM)im.style.transform=`scale(${(1+.06*Math.min(1,f)).toFixed(3)})`});
   wl.style.opacity=wy<0?0:1;if(wy>=0)wl.style.top=wy+'%';
   tls.forEach((d,i)=>d.firstChild.style.setProperty('--f',Math.min(1,Math.max(0,f-i+.5)).toFixed(3)));
   hint.classList.toggle('off',p>.9);
   if(k!==last){last=k;scs.forEach((s,i)=>s.classList.toggle('on',i===k));tls.forEach((d,i)=>d.classList.toggle('on',i===k));cn.classList.add('fl');cn.textContent='0'+(k+1);void cn.offsetWidth;cn.classList.remove('fl')}}
  /* stacked cards: the one underneath shrinks and darkens as the next covers it */
  sks.forEach((c,i)=>{const n=sr[i+1];if(!n)return;const a=sr[i];if(a.bottom<-50||a.top>vh)return;const q=Math.min(1,Math.max(0,1-(n.top-a.top)/a.height));c.style.transform=RM?'':`scale(${(1-q*.07).toFixed(4)})`;c.style.setProperty('--p',(q*.55).toFixed(3))});
 }
 /* ring: slow drift, drag and keys; on desktop it also turns with the scroll */
 if(rgIn){if(!RM){rgT+=.05;if(!TOUCH)rgT+=(y-rgY)*.12}rgY=y;const prev=rgA;rgA+=(rgT-rgA)*.08;if(Math.abs(rgA-prev)>.001){ring.style.transform=`translateZ(${-RR}px) rotateY(${-rgA}deg)`;
  rcs.forEach((c,i)=>{let d=((i*ST-rgA)%360+540)%360-180;c.style.setProperty('--dm',Math.min(.75,Math.abs(d)/150).toFixed(2))})}
  const fi=((Math.round(rgA/ST)%nR)+nR)%nR;if(fi!==rgF){rgF=fi;rgc.textContent=GR[fi][1]+' · '+GR[fi][2]}}else rgY=y;
 requestAnimationFrame(frame)}
requestAnimationFrame(frame);
/* coverflow */
const LB={'A table':'Book a table','VIP section':'Book a VIP booth','Taverna order':'Book Taverna','Gym membership':'Ask about membership','Fast food order':'Order fast food','Salon appointment':'Book an appointment','Pharmacy enquiry':'Send an enquiry','An event':'Plan an event','A room':'Request a room'};
const CF=[['club',800,1600,'Olympus Night Club','DJs, hype men and tables until late.','A table'],['lounge',800,1600,'The lounge','VIP booths and bottle service.','VIP section'],['taverna',800,1600,'Taverna by Olympus','Dinner and drinks before the club opens.','Taverna order'],['gymr',800,1400,'Olympus Fitness','Racks, dumbbells and group classes.','Gym membership'],['ffr',600,1000,'Fast Food','Burgers, pastries and late bites.','Fast food order','center 45%'],['salon',800,1400,'The salon','Hair and styling before a night out.','Salon appointment','center 30%'],['pharmacy',800,1400,'The pharmacy','On site during the day.','Pharmacy enquiry'],['boutique',800,1400,'The boutique','Shop for the night on New Road.','An event'],['day',600,1000,'Olympus by Day','The building on New Road.','An event','center 60%'],['lobby',800,1200,'Stay (concept)','Rooms beside the club. Sample photo.','A room']];
const cft=$('#cft'),cfd=$('#cfd'),cfc=$('#cfc'),nF=CF.length;let fc=0,fct,fIn=0,fHov=0,fx=null,fMoved=0;
CF.forEach((d,i)=>{const c=document.createElement('div');c.className='cfi';c.innerHTML=`<img src="${IMG}${d[0]}-${d[2]}.webp" srcset="${IMG}${d[0]}-${d[1]}.webp ${d[1]}w, ${IMG}${d[0]}-${d[2]}.webp ${d[2]}w" sizes="(max-width:800px) 80vw, 720px" alt="${d[3]}" loading="lazy" decoding="async"${d[6]?` style="object-position:${d[6]}"`:''}>`;c.onclick=()=>{if(!fMoved&&i!==fc)cgo(i)};cft.append(c);const dt=document.createElement('i');dt.onclick=()=>cgo(i);cfd.append(dt)});
const cfis=[...cft.children],cfds=[...cfd.children];
const clay=()=>{cfis.forEach((c,i)=>{let o=((i-fc)%nF+nF)%nF;if(o>nF/2)o-=nF;const a=Math.abs(o),sg=Math.sign(o),jump=c._o!==undefined&&Math.abs(o-c._o)>2;c._o=o;if(jump)c.style.transition='none';
  c.style.transform=`translate(-50%,-50%) translateX(calc(var(--W) * ${(sg*(a?.24+.18*a:0)).toFixed(3)})) translateZ(${-a*140}px) rotateY(${sg*Math.min(a,1)*-28}deg) scale(${1-Math.min(a,3)*.1})`;
  c.style.zIndex=20-a;c.style.opacity=a>3?0:1;c.style.setProperty('--dm',Math.min(a*.28,.8));c.classList.toggle('on',a==0);if(jump){void c.offsetWidth;c.style.transition=''}});
 cfds.forEach((d,i)=>d.classList.toggle('on',i==fc));const d=CF[fc];cfc.classList.add('sw');setTimeout(()=>{cfc.querySelector('h3').textContent=d[3];cfc.querySelector('p').textContent=d[4];const b=cfc.querySelector('a');b.dataset.b=d[5];b.textContent=LB[d[5]]||'Book';cfc.classList.remove('sw')},200)};
const cplan=()=>{clearTimeout(fct);if(!RM&&fIn&&!fHov&&!document.hidden)fct=setTimeout(()=>cgo(fc+1),4200)},cgo=i=>{fc=(i+nF)%nF;clay();cplan()};
clay();$('#cfl').onclick=()=>cgo(fc-1);$('#cfr').onclick=()=>cgo(fc+1);
const cf=$('#cf');new IntersectionObserver(e=>{fIn=e[0].isIntersecting;cplan()},{threshold:.4}).observe(cf);document.addEventListener('visibilitychange',cplan);
cf.addEventListener('keydown',e=>{if(e.key=='ArrowLeft')cgo(fc-1);if(e.key=='ArrowRight')cgo(fc+1)});
cf.addEventListener('pointerenter',e=>{if(e.pointerType=='mouse'){fHov=1;cplan()}});cf.addEventListener('pointerleave',()=>{fHov=0;cplan()});
cf.addEventListener('pointerdown',e=>{fx=e.clientX;fMoved=0});cf.addEventListener('pointerup',e=>{if(fx===null)return;const d=e.clientX-fx;fx=null;if(Math.abs(d)>40){fMoved=1;cgo(fc+(d<0?1:-1));setTimeout(()=>fMoved=0,50)}});
/* ring gallery */
const GR0=[['front',600,'Night club','The front at night'],['bar',800,'The bar','Cocktails'],['taverna',800,'Taverna','Terrace dining'],['gymr',800,'Olympus Fitness','Strength floor'],['kettle',800,'Olympus Fitness','Training'],['ffr',600,'Fast Food','Confectionery'],['salon',800,'Salon','Sample photo'],['pharmacy',800,'Pharmacy','Sample photo'],['boutique',800,'Boutique','Sample photo'],['day',600,'Olympus by Day','New Road'],['club',800,'Dance floor','Sample photo'],['lounge',800,'The lounge','Sample photo']];const GR=GR0.map(g=>[g[0],g[2],g[3],g[1]]);
const FP={front:'center 25%',bar:'52% 30%',kettle:'64% 20%',salon:'55% center',pharmacy:'50% center',club:'40% center',ffr:'center 45%',day:'center 60%'};
const ring=$('#ring'),rgc=$('#rgc'),nR=GR.length,ST=360/nR;let RR=0,rgF=-1;
GR.forEach((g,i)=>{const c=document.createElement('figure');c.className='rc';c.style.margin=0;c.innerHTML=`<img src="${IMG}${g[0]}-${g[3]}.webp" alt="${g[1]}" loading="lazy" decoding="async"${FP[g[0]]?` style="object-position:${FP[g[0]]}"`:''}><span>${g[1]}<small>${g[2]}</small></span>`;ring.append(c)});
const rcs=[...ring.children],rgSize=()=>{const w=rcs[0].offsetWidth;RR=Math.round(w/2/Math.tan(Math.PI/nR)*1.07);rcs.forEach((c,i)=>c.style.transform=`rotateY(${i*ST}deg) translateZ(${RR}px)`)};rgSize();let rgW=innerWidth;addEventListener('resize',()=>{if(innerWidth!==rgW){rgW=innerWidth;rgSize()}});
rgc.textContent=GR[0][1]+' · '+GR[0][2];rgF=0;ring.style.transform=`translateZ(${-RR}px)`;
new IntersectionObserver(e=>{rgIn=e[0].isIntersecting},{rootMargin:'100px'}).observe(rgv);
let rx=null;rgv.addEventListener('pointerdown',e=>{rx=e.clientX;if(e.pointerType=='mouse')rgv.setPointerCapture(e.pointerId)});rgv.addEventListener('pointermove',e=>{if(rx===null)return;rgT-=(e.clientX-rx)*.35;rx=e.clientX});rgv.addEventListener('pointerup',()=>{rx=null;rgT=Math.round(rgT/ST)*ST});rgv.addEventListener('pointercancel',()=>rx=null);
rgv.addEventListener('keydown',e=>{if(e.key=='ArrowLeft'){rgT=Math.round(rgT/ST)*ST-ST;e.preventDefault()}if(e.key=='ArrowRight'){rgT=Math.round(rgT/ST)*ST+ST;e.preventDefault()}});
/* reviews */
const RV=$$('.rcd'),rd=$('#rds');let ri=0;RV.forEach(()=>rd.append(document.createElement('i')));
const rs=i=>{RV.forEach((c,j)=>{c.classList.toggle('on',j==i);c.classList.toggle('past',j==(i+RV.length-1)%RV.length)});[...rd.children].forEach((d,j)=>{d.classList.toggle('on',j==i);d.onclick=()=>rs(j)});ri=i};rs(0);if(!RM)setInterval(()=>rs((ri+1)%RV.length),5200);
/* reveal, counters, tilt */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.rv').forEach(e=>io.observe(e));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting||RM)return;co.unobserve(e.target);const t=+e.target.dataset.c,s=performance.now();(function f(n){const p=Math.min((n-s)/1600,1);e.target.textContent=Math.round(t*(1-Math.pow(1-p,3))).toLocaleString();if(p<1)requestAnimationFrame(f)})(s)}),{threshold:.6});$$('[data-c]').forEach(e=>co.observe(e));
if(!RM&&matchMedia('(hover:hover)').matches)$$('.tl3').forEach(el=>{el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-4px)`});el.addEventListener('pointerleave',()=>el.style.transform='')});
/* call sheet */
const cs=$('#cs'),sheet=v=>{cs.classList.toggle('on',v);cs.setAttribute('aria-hidden',!v)};
document.addEventListener('click',e=>{if(e.target.closest('[data-call]')){e.preventDefault();op(0);sheet(1)}if(e.target==cs||e.target.closest('[data-x]'))sheet(0)});
$('#cp').onclick=()=>{(navigator.clipboard?navigator.clipboard.writeText('07071058870'):Promise.reject()).then(()=>toast('Number copied'),()=>toast('Number: 0707 105 8870'))};addEventListener('keydown',e=>e.key=='Escape'&&sheet(0));
/* booking wizard */
const B={type:'A table',guests:'2'},BT=['A table','VIP section','Bottle service','A room','An event','Taverna order','Fast food order','Gym membership','Salon appointment','Pharmacy enquiry'],BG=['2','4','6','8','10+'];let st=0;
const glide=box=>{let s=box.querySelector('.dsl');if(!s){s=document.createElement('i');s.className='dsl';box.prepend(s);box.classList.add('sl')}const c=box.querySelector('[aria-pressed=true]');if(!c||!c.offsetWidth)return;s.style.width=c.offsetWidth+'px';s.style.height=c.offsetHeight+'px';s.style.transform=`translate(${c.offsetLeft}px,${c.offsetTop}px)`};
const chips=(id,arr,key)=>{const box=$(id);box.innerHTML=arr.map(v=>`<button type="button" class="ch" aria-pressed="${v==B[key]}">${v}</button>`).join('');box.onclick=e=>{const b=e.target.closest('.ch');if(!b)return;$$(id+' .ch').forEach(x=>x.setAttribute('aria-pressed',x==b));B[key]=b.textContent;glide(box)}};
chips('#bt',BT,'type');chips('#bg',BG,'guests');
const dd=$('#dd');dd.min=new Date().toISOString().slice(0,10);
const view=()=>{$$('.pn').forEach(p=>p.classList.toggle('on',p.dataset.s==st));$$('#sp i').forEach((b,i)=>b.classList.toggle('on',i<=st));$('#bkb').style.visibility=st?'visible':'hidden';$('#go').textContent=st==3?'Send on WhatsApp':'Continue';if(st==0)requestAnimationFrame(()=>{glide($('#bt'));glide($('#bg'))});
 if(st==3)$('#smr').innerHTML=[['Booking',B.type],['Guests',B.guests],['Date',dd.value],['Arrival',$('#tm').value],['Name',$('#nm').value],['Phone',$('#ph').value],['Notes',$('#nt').value||'None']].map(r=>`<div><span>${r[0]}</span><b>${r[1].replace(/</g,'&lt;')}</b></div>`).join('')};
$('#go').onclick=()=>{const er=$('#er');er.textContent='';
 if(st==1&&!dd.value)return er.textContent='Choose a date to continue.';
 if(st==2){if(!$('#nm').value.trim())return er.textContent='Enter your name to continue.';if($('#ph').value.replace(/\D/g,'').length<10)return er.textContent='Enter a phone number with at least 10 digits.'}
 if(st==3){const ref='OLY-'+Math.random().toString(36).slice(2,8).toUpperCase(),t=`Hello Olympus, I'd like to reserve.\nBooking: ${B.type}\nGuests: ${B.guests}\nDate: ${dd.value}\nArrival: ${$('#tm').value}\nName: ${$('#nm').value}\nPhone: ${$('#ph').value}\nNotes: ${$('#nt').value||'None'}\nRef: ${ref}`;open('https://wa.me/'+WA+'?text='+encodeURIComponent(t),'_blank');$$('.pn,#sp,#nv').forEach(e=>e.style.display='none');$('#ok').hidden=false;$('#rf').textContent=ref;return}
 st++;view()};
$('#bkb').onclick=()=>{st--;$('#er').textContent='';view()};view();
document.addEventListener('click',e=>{const a=e.target.closest('[data-b]');if(a){B.type=a.dataset.b;$$('#bt .ch').forEach(x=>x.setAttribute('aria-pressed',x.textContent==B.type));setTimeout(()=>glide($('#bt')),600)}});
let gW=innerWidth;addEventListener('resize',()=>{if(innerWidth!==gW){gW=innerWidth;glide($('#bt'));glide($('#bg'))}});
/* service menu on the hero button */
const SV=[['A table','glass','Reserve a table','Club or lounge'],['VIP section','music','VIP booth','With bottle service'],['A room','pin','Book a room','On this site'],['Taverna order','glass','Taverna','Dinner or an order'],['Fast food order','glass','Fast food','Order ahead'],['Gym membership','gym','Gym','Membership or day pass'],['Salon appointment','pin','Salon','Book an appointment'],['Pharmacy enquiry','pin','Pharmacy','Ask what is in stock'],['An event','music','An event','Birthday or private party']];
const sv=$('#sv'),svb=$('#svb');sv.insertAdjacentHTML('beforeend',SV.map((x,i)=>`<button type="button" role="menuitem" data-v="${i}"><span class="ic"></span><span><b>${x[2]}</b><br><small>${x[3]}</small></span></button>`).join(''));
const ICS={glass:IC.glass,music:IC.music,pin:IC.pin,gym:IC.gym};$$('#sv button').forEach((b,i)=>b.firstChild.innerHTML=`<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${ICS[SV[i][1]]}</svg>`);
const svOpen=v=>{if(v){const r=svb.parentElement.getBoundingClientRect(),h=Math.min(innerHeight*.7,520),down=innerHeight-r.bottom>h+16||r.top<h;sv.classList.toggle('up',!down);sv.style.left=Math.min(r.left,innerWidth-sv.offsetWidth-16)+'px';sv.style.top=down?r.bottom+8+'px':'';sv.style.bottom=down?'':innerHeight-r.top+8+'px'}sv.classList.toggle('on',v);svb.setAttribute('aria-expanded',v);if(v)setTimeout(()=>sv.querySelector('button').focus({preventScroll:true}),60)};
svb.onclick=e=>{e.stopPropagation();svOpen(!sv.classList.contains('on'))};
document.addEventListener('click',e=>{if(!e.target.closest('#sv'))svOpen(0)});addEventListener('keydown',e=>e.key=='Escape'&&svOpen(0));addEventListener('scroll',()=>sv.classList.contains('on')&&svOpen(0),{passive:true});
sv.onclick=e=>{const b=e.target.closest('button');if(!b)return;const t=SV[b.dataset.v][0];svOpen(0);B.type=t;$$('#bt .ch').forEach(x=>x.setAttribute('aria-pressed',x.textContent==t));st=0;view();$('#book').scrollIntoView({behavior:RM?'auto':'smooth'})};
/* ask olympus */
const TEL='0707 105 8870',FAQ=[['What is on tonight?',()=>nx?`Nothing tonight. The next night is ${DN[nd]}: ${NT[nd]}. Posters and line-ups go up on @olympus_lifestyle.ng.`:`Tonight is ${NT[td]}. Book a table early.`],['How do I book a table?',()=>'Use the four-step form on this page. When you finish, WhatsApp opens with your booking written out. You can also call '+TEL+'.'],['Where are you?',()=>'New Road by Awolowo Junction (New Ogorode Road), Sapele, Delta State. The contact section has a directions link.'],['Is there a gym?',()=>'Yes. Olympus Fitness is on the same site. Ask about classes, day passes and monthly membership.']];
const RU=[[/tonight|today|night|party|event|dj|week/,FAQ[0][1]],[/book|reserv|table|vip|bottle/,FAQ[1][1]],[/where|address|locat|direction|find|road/,FAQ[2][1]],[/gym|fitness|workout|train/,FAQ[3][1]],[/food|eat|taverna|dinner|drink|menu|confection/,()=>'Taverna by Olympus serves food and drinks, and the fast food counter and confectionery are on site. Menus go up on @taverna_by_olympus_ and @olympusfastfood_.'],[/room|stay|hotel|sleep/,()=>'Rooms are a concept on this page. The Olympus team would confirm room types and rates.'],[/salon|pharm|boutique|shop/,()=>'The salon, pharmacy and boutique are at the same address.'],[/price|cost|how much|fee/,()=>'The team confirms prices. Call '+TEL+' or send a WhatsApp message.'],[/call|phone|number|contact|whatsapp/,()=>'Call reservations on '+TEL+' or tap the WhatsApp button.'],[/^(hi|hello|hey|good)/,()=>'Hello, welcome to Olympus. What would you like to know?'],[/thank/,()=>'You are welcome. See you on New Road.']];
const log=$('#log'),add=(t,c)=>{const d=document.createElement('div');d.className='msg '+c;d.textContent=t;log.append(d);log.scrollTop=log.scrollHeight;return d};
const ask=async(q,f)=>{add(q,'me');const ty=add('','bot');ty.innerHTML='<span class="ty"><i></i><i></i><i></i></span>';await new Promise(r=>setTimeout(r,650));ty.remove();const l=q.toLowerCase(),r=f||((RU.find(x=>x[0].test(l))||[0,()=>'I do not have that yet. Call '+TEL+' and the team will help.'])[1]);add(r(),'bot')};
$('#cps').innerHTML=FAQ.map((f,i)=>`<button type="button" data-q="${i}">${f[0]}</button>`).join('');$('#cps').onclick=e=>{const b=e.target.closest('button');if(b)ask(FAQ[b.dataset.q][0],FAQ[b.dataset.q][1])};
$('#cfm').onsubmit=e=>{e.preventDefault();const v=$('#ci').value.trim();if(v){$('#ci').value='';ask(v)}};
