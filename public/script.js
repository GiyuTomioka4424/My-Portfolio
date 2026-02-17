function openMenu(){
document.getElementById("menu").classList.add("active");
document.getElementById("overlay").classList.add("active");
}

function closeMenu(){
document.getElementById("menu").classList.remove("active");
document.getElementById("overlay").classList.remove("active");
}

const words = [
"Hello, I'm Vern",
"Creative Developer",
"UI Designer",
"Web Builder"
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const textElement = document.getElementById("text");

function typeEffect(){
currentWord = words[wordIndex];

if(isDeleting){
charIndex--;
}else{
charIndex++;
}

textElement.textContent = currentWord.substring(0, charIndex);

if(!isDeleting && charIndex === currentWord.length){
setTimeout(()=> isDeleting = true, 800);
}
else if(isDeleting && charIndex === 0){
isDeleting = false;
wordIndex = (wordIndex + 1) % words.length;
}

setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

window.addEventListener("scroll", () => {
document.querySelectorAll("section").forEach(sec => {
const offset = sec.offsetTop - 300;
if(window.scrollY > offset){
sec.classList.add("show");
}else{
sec.classList.remove("show");
}
});
});