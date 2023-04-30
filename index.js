const startBtn = document.getElementById('game-btn');
const brownHorse = document.getElementById('brown-horse');
const whiteHorse = document.getElementById('white-horse');
const orangeHorse = document.getElementById('orange-horse');
const horseRoad = document.getElementById('road');
const colorHorse = document.getElementById('horse-color');
const wallet = document.getElementById('wallet');
let brownHorseLeft = 0;
let whiteHorseLeft = 0;
let orangeHorseLeft = 0;
let money = 0;
let selectedHorse;
let bet ;
const input = document.getElementById('bet');


document.addEventListener('DOMContentLoaded',() => {

    const gallopSound = document.getElementById('horse-gallop');
    const horseSound = document.getElementById('horse-sound');
    horseSound.play();
    gallopSound.play();
   
    let moveHorse = setInterval(()=>{
        
        brownHorseLeft = brownHorseLeft + Math.floor(Math.random() * 30);
        brownHorse.style.left = brownHorseLeft + "px";
        

        whiteHorseLeft = whiteHorseLeft + Math.floor(Math.random() * 30);
        whiteHorse.style.left = whiteHorseLeft + "px";

        orangeHorseLeft = orangeHorseLeft + Math.floor(Math.random() * 30);
        orangeHorse.style.left = orangeHorseLeft + "px";

        if((brownHorseLeft+brownHorse.clientWidth)> horseRoad.clientWidth || (whiteHorseLeft+whiteHorse.clientWidth)> horseRoad.clientWidth || (orangeHorseLeft+orangeHorse.clientWidth)> horseRoad.clientWidth){
            clearInterval(moveHorse);

            if((brownHorseLeft+brownHorse.clientWidth)>= horseRoad.clientWidth){
                winner = "Brown";
                alert("The Brown horse won");
               
            }

            else if((whiteHorseLeft+whiteHorse.clientWidth)>= horseRoad.clientWidth){
                winner = "White";
                alert("The White horse won");
            }

            else if((orangeHorseLeft+orangeHorse.clientWidth)>= horseRoad.clientWidth){
                winner = "Orange";
                alert("The Orange horse won");
            }
            if(selectedHorse === 'winner'){
                money += bet;
                wallet.innerText(money);
            }
            

            brownHorse.style.left="0px";
            brownHorseLeft = 0;
            whiteHorse.style.left="0px";
            whiteHorseLeft = 0;
            orangeHorse.style.left="0px";
            orangeHorseLeft = 0;
        }

    },200) 
   
    
  
    
    if(colorHorse.selectedIndex.value ===winner){
        money += input.value;
        wallet.innerText(money);
    }
});



