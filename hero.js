let hero =document.getElementById('hero');
let block = document.getElementById('bg');
let l = 40;



window.addEventListener('keydown',keydownEvent);

function keydownEvent(event){
  
   if(event.keyCode===37&& l>-1){
      let move = hero.style.backgroundPositionX = '-70px';
      
      hero.style.left= l-- +'1px';
       console.log(l);
   }
   else if(event.keyCode===39 && l<77){
   
    hero.style.backgroundPositionX='-100px';
    hero.style.left= l++ +'1px';
   }
  
}



