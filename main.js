// Basics of JavaScript 

/*
   Hey mom, look at my multiline comment!
   Let's put it on the fridge
   Primitive data types in JS: strings, integers, Booleans, floats, arrays, objects (very similar to Python dictionaries)
   Functions in JS
   Loops 
   Scripting vs Programming language 
*/

// String variables

var first_name = 'Zack';

// Display the value in JS 
console.log(first_name)

// Assign an integer
var some_number = 32;
console.log(some_number)

// show all attributes of a document or id
console.dir(document)

// Floats
var some_float = 3.141592
console.log(some_float)

// Array 
var some_array = [1,2,3,4];
console.log(some_array)

var some_object = {'Yee': 'haw'}
console.log(some_object)

// Javascript hoisting 

a_num = 10 
console.log(a_num)
var a_num
console.log(a_num)

console.log(some_random_variable) // Still runs but rerturns Undefined which is basically a None type; not good practice
var some_rabdom_variable = 'This is a random variable'
console.log(some_random_variable)

// A better way of declaring a variable is by using 'let' or 'const' keywords

let x; 
console.log(x)
x = 3
console.log(x)

const y = 5
console.log(5)
x = 6;
console.log(y)


// video break 1

// basic math operations

// Addition
let sum = 5 + 5 
console.log(sum)

// Subtraction 
let diff = 5 - 4

let diff_1 = 5
let diff_2 = 4
console.log(diff_1 - diff_2)

// Multiplication and division same as python, exponents as well 

// Some other math operations 
// Finding the floor of a decimal
let find_floor = Math.floor(5.8)
console.log(find_floor)
//Alternatively, Math.ceil(n) brings back the ceiling

// Mind bender
let crazy_stuff = some_float + '4'
console.log(crazy_stuff)

// Mind bender 2 
let crazy_stuff_2 = some_float + parseFloat('4')
console.log(crazy_stuff_2)

// Redclaration of variables
var red_ranger = 'Jason'
var red_ranger = 'Tommy'
console.log(red_ranger)

// Using the let keyword for the same
let nba_goat = 'Michael Jordan'
console.log(nba_goat)

nba_goat = 'Kobe'
console.log(nba_goat)

// Don't retype let on later variable changes

// Regular named functions
function addNums() {
    let num = 4;
    let num1 = 5;

    return num + num2
}

// def addNums():
//     return 4 + 5

// blah blah blah

console.log(addNums())

let addNum2 = function(num, num2){
    return num + num2
}

console.log(addNum2(6,7))

// E56+ Arrow function in JavaScript
// Our first example shows how to use a single parameter in an arrow function without parentheses
// This can only be done with one paraemeter if you dont want to use parenthesesk

let cubed = num => {
    return num**3
}

let someFunc = () => {
    return 5
}
console.log(someFunc())

console.log(cubed(4))

// with parentheses
let cubed2 = (num) => {
    return num**3
}
console.log(cubed2(4))

// If you have multiple parameters you must have parentheses around them 
let toThePower = (num, power) => {
    return num ** power
}

console.log(toThePower(4,3))

console.log(
    (function(name){
    let hello = 'Hello ' + name;
     return hello

})
('Joel'))

// Control flow
// if statements

function determineAge(Age){
    if (age <10){
        return 'Minor'
    } else if (age >= 18 && age < 65){
        return 'Adult'
    }
    else {
        return 'Senior'
    }
}

console.log(determineAge(15))

// Ternary Operators 
function determineAge2(age){
    return (age < 18) ? 'minor' : (age >= 18 && age <= 65) ? 'Adult not retired' : 'Elderly person not retired'
}

console.log(determineAge2(31))

// LOOOOOOOPS
function countByOne(){
    for(let i = 0; i < 20; i++){
        console.log(i)
    }
    return 'Counting has stopped'
} 

console.log(countByOne())

// def count_by_one():
//    for i in Range(0, 20, 1):
//        print(i)
//    return 'Counting has stopped'

function decreaseByOne(){
    for(let i = 20; i > 0; 1--){
        console.log(i)
    }
    return 'counting has stopped'
}

console.log(decreaseByOne())

function count_with_while(){
    let i = 0;
    let text = '';
    while(i < 10){
        text += 'this number is... ${i} \n';
        i++;
    };
    return text;
}
console.log(count_with_while())

// Do while loop
function countWithDoWhile(){
    let i = 0;
    let text = '';

    do {
        text += 'this number is... ${i} \n';
        i++;
    }

    while(i < 10)
    return text
}

// Do while will run at least one time!!!

console.log(countWithDownWhile())

// create while an array
let group_of_names = ['jerry', 'ben', 'bAsh', 'Brock', 'Misty']

// Index the first position
console.log(group_of_names[0])

let terry, ben, misty;
[terry, misty, ben] = group_of_names
console.log(terry, ben, misty)
console.log(group_of_names)
console.log(ben)

// Method 1 for loopimg through an array
function showAllNames(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[1])
    }
    return 'done'
}

console.log(showAllNames())

// Method 2 
console.log(group_of_names.forEach(element => console.log(element)))

// JS Array method: array.toString()
console.log(group_of_names.toString())
console.log(typeof(group_of_names.toString()))

// More methods: map, filter, reduce

//.map()
let b_names = group_of_names.map( i => {
    if (i[0] == 'B'){
        return i 
    } else {
        return false
    }
})

console.log(b_names)

// long form of .map()
let b_names_test = function (){
    let test_array = [];
    for(let i = 0; i < group_of_names.length; i++){
        if(group_of_names[i][0] == 'B'){
            test_array.push(group_of_names[i])
        }
    }
    return test_array
}

console.log(b_names_test())

// .filter()

let long_names = group_of_names.filter( element => element.length > 4)
console.log(long_names)

// .reduce()

const nums = [2,4,6,8,10]

let nums_reduced = nums.reduce( (accumulator, current_num) => {
    return accumulator + current_num
})
console.log(nums_reduced)

// You can also use methods like .join, .slice, .search, .splice