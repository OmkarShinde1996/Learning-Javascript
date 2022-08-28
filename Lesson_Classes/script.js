//Learnign classes in JS
class Car { //defining the class
    constructor(name, color, topSpeed){//Defining the parameterized constructor with properties
        this.name = name; //Here this is the instance of the variable (ferrari.name = ferrari)
        this.color = color;
        this.topSpeed = topSpeed;
        this.currSpeed = 0;
    }
    drive(currSpeed){ //Creating the method/function in class
        console.log('Started driving current speed is ',currSpeed);
    }
    break(currSpeed){ //Creating the method/function in class
        console.log('Applied breaks current speed is ',currSpeed);
    }
}

const ferrari = new Car ('Ferrari', 'Red','250mph');//Creating the instance of a class and passing some arguments to the constructor
console.log('Not driving and the speed is ',ferrari.currSpeed);
ferrari.drive(120);//Accessing the class method/function outside the class
ferrari.break(0);
console.log(ferrari);

//Creating our own push method called mypush()
Array.prototype.myPush = function(ele){
    this[this.length] = ele;
    return this;
}
const arr = [1,2,3,4,5,6];
arr.myPush(7);
arr.myPush(8);
console.log(arr);

//EventListners
const click = document.getElementById('click');
//Below is the example of event listner it takes 2 arguments 1st is event and 2nd is function
click.addEventListener('click',() => console.log('hey hey'))

//You can also add event listner to entire DOM like below
document.addEventListener('keydown', () => console.log('key pressed on keyboard'))

//another example
document.addEventListener('keydown', (e) => {
    if(e.key == "w"){
        console.log('You pressed Q');
    }else if(e.key == "a"){
        console.log('You pressed A');
    }else if(e.key == "s"){
        console.log('You pressed S');
    }else if(e.key == "d"){
        console.log('You pressed D');
    }
})