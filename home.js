console.log('Hey there! I am Omkar'); //consle.log is used for logging any enent or test in consol window
alert('Hey there!');//alert is used for showing alter pop up

////Variables
var b  = 'hello';
console.log(b);
var number  = 41;
console.log(number);

////Writing text on HTML page using JS
document.getElementById('getId').innerHTML = 'This text getting written using JS';

////Taking iput from user in alert box and printing it in console
var age7 = prompt('What is your age');
document.getElementById('getage').innerHTML = 'You are '+age7+' years old!';


////Creating Functions
function fun(){
    console.log('This is function generated');
}

////Askin guser to enter birth year and showing them their age
var birthYear = prompt('Whart is your birth year');
var currentYear = 2022;
var yearsOld = currentYear-birthYear;
age6(); //calling age function created below
function age6(){
    document.getElementById('getage1').innerHTML = 'You are '+yearsOld+' years old'; //String concatination
}


////How do arguments work in Functions?
var yourName = prompt('What is your name');
greeting(yourName);
function greeting(name){
    document.getElementById('greeting').innerHTML = 'Hello '+name;
}

////While loops
var num = 0;
while (num <= 5){
    console.log(num);
    num++;
}

////var and let is the same thing
for(let num1 = 10; num1 <= 15; num1++){
    console.log(num1);
}

////Datatypes in JS
let age3 = 26; //number
let name = 'Omakr'; //String
let fullName = {first :'omkar',last : 'shinde'}; //Object
let truth = false; //Boolean
let nams = ['omkar', 'aniket', 'rahul']; //Array
let random; //Undefined
let nothing = null; //value null

////Strings and common methods
let fruit = 'mango\napple' // \n - new line
let fruitName = 'banana';
console.log(fruitName.length); //gives String length
console.log(fruitName.charAt(2)); //gives character at position 2
console.log(fruitName.indexOf('n')); //return the index of character
console.log(fruitName.slice(0,4));//gives string within given range end character excluded
console.log(fruitName.replace('ban','nab')); //replaces given string
console.log(fruitName.toUpperCase()); // prints uppercase
console.log(fruitName.toLowerCase()); // prints lowercase
console.log(fruitName[2]);//gives charecter present at position 2
console.log(fruitName.split('')); //spliting the charecters ["b", "a", "n", "a", "n", "a"]

////Arrays in JS
let names = ['omkar', 'aniket', 'rahul'];
let newNames = new Array('siddhesh', 'raj', 'ram');
console.log(names[0]); // Accessing value at index 0 in arrays
names[0] = 'amol'; // Changing value at index in Arrays
console.log(names[0]); // Accessing value at index 0 in arrays
for(let index=0; index < newNames.length; index++){
    console.log(newNames[index]); //Printing array elements
}
console.log(names.toString()); //to convert array into string and print it
console.log(newNames.pop(), newNames); //pop method  is used to remove and return last element in array
console.log(newNames.push('sai'), newNames);//push is used to add element in array at last index
console.log(newNames.shift(), newNames); //shift will remove 1st element from the Array
console.log(newNames.unshift('niraj'), newNames); //unshift will add 1st element in the Array
let allNames = names.concat(newNames); //used to join 2 arrays
console.log(allNames);
console.log(allNames.slice(1,4));
console.log(allNames.reverse());//used to reverse the array
console.log(allNames.sort());//sorting array alphabatically
let numbers = [5,10,2,25,3,255,1,2,5,334,321,2];
console.log(numbers.sort(function(a,b){return a-b}));//sorting number array in ascending order
console.log(numbers.sort(function(a,b){return b-a}));//sorting number array in descending order
let emptyArray = new Array();
for(let i=0; i<10; i++){
    emptyArray.push(i);
}
console.log(emptyArray);

//// Objects in JS (Maps in java)
let student = {firstName : 'omkar', lastName : 'shinde', age : 26, rollNum : 36};
console.log(student.firstName); //Will pring omkar
console.log(student.lastName); //Will print shinde
console.log(student.firstName, student.lastName); //Will print omkar shinde
student.rollNum = '44'; //This will change rollNum value in student
console.log(student.rollNum);
student.age--; //This will decrease the value of age by 1
console.log(student.age);
let student1 = {firstName : 'aniket', 
    lastName : 'shinde', 
    age2 : 28, 
    rollNum : 26,
    studentInfo : function (){ //Creating function inside the object list
        return this.firstName + '\n' + this.lastName+ '\n' +this.age2+ '\n' +this.rollNum;
    }
};
console.log(student1.studentInfo());

//// Conditionals, control flows (If Else)
let age1 = 36;
if(age1 >= 18 && age1 <= 35){
    console.log('You are welcome');
}else{
    console.log('You are not Welcome');
}

//// Switch statements (note that JS deals with the variables as a string so when you enter number in prompt it will be as '11')
var day = prompt('Enter day in number from 0 to 6');
switch (day) {
    case '0':
        text = 'Weekend';
        break;
    case '5':
        text = 'Weekend';
        break;
    case '6':
        text = 'Weekend';
        break;
    default :
        text = 'Weekday';
}
console.log(text);


