
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