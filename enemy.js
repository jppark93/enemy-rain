class Enemy{
   constructor(){
    this.hero = document.getElementById('hero');
    this.backImage = document.getElementById('bg'); //배경 dom
    this.enemyElement = document.createElement('div'); // div 생성
    this.enemyElement.id = "enemy"; // 생성된 div id값
    this.topValue = 0; // 현재의 top값
    this.enemyElement.style.left = 0+'px'; // enemy x축
    this.enemyElement.style.top = 0+'px'; // enemy top
    this.enemyFall(); // enemy 떨어지는 함수 실행 
    this.enemyChild();// 랜덤생성 함수 실행
   }

   enemyFall(){//enemy 떨어짐
       setInterval(() => {  
    
       this.enemyElement.style.top = this.topValue++ +'%'; // 점차 떨어짐 
        if(this.topValue>93){
            this.enemyElement.style.backgroundPositionX='-135px'; // enemy바닥에 닿으면 이미지변경
        }
        if(this.topValue>94){  
           
            this.backImage.removeChild(this.enemyElement); //enemy remove
        }
        if(this.hero.style.left===this.enemyElement.style.left && this.enemyElement.style.top===this.enemyElement.style.top){
            this.backImage.removeChild(this.enemyElement);
        }
    }, 100);    
   }

   enemyChild(){ // enemy 랜덤 생성
    const random =  Math.floor(Math.random()*(760-1+1)) + 1;//랜덤
    this.backImage.appendChild(this.enemyElement);// id값이 enemy인 div 생성 
    this.enemyElement.style.left= random +'px';// enemy가 x축에서 랜덤하게 등장
   }
}



setInterval(() => {
    new Enemy();
}, 2000)


