const introducer = (name, shirt) => {
    let person = {
        name : name,
        shirtColor : shirt,
        assets : 100000,
        liabilities : 500,
        netWorth : function(){
            return this.assets-this.liabilities;
        }
    }
    const intro = `Hi, My name is ${person.name}, My shirt color is ${person.shirtColor} and my net worth is $${person.netWorth()}`;
    return intro;
}

console.log(introducer('omkar', 'yellow'));


//printing square of every number in array
let num = [2,3,5,7,2,12,-14,10];
let array = [];
for(let i of num){
    array.push(i**2); // Double star (**) returns exponentiol in this case square of any number
}
console.log(array);


//Finding maximum number in array
let max = num[0];
for (let number of num){
    if(max < number){
        max = number;
    }
}
console.log({max});


//Counting the indexes/letters present in given string
const howManyLetters = (phrase) => {
    let result = 0;
    for(let i in phrase){
        result = Number(i)+1;//type casting with datatype Number
    }
    return {result}; //returning object you can also return simple result
}
const phrase = 'hey, can you go to grocery store with me?';
console.log(howManyLetters(phrase));


//Printing occurance of every character in string
const frequency= () => {
    let string = 'hahahahas';
    let object={};
    for(let i of string){
        if(i in object){ //condition return true or false depending on the present of the key in object list
            object[i]++;
        }else{
            object[i] = 1;
        }
    }
    return object;
}
console.log(frequency());

//Printing occurance of every word in string
const wordFrequency= () => {
    let string = 'hello how are you hello';
    let arrayString = string.split(' ');//This line will split the string on the basis of (space) and add it in array
    console.log(arrayString);//Here we are printing the array which we created by spliting the string
    let object={};
    for(let i of arrayString){
        if(i in object){ //condition return true or false depending on the present of the key in object list
            object[i]++;
        }else{
            object[i] = 1;
        }
    }
    return object;
}
console.log(wordFrequency());

//map() function : it is the easiest way to loop through an array (syntax : [1,2,3,4].map(number => console.log(number));)
let loop = [1,2,3,4].map(number => number * 2);
console.log(loop); //this will print [2,4,6,8]
const doubleMap = (number) => {
    return number.map(number => number*2);
}
console.log(doubleMap([1,2,3,4,5,6]));

//filter() function
//old way of filtering
// const filterOld = (numArray, greaterThan) => {
//     let resultOld = [];
//     for(let numA of numArray){
//         if(numA > greaterThan){
//             resultOld.push(numA);
//         }
//     }
//     return resultOld;
// }
// console.log(filterOld([1,2,3,4,5,6,7,8],3));
//.filter() way
let toBeFilter = [1,2,3,4,5,6,7,8,9,10];
console.log(toBeFilter.filter(filter => filter > 3));//returns [4,5,6,7,8,9,10]
//Example of filter() and map() function
let actoreResult = [
    {'name':'Akshay kumar', 'networth':100000},
    {'name':'Rahul shetty', 'networth':120000},
    {'name':'Salman khan', 'networth':1000},
    {'name':'Shahrukh khan', 'networth':140000},
    {'name':'prity zinta', 'networth':10000},
]
let reult = actoreResult.filter(actorName => actorName['networth'] > 10000);//Filtered the data accourding to the networth
let namesActor = reult.map(namesA => namesA.name).join(', ');//created an array with actor names using filtered data from above statement
console.log(namesActor);

//reduce() function
const sumUsingReduce = [1,2,3,4,5,6].reduce((a,b) => a+b);
console.log(sumUsingReduce); //Will print 21
//or as below
const sumfunction = (pre, curr) => (pre + curr);//creating a normal function which adds two numbers
const numArray1 = [1,2,3,4,5,6];
console.log(numArray1.reduce(sumfunction)); //Will also print 21
console.log(actoreResult.reduce((a,b) => a+b.networth,0));//Calculating total networth from actorResult array. 0 is required to calculate total networth it tells the code to start from 0.

