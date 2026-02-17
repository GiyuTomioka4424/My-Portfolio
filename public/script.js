function openMenu(){
  document.getElementById("menu").classList.add("active");
  document.getElementById("overlay").classList.add("active");
}
function closeMenu(){
  document.getElementById("menu").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
}

// Animated typing text
const words=["Hello, I'm Vern","Creative Developer","UI Designer","Web Builder"];
let wordIndex=0,charIndex=0,isDeleting=false;
const textElement=document.getElementById("text");

function typeEffect(){
  let currentWord = words[wordIndex];
  charIndex = isDeleting ? charIndex-1 : charIndex+1;
  textElement.textContent = currentWord.substring(0,charIndex);
  if(!isDeleting && charIndex===currentWord.length){setTimeout(()=>isDeleting=true,800);}
  else if(isDeleting && charIndex===0){isDeleting=false; wordIndex=(wordIndex+1)%words.length;}
  setTimeout(typeEffect,isDeleting?50:100);
}
typeEffect();

// Scroll reveal
window.addEventListener("scroll",()=>{
  document.querySelectorAll("section").forEach(sec=>{
    const offset = sec.offsetTop - 300;
    if(window.scrollY > offset){sec.classList.add("show");}
    else{sec.classList.remove("show");}
  });

  document.querySelectorAll(".project-box").forEach((box,index)=>{
    const boxTop = box.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if(boxTop < screenHeight-100){
      setTimeout(()=>box.classList.add("show"), index*100);
    }
  });
});