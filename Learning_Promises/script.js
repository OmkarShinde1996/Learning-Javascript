//Deep diving into Asynchronous programming 

//to set timeout for some function or process use below
setTimeout(() => console.log('Printed after 5 sec'), 5000); //1000 ms = 1sec

//Creating the 1st promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random()*2)];
        //ternary operator : Syntax (condition ? true statement : false statement)
        isReady ? resolve('We are ready to rock!') : reject('We are not yet ready!');
    },2000)
});
//Below we are printing the resolve value in case condition is true and reject value in case condition is false/rejected
console.log(promise1.then(resolve => console.log(resolve)).catch(reject => console.log(reject)));

console.log(
    fetch('https://dog.ceo/api/breeds/image/random') //it is a promise
    .then(response => response.json()) //It is also a promise
    .then(data => console.log(data)) //here we are retriving the data from above promises and printing it on console
)

//Avoid using above syntax for defining the promises instead use below using ASYNC & AWAIT
//Rules for using async/await
//1. You must create a function
//2. Always wrap function body into try catch block so you can later print or use error part also
//3. You must use the keyword async
//4. You must use the keyword await
const getDogData = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response1 = await fetch(url);
    const data = await response1.json();
    console.log(data);
}
getDogData();

const promis1Data = async () => {
    //wrap entire function body in try catch to also catch the error message
    try{
        const data = await promise1;
        console.log(data); //Prints success/resolve message
    }catch(error){//pass the error/reject message
        console.log(error);//prints the error/reject message
    }
    
}

promis1Data();

const sum = async (a,b) => {
    const result = await a+b;
    console.log(result);
}
console.log(sum(1,2));