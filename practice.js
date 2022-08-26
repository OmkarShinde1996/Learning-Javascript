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