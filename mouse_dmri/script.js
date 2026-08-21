
const H=document.documentElement,en=document.getElementById('en'),fr=document.getElementById('fr');
function setLang(l){H.classList.toggle('fr',l==='fr');H.lang=l;en.classList.toggle('active',l==='en');fr.classList.toggle('active',l==='fr');localStorage.setItem('mouse-dmri-lang',l)}
en.onclick=()=>setLang('en');fr.onclick=()=>setLang('fr');setLang(localStorage.getItem('mouse-dmri-lang')||'en');
const modal=document.getElementById('modal'),mi=document.getElementById('mimg'),mc=document.getElementById('mcap');
document.querySelectorAll('.figure').forEach(f=>f.onclick=()=>{mi.src=f.dataset.img;mc.textContent=H.lang==='fr'?(f.dataset.capFr||f.dataset.capEn):f.dataset.capEn;mi.dataset.pdf=f.dataset.pdf||'';modal.classList.add('open')});
mi.onclick=()=>{if(mi.dataset.pdf) window.open(mi.dataset.pdf,'_blank','noopener')};
document.getElementById('close').onclick=()=>modal.classList.remove('open');
modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')});
