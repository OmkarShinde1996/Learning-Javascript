
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