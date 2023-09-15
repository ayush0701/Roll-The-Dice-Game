var  scores;
var roundscore;
var activeplayer;
var dice;
var gameplaying;
var lastdice;

init();

// dice = Math.floor(Math.random()*6)+1;

// document.querySelector('#current-'+ activeplayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;
// console.log(x);


document.querySelector('.btn-roll').addEventListener('click',function (){
  if(gameplaying){
    var dice1 = Math.floor(Math.random()*6)+1;
    var dice2 = Math.floor(Math.random()*6)+1;

     document.getElementById('dice-1').style.display ='block';
     document.getElementById('dice-2').style.display ='block';
     document.getElementById('dice-1').src = 'dice-' +dice1 + '.png';
     document.getElementById('dice-2').src = 'dice-' +dice2 + '.png';
 

//      if(dice === 6 && lastdice===6){
//         scores[activeplayer]=0;
//         document.querySelector('#score-'+ activeplayer).textContent = scores[activeplayer];
//         nextPlayer();
//      }

   if(dice1!==1 && dice2!==1){
    roundscore+=dice1+dice2;
    document.querySelector('#current-' +activeplayer).textContent=roundscore;
   }

//    else{

//     nextPlayer();
//    }

//   }
  
//   lastdice=dice;
    
}

})

document.querySelector('.btn-hold').addEventListener('click',function() {
if(gameplaying){

    scores[activeplayer] +=roundscore;

    document.querySelector('#score-'+ activeplayer).textContent = scores[activeplayer];
    var winningscore;

     var input =document.querySelector('.final-score').value;

     if(input){
        winningscore = input;
     }
     else{
        winningscore =20;
     }




    if(scores[activeplayer]>=winningscore){
        document.querySelector('#name-' +activeplayer).textContent = 'WINNER!';
        document.querySelector('.dice-1').style.display = 'none';
        document.querySelector('.player-'+activeplayer + '-panel').classList.add('WINNER');
        document.querySelector('.player-'+activeplayer + '-panel').classList.remove('active');
        gameplaying = false;
    }
    else{
    nextPlayer();
    }

}


   




})


function nextPlayer(){
    activeplayer === 0? activeplayer=1:activeplayer =0;
    roundscore =0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent ='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display ='none';
     document.getElementById('dice-2').style.display ='none';
   

}

document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});

function init(){
    scores =[0,0];
    roundscore = 0;
    activeplayer = 1;
    gameplaying = true;

    
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent='0'; 
document.getElementById('score-1').textContent='0'; 
document.getElementById('current-0').textContent='0'; 
document.getElementById('current-1').textContent='0'; 
document.getElementById('name-0' ).textContent = 'player-1';
document.getElementById('name-1' ).textContent = 'player-2';

document.querySelector('.player-0-panel').classList.remove('WINNER');

document.querySelector('.player-1-panel').classList.remove('WINNER');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

}