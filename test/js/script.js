// 1
let num1 = Number(prompt("Enter the number"));

if(num1 > 0){
  console.log(`The number ${num1} is positive`);
}
else if(num1 < 0){
  console.log(`The number ${num1} is negative`);
}
else{
  console.log(`The number ${num1} is zero`);
}

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------

// 2
let num2 = Number(prompt("Enter the number"));

if(num2 % 2 == 0 && num2 != 0){
  console.log(`The number ${num2} is even`);
}
else if(num2 % 2 != 0){
  console.log(`The number ${num2} is odd`);
}
else{
  console.log(`The number ${num2} is zero`);
}

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------

// 3
let num3 = Number(prompt(`Enter the 1st number`));
let num4 = Number(prompt(`Enter the 2nd number`));
let num5 = Number(prompt(`Enter the 3rd number`));

if (num3 === num4 && num4 === num5) {
  console.log("All numbers are equal");
}

else if (num3 >= num4 && num3 >= num5) {

  if (num3 === num4 && num3 > num5) {
    console.log(`Number ${num3} and Number ${num4} are the largest`);
  }

  else if (num3 === num5 && num3 > num4) {
    console.log(`Number ${num3} and Number ${num5} are the largest`);
  }

  else {
    console.log(`Number ${num3} is the largest number`);
  }
}

else if (num4 >= num3 && num4 >= num5) {

  if (num4 === num5 && num4 > num3) {
    console.log(`Number ${num4} and Number ${num5} are the largest`);
  }

  else {
    console.log(`Number ${num4} is the largest number`);
  }
}

else {
  console.log(`Number ${num5} is the largest number`);
}

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------

// 4
let grade = Number(prompt(`Enter your grade: `));

if(grade >= 90){
  console.log(`Your grade ${grade} is A`);
}
else if(grade >= 80){
  console.log(`Your grade ${grade} is B`);
}
else if(grade >= 70){
  console.log(`Your grade ${grade} is C`);
}
else if(grade >= 60){
  console.log(`Your grade ${grade} is D`);
}
else{
  console.log(`Your grade ${grade} is F`);
}

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------

// 5
let num6 = Number(prompt(`Enter number you want to print from 1 to: `));
console.log(`The Chosen Number Is ${num6}`)
for(let i=1; i<=num6; i++){
  console.log(i);
}

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------

// 6
let num7 = Number(prompt(`Enter number you want to sum from 1 to: `));
console.log(`The Chosen Number Is ${num7}`);
let sum = 0;

for(let i=1; i <= num7; i++){
  sum += i;
}

console.log(`The Sum for 1 to ${num7} is : ${sum}`);

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------

//7
let num8 = Number(prompt(`Enter number you want to get the multiplication table of: `));
let num9 = Number(prompt(`Enter The Size Of The multiplication Table: `));

for(let i=1; i<=num9 ; i++){
  console.log(`${num8} * ${i}  = ${num8 * i}`);
}

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------

//8

let num10 = Number(prompt(`Enter A Number To get How many numbers Exist: `));
let counter = 0;

console.log(`The Chosen Number is: ${num10}`)
for(let i=1; i<=num10; i++){
  if(i % 2 == 0){
    counter++;
  }
}

console.log(` The Even Numbers That Exists from 1 To ${num10} are ${counter}`);

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------

//9

let num11 = Number(prompt(`Enter A Number to Print the Odd Numbers To: `));
console.log(`The Chosen Number is: ${num11}`);

for(let i = 1; i<=num11; i++){
  if(i % 2 != 0){
    console.log(i);
  }
}

console.log('-----------------------------------');

// -------------------------------------------------------------------------------------------------
//10

let num12 = Number(prompt(`Enter A Number to Get How Many Numbers are divisble by 3 from 1 to: `));
console.log(`The Chosen Number is: ${num12}`);
let count = 0;

for(let i = 1; i<= num12; i++){
  if(i % 3 == 0){
    count++;
  }
}

console.log(`There Are ${count} Numbers Are Divisble By 3 From 1 To ${num12}`);



