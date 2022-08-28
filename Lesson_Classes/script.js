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