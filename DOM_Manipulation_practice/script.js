//DOM stands for Document Object Model
let title = document.getElementById('title'); //To get element by id
console.log(title);//prints (<h2 id="title">Hello world</h2>)
console.log(title.innerHTML);//To show inner HTML tags we use innerHTML
let message = 'Hello Omkar!'
title.innerText = message;//To change the text content of the tag. you can use textContent or innerText to change the text
console.log(title.innerHTML);

//Use innerHTML to add or change inner tags of main tag like below we are adding <p> tag into <h2>
title.innerHTML = `<p>${message}</p>`;


title.style.color = 'black';//To change style property (color)
title.style.backgroundColor = 'white';//To change style property (backgroundColor)

let header = document.getElementById('header'); //storing element position in variable
let red = document.getElementById('red'); //storing element position in variable
let yellow = document.getElementById('yellow'); //storing element position in variable
let green = document.getElementById('green'); //storing element position in variable
let reset = document.getElementById('reset'); //storing element position in variable
let reset1 = document.getElementById('reset1'); //storing element position in variable

//Changing color 1 by 1
red.onclick = () => (header.style.color = 'red');//When user clicks on button we are changing color of text using onclick function
yellow.onclick = () => (header.style.color = 'yellow');//When user clicks on button we are changing color of text using onclick function
green.onclick = () => (header.style.color = 'green');//When user clicks on button we are changing color of text using onclick function
reset.onclick = () => (header.style.color = 'black');//When user clicks on button we are changing color of text using onclick function

//Changing color with loop and function
let header1 = document.getElementById('header1'); //storing element position in variable
const buttons = document.querySelectorAll('.btn-lg');//This line will get all the elements with class 'btn'
console.log(buttons);//Printing all the elements with class 'button' in console
let buttonClicked = {'Red':0,'Yellow':0,'Green':0};//maintaining button clicked count
buttons.forEach(button => {//looping through each button
    button.onclick = () => {
        buttonClicked[button.value]++;//updating button clicked count in object list
        button.innerText = buttonClicked[button.value];//showing button clicked count on button when clicked
        header1.style.color = button.value//changing text color based on which button is pressed
        };//function to change the color based on which button is pressed
    }
);
//When reset button gets clicked button inner text will be resetted and text color will be changed to black
reset1.onclick = () => { 
    buttons.forEach(btn => {
        buttonClicked[btn.value]=0;//resetting the values back to 0 in object list 
        btn.innerText = btn.value;//changing the button text back to it's original text
        header1.style.color = 'black';//changing text color back to black
    })
}


