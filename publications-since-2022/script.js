const htmlEl=document.documentElement;
const enBtn=document.getElementById('en'),frBtn=document.getElementById('fr');
const T={en:['productions tracing this dynamic','axes of a common scientific continuum'],fr:['productions retraçant cette dynamique','axes d’un même continuum scientifique']};
function setLanguage(lang){
 const fr=lang==='fr'; htmlEl.classList.toggle('fr',fr); htmlEl.lang=lang;
 const a=document.getElementById('summary37'),b=document.getElementById('summary7');
 if(a)a.textContent=T[lang][0]; if(b)b.textContent=T[lang][1];
 if(enBtn)enBtn.classList.toggle('active',!fr); if(frBtn)frBtn.classList.toggle('active',fr);
 try{localStorage.setItem('publications-lang',lang)}catch(e){}
}
if(enBtn)enBtn.addEventListener('click',()=>setLanguage('en'));
if(frBtn)frBtn.addEventListener('click',()=>setLanguage('fr'));
let saved='en';try{saved=localStorage.getItem('publications-lang')||'en'}catch(e){}
setLanguage(saved);
