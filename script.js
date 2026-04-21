AOS.init({duration:1000,once:true});
gsap.from('.hero-content',{y:80,opacity:0,duration:1.2});
const toggle=document.getElementById('themeToggle');
toggle.onclick=()=>{document.body.classList.toggle('dark');toggle.innerHTML=document.body.classList.contains('dark')?'<i class="fa-solid fa-sun"></i>':'<i class="fa-solid fa-moon"></i>';};