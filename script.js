(function(){
'use strict';
/* ===== CONFIGURE ===== Enter the WhatsApp number with country code, digits only (e.g. "255700000000"). */
var WHATSAPP_NUMBER='';
var reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var hd=$('header'),tg=$('.tg'),nav=$('nav'),curtain=$('.curtain');
var wa=function(t){return'https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(t)};
/* mobile menu */
if(tg){tg.addEventListener('click',function(){var o=nav.classList.toggle('open');tg.setAttribute('aria-expanded',o);tg.setAttribute('aria-label',o?'Close menu':'Open menu')});
$$('nav a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');tg.setAttribute('aria-expanded',false)})});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){nav.classList.remove('open');tg.setAttribute('aria-expanded',false)}})}
/* page transitions */
$$('a[href]').forEach(function(a){var h=a.getAttribute('href');
if(reduce||!curtain||!/^[\w-]+\.html(#.*)?$/.test(h)||a.target)return;
a.addEventListener('click',function(e){if(e.metaKey||e.ctrlKey||e.shiftKey)return;
var same=h.split('#')[0]===(location.pathname.split('/').pop()||'index.html');if(same&&h.indexOf('#')>-1)return;
e.preventDefault();curtain.classList.add('cl');setTimeout(function(){location.href=h},460)})});
addEventListener('pageshow',function(e){if(e.persisted&&curtain)curtain.classList.remove('cl')});
/* reveal + counters */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);
if(e.target.dataset.n)count(e.target)})},{threshold:.15});
$$('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
$$('[data-n]').forEach(function(el){if(!el.classList.contains('rv'))io.observe(el)});
function count(el){var n=+el.dataset.n;if(reduce){el.textContent=n;return}var t0=performance.now();
(function s(t){var p=Math.min((t-t0)/1400,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(s)})(t0)}
/* scroll: header state + parallax */
var items=$$('[data-p]'),tick=false;
function upd(){tick=false;var y=scrollY;hd.classList.toggle('sc',y>20);
if(!reduce)items.forEach(function(el){var r=el.getBoundingClientRect();if(r.bottom<-100||r.top>innerHeight+100)return;
var d=(r.top+r.height/2-innerHeight/2)*(+el.dataset.p);
if(el.classList.contains('vis'))el.style.setProperty('--py',d+'px');else el.style.transform='translateY('+d+'px)'})}
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();
/* contact form */
var f=$('#enq');
if(f){var sel=$('#service'),st=$('#st'),q=new URLSearchParams(location.search).get('service');
if(q)$$('option',sel).forEach(function(o){if(o.dataset.id===q)sel.value=o.value});
var msg=function(){var d=new FormData(f);return'Hello Vanguard Shield, I would like to make an enquiry.\nName: '+d.get('name')+'\nService: '+d.get('service')+'\nPhone/Email: '+d.get('contact')+'\nMessage: '+d.get('message')};
f.addEventListener('submit',function(e){e.preventDefault();
if(!WHATSAPP_NUMBER){st.textContent='WhatsApp is not configured yet. Set WHATSAPP_NUMBER at the top of script.js to enable enquiries.';return}
st.textContent='Opening WhatsApp with your enquiry…';open(wa(msg()),'_blank','noopener')});
var wb=$('#wa');if(wb)wb.addEventListener('click',function(e){e.preventDefault();
if(!WHATSAPP_NUMBER){st.textContent='WhatsApp is not configured yet. Set WHATSAPP_NUMBER at the top of script.js to enable enquiries.';return}
open(wa('Hello Vanguard Shield, I would like to request a security consultation.'),'_blank','noopener')})}
$$('.yr').forEach(function(e){e.textContent=new Date().getFullYear()});
})();
