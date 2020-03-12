// valriable // !== ===
var myNAme = "Cris";

if(myNAme !== "Cris"){
    console.log(myNAme);
} else if (myNAme === "John"){
    console.log("My name is JOHN");
} else
{
    console.log("My name is not John");
}

// number variable   //  < >=
var myNumber = 20;

if(myNumber > 20){
    console.log('more than 20');
} else if(myNumber < 20){
    console.log('less than 20');
} else {
    console.log("20");
}

// variable dynamically reassignment
var a = 10;
a = a + 5;
a += 5;
a++;
++a;

// variable string
var myString = "Hello";

console.log(myString.length);
console.log(myString[0]); //first char 
console.log(myString[myString.length - 1]); //last char 

//number
var Result = (5+7)/2;
console.log(Result);

//bool
var Myboolean = true;

var invertB = !Myboolean;

var Resulta = Myboolean === invertB;
if(!Resulta){
    console.log('equal');
}

// empty none
var myNull = null;
var myUndefine = undefined;
console.log(myNull,myUndefine);

//logic operator    || or     && and      ! not

