
//Challange 1 : Your Age in Days Logic

function ageDays(){
    let birthYear = prompt('Enter your birth year');
    let ageInDays = (2022 - birthYear) * 365;
    let h1 = document.createElement('h1'); //Creating the h1 tag in HTML body <h1></h1>
    let textAnswer = document.createTextNode('You are '+ageInDays+' days old'); //Defining the textAnswer variable
    h1.setAttribute('id', 'ageInDays'); //Setting new attribute in h1 tag "id" = 'ageInDays'
    h1.appendChild(textAnswer); //Assingning textAnswer to h1 tag <h1 id='ageInDays'>textAnswer</h1>
    document.getElementById('flex-box-result').appendChild(h1); //Defining where to put that h1 tag. In this case under tag with id flex-box-result
}

function reset(){
    document.getElementById('ageInDays').remove(); //removing an element with id 'ageInDays' from HTML when reset button gets clicked
}

//Challange 2 : Cat Generator
function generateCat(){
    let img = document.createElement('img');
    let imageUrl = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    img.setAttribute('src',imageUrl);
    document.getElementById('catGeenrator').appendChild(img);
}

function removeCat(){
    document.getElementById('catGeenrator').remove();
    location.reload();
}

//Challange 3 : Rock, Paper, Scissors
function rpsGame(yourChoice){ //Object sent as an argument to the function
    //Below line will pring img.alt in console
    console.log('your choice : '+yourChoice.id); //You can click on any element and print it in console by sending the object as an argument to the function
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = NumToChoice(randomNumChoice());
    console.log('bot choice : '+botChoice);
    result = decideWinner(humanChoice, botChoice);//[0,1] = human lost | bot won
    console.log(result);
    message = finalMessage(result);//WIll return list of objects {'message':'You Won!', 'color':'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message);
}

function randomNumChoice(){
    return Math.floor(Math.random() * 3);
}

function NumToChoice(number){
    return ['rock','paper','scissor'][number];
}

function decideWinner(yourChoice, computerChoice){
    let gameData = {
        'rock':{'rock':0.5, 'paper':0, 'scissor':1},
        'paper':{'rock':1, 'paper':0.5, 'scissor':0},
        'scissor':{'rock':0, 'paper':1, 'scissor':0.5},
    }
    let yourScore = gameData[yourChoice][computerChoice];
    let computerScore = gameData[computerChoice][yourChoice];
    return [yourScore,computerScore];
}

function finalMessage([yourScore,computerScore]){
    //We are using here '===' because ('5'==5 => true and '5'===5 => false)
    if(yourScore === 0){
        return {'message':'You lost!','color':'red'};
    }else if(yourScore === 1){
        return {'message':'You won!','color':'green'};
    }else{
        return {'message':'Tied!','color':'blue'};
    }
}

function rpsFrontEnd(humanChoiceImg, botChoiceImg, message){
    let imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }
    //removing all the images to show humanChoice message and botChoice
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    //showing message logic
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img id='humanChoice' src='"+imageData[humanChoiceImg]+"'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    messageDiv.innerHTML = "<div class='btn' style='font-size:25px; color:"+message['color']+";' onclick='location.reload()'>"+message['message']+" click here to play again</div>";
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    botDiv.innerHTML = "<img id='botChoice' src='"+imageData[botChoiceImg]+"'>";
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}

//Challange 4 : Change color of all buttons
let all_buttons = document.getElementsByClassName('btn'); //It will get all the elements with class 'btn'
console.log(all_buttons);//[button.btn.btn-primary, button.btn.btn-danger, div.btn.btn-success, div.btn.btn-danger, div.btn.btn-primary, div.btn.btn-secondary, div.btn.btn-success, div.btn.btn-danger]
let copyAllButtons = [];
for(let i=0;i<all_buttons.length;i++){
    copyAllButtons[i]=all_buttons[i].classList[1];//THis will store 2nd class in 'copyAllButtons' array
}
console.log(copyAllButtons);//["btn-primary", "btn-danger", "btn-success", "btn-danger", "btn-primary", "btn-secondary", "btn-success", "btn-danger"]

function btnColorChange(buttonThing){
    if(buttonThing.value==='red'){
        buttonRed();
    }else if(buttonThing.value==='green'){
        buttonGreen();
    }else if(buttonThing.value==='reset'){
        buttonReset();
    }else if(buttonThing.value==='random'){
        buttonRandom();
    }
}

