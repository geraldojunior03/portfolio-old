// ESCRITA QUALIDADES

document.addEventListener('DOMContentLoaded', () => {
    new TypeIt(".texto-animado", {
        speed: 250,
        loop: true
    })
    .type('Analista QA', {delay: 1000})
    .delete(11)
    .type('Desenvil', {delay: 500})
    .delete(2)
    .type('olvedore', {delay: 500})
    .delete(1)
    .type(' .NET', {delay: 1000})
    .pause(1000)
    .delete(4)
    .type('C#', {delay: 500})
    .delete(16)
    .go();
})

// SLIDER PROJETOS

console.clear();
let items = document.querySelector(`.galeria-projetos`),
    prev = document.querySelector(`.prev`),
    next = document.querySelector(`.next`), current = 0, maxCurrent = items.children.length;

prev.addEventListener('click', event => {
  current--;
  if (current < 0) current += maxCurrent;
  
  [...items.children].forEach(child => child.classList.remove('atual'));
  
  const currentChildren = items.children[current];
  
  currentChildren.classList.add('atual');
  items.scrollTo(currentChildren.offsetLeft - (items.offsetWidth - currentChildren.offsetWidth) / 2, currentChildren.offsetTop);
});

next.addEventListener('click', event => {
  current++;
  if (current >= maxCurrent) current -= maxCurrent;
  
  [...items.children].forEach(child => child.classList.remove('atual'));
  
  const currentChildren = items.children[current];
  
  currentChildren.classList.add('atual');
  items.scrollTo(currentChildren.offsetLeft - (items.offsetWidth - currentChildren.offsetWidth) / 2, currentChildren.offsetTop);
});

// SCROLL ANIMADO

const $animatedItems = document.querySelectorAll('[data-anime]');
const $animationClass = 'animate';

function $scrollAnimation(){
  const $topSize = window.pageYOffset + ((window.innerHeight * 2.5) / 4); 
  $animatedItems.forEach(function(element){
    if(($topSize) > element.offsetTop){
      element.classList.add($animationClass)
    }
  })
}

window.addEventListener('scroll', function(){
  $scrollAnimation();
})
