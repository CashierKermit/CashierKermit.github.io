// Small interactive bits
document.getElementById('year').textContent = new Date().getFullYear();


// mobile menu toggle
const btn = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');
btn?.addEventListener('click', ()=>{
if(!nav) return;
nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});


// lightweight lazy image fallback
document.addEventListener('DOMContentLoaded', ()=>{
document.querySelectorAll('img').forEach(img=>{
if(!img.complete){
img.loading = 'lazy';
}
});
});