function buttonRed(){
    for(let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i=0; i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom(){
    let choices = ['btn-primary','btn-danger','btn-success','btn-secondary','btn-info','btn-warning']
    for(let i=0; i<all_buttons.length;i++){
        let randomNumber = Math.floor(Math.random() * 6);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}



//Challenge 5 : Blackjack
let blackjackGame = {
    'you' : {'scoreSpan':'#your-blackjack-score','div':'#your-box','score':0},
    'dealer' : {'scoreSpan':'#dealer-blackjack-score','div':'#dealer-box','score':0},
    'cards' : ['2','3','4','5','6','7','8','9','10','K','J','Q','A'],
    'cardValue' : {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A':[1,11]},
    'wins' : 0,
    'losses' : 0,
    'draws' : 0,
}
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const HITSOUND = new Audio('./assets/sounds/swish.m4a'); //Adding sound
const LOSTSOUND = new Audio('./assets/sounds/aww.mp3');
const WINSOUND = new Audio('./assets/sounds/cash.mp3');

document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackHit);
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackStand);
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackDeal);

function randomCard(){
    let randomIndex = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndex];
}

function blackjackHit(){
    let card = randomCard();
    console.log(card); //Printing in console which card is shown
    showCards(card,YOU);
    updateScore(card,YOU); 
    showScore(YOU);
    console.log(YOU['score']); //Printing in console what is the player score
}

function blackjackStand(){
    let card = randomCard();
    showCards(card,DEALER);
    updateScore(card,DEALER); 
    showScore(DEALER);

    if(DEALER['score'] > 15){
        let winner = decideWinner();
        showResult(winner);
    }
}

function showCards(card,activePalyer){
    if(activePalyer['score'] <= 21){
        let cardImage = document.createElement('img');
        cardImage.src = `./assets/images/${card}.jpg`;//it is called string templating
        document.querySelector(activePalyer['div']).appendChild(cardImage);
        HITSOUND.play();//Playing sound whenever Hit button gets clicked
    }
    
}

function blackjackDeal(){
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');//Storing all the card images present on the screen in array
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');//Storing all the card images present on the screen in array
    for(let i=0;i<yourImages.length;i++){
        yourImages[i].remove();
    }
    for(let i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();
    }
    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#your-blackjack-score').textContent = 0; //Setting player score back to 0
    document.querySelector('#your-blackjack-score').style.color = 'white'; //Setting player score color back to white
    document.querySelector('#dealer-blackjack-score').textContent = 0; //Setting dealer score back to 0
    document.querySelector('#dealer-blackjack-score').style.color = 'white'; //Setting dealer score color back to white
    document.querySelector('#blackjack-result').textContent = "Let's play";
    document.querySelector('#blackjack-result').style.color = 'black';
    
}

function updateScore(card,activePalyer){
    if(card === 'A'){
        //If adding 11 keeps me below 21, add 11. Otherwise add 1
        if(activePalyer['score'] + blackjackGame['cardValue'][card][1] <= 21){
            activePalyer['score'] += blackjackGame['cardValue'][card][1]; //Will add 11
        }else{
            activePalyer['score'] += blackjackGame['cardValue'][card][0]; //Will add 1
        }
    }else{
        activePalyer['score'] += blackjackGame['cardValue'][card];
    }
}

function showScore(activePalyer){
    if(activePalyer['score'] >= 21){
        document.querySelector(activePalyer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePalyer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePalyer['scoreSpan']).textContent =activePalyer['score'];
    }
}

//decide winner and return who just won
//update the wins, loses and draws in table
function decideWinner(){
    let winner;
    if(YOU['score'] <= 21){
        //condition : higher score than dealer or when dealer busts but you're 21 or under
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
            blackjackGame['wins']++;
            winner=YOU;
        }else if (YOU['score'] < DEALER['score']){
            blackjackGame['losses']++;
            winner=DEALER;
        }else if (YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }
        //condition : When you busts but dealer doesn't
    }else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        blackjackGame['losses']++;
        winner=DEALER;
        //condition : when you and sealer both busts
    }else if (YOU['score'] > 21 && DEALER['score'] > 21){
        blackjackGame['draws']++;
    }
return winner;
}

function showResult(winner){
    let message, messageColor;
    if(winner === YOU){
        document.querySelector('#blackjack-wins-result').textContent = blackjackGame['wins'];
        message = 'You won!';
        messageColor = 'green';
        WINSOUND.play();
    }else if (winner === DEALER){
        document.querySelector('#blackjack-loses-result').textContent = blackjackGame['losses'];
        message = 'You lost!';
        messageColor = 'red';
        LOSTSOUND.play();
    }else{
        document.querySelector('#blackjack-draws-result').textContent = blackjackGame['draws'];
        message = 'You drew!';
        messageColor = 'black';
    }
    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
}