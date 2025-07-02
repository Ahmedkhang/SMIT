//                          task 01
// alert('Welcome to JavaScript!')
//                          task 02
// let greeting = 'Hello User!'
// alert(greeting)
//                          task 03
// let userAge = 20
// let futureAge = userAge + 5
//                          task 04
// let my_var = 'valid';
// let myVar = 'valid';
// let _myVar = 'valid';
// let $myVar = 'valid';

// let my var = 'invalid'; // spaces are not allowed
// let my-var = 'invalid' ;// hyphen(-) is not allowed
// let 123myvar = 'invalid'; // we cannot use number at the beginning

//                          task 05

// let a = 8;
// let b = 2;

// console.log(a+b);
// console.log(a-b);
// console.log(a/b);
// console.log(a*b);
// console.log(a%b);
//                    Task  #06
// let num  = 10;
// console.log(num++)
// console.log(--num)

//                    Task  #07

// let num1  = 5;
// let num2  = 10;
// let num3  = 15;

// let result = (num2 + num3)*num1;
// console.log(result);

//                    Task  #08

// let user_name = 'Alex';
// let msg = 'Hello' + ' ' + user_name + '!';
// console.log(msg);

//                          task #09

// let userName = prompt('Enter your name:');
// let greetingMessage = 'Hello' + ' ' + userName + '!';
// alert(greetingMessage);

//                         task #10

// let secret_password = 'letmein';
// let user_password = prompt('Enter your password:');
// if(user_password === secret_password){
//     alert('Access granted');
// }
// else{
//     alert('Access denied. Incorrect password.');
// }

//                          task #11

// let num_1 = 2;
// let num_2 = 6;

// alert(num_1 > num_2 ? 'num_1 is greater than num_2' : 'num_2 is greater than num_1');
// alert(num_1 < num_2 ? 'num_1 is less than num_2' : 'num_2 is less than num_1');
// alert(num_1 === num_2 ? 'num_1 is equal to num_2' : 'num_1 is not equal to  num_2');
// alert(num_1 !== num_2 ? 'num_1 is not equal to num_2' : 'num_1 is equal to num_2');


//                          task #12

// let rand_num = Math.floor(Math.random()*10 )+1;
// let lives = 3;
// while(lives > 0){
//  console.log(rand_num)
// let user_guess = Number(prompt('Guess the number between 1 and 10:'));   
//     if (user_guess === rand_num){
//     console.log('Congratulations! You guessed the number correctly.');
//     break;
// }
// else if (user_guess < rand_num){
//     console.log('Your Guess is too Low!,Try Again!');
//     lives --;
    
// }
// else if(user_guess > rand_num){
//     console.log('Your Guess is too High!,Try Again!');
//     lives --;
// }
// else{
//     console.log('Invalid input! Please enter a number between 1 and 10.');
//     lives --;
// }
// if(lives === 0){
//     console.log('Game Over! You have no lives left.');
//     break;
// }
// console.log('You have ' + lives + ' lives left.');
// }

//                          task #13

// let valid_age = 18;
// let valid_id = '212121';
// let user_age = Number(prompt('Enter your age:'));
// let user_id = prompt('Enter your ID:');

// if(user_age === valid_age && user_id === valid_id){
//     alert('you may enter!!')
// }
// else{
//     alert('Sorry,you cannot enter!!')
// }

//                          task #14

// let userName = 'Jhon';
// let userPassword = '12345';
// let inputName = prompt('Enter your name:');
// let inputPassword = prompt('Enter your password:');

// if(inputName === userName){
//     if(userPassword === inputPassword){
//         alert('Welcome ' + userName + '!');
//     }
//     else{
//         alert('Incorrect Password!');
//     }
// }
// else{
//     alert('UserName not found!');
// }

//                          task #15

// let fav_fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// alert(fav_fruits[2])

//                          task #16

// let fav_fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// fav_fruits.push('kiwi');
// console.log('after using push method:',fav_fruits);
// fav_fruits.shift();
// console.log('after using shift method:',fav_fruits);

//                          task #17


// let fav_fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// fav_fruits.splice(1,1,'peach','plum')
// console.log('after using splice method:', fav_fruits);


//                          task #18


// let fav_fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// for(let i =0; i<fav_fruits.length; i++){
//     alert(fav_fruits[i])
// }

//                          task #19


// let fav_fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];
// let user_fruit = prompt('Enter a fruit name:');
// if(fav_fruits.includes(user_fruit)){
//     alert('Found!')
// }
// else{
//     alert('Not Found!')
// }

//                          task #20

let first_names = ['Cool','Fast','Big'];
let last_names = ['Bear','Tiger','Lion'];
let full_name = []

for(let i = 0; i < first_names.length; i++){
    console.log(first_names[i] + ' ' + last_names[i]);
    for(let j = 0; j<last_names.length; j++){
        let merged_name = first_names[i]+' '+ last_names[i]
        full_name.push(merged_name)
    }
}
console.log(full_name);