// const btn = document.querySelector('.btn');
// console.log(btn)
// const ul = document.querySelector('.ul');
// btn.addEventListener('mousemove', function(e){
//     e.target.style.background = 'red';
//     e.target.style.color = 'white';
// })
// ul.addEventListener('click',function(e){
//     e.target.style.display = 'block';
//     console.log(e)
// })

// let my_num = 20;
// console.log(my_num)
// my_num = 21;
// console.log(my_num)

// const first_name = 'Ahmed';
// const last_name = 'Ur Rehman'
// console.log(first_name + ' ' + last_name)
// let a = '10a'
// let b = '20b'
// console.log( b-a)
// last_name = 'shah'
// console.log(last_name)

// let my_name = 20
// null vs undefined 
// class 2 js 
// primitive data types 

// pre increment

// let a = 10
// let b = ++a 
// console.log(b)

// post Increment
// let a = 10
// let b = a++ 
// console.log(b)
// let a = 10
// let b = ++a 
// console.log(b)


// chapter # 09 => Prompts

//  let first_name = prompt('Enter you First Name: ')
//  let last_name = prompt('Enter your last Name: ')
//  let email = prompt('Enter your Email Name: ')
//  let contact = prompt('Enter your Email Name: ')

//  console.log(`First Name: ${first_name}\nLast Name: ${last_name}\nEmail: ${email}\n Contact: ${contact}`)
// let first_subject = Number(prompt('Enter Your marks: '))
// let second_subject = Number(prompt('Enter Your marks: '))
// let third_subject = Number(prompt('Enter Your marks: '))
// let fourth_subject = Number(prompt('Enter Your marks: '))
// let fifth_subject = Number(prompt('Enter Your marks: '))
// let total_marks = first_subject + second_subject + third_subject + fourth_subject +fifth_subject 
// let calc_percent = ((total_marks / 500 ) *100).toFixed(2)
// console.log(`Total Marks ${total_marks}\ntotalTotal Percentage ${calc_percent}%`)

// console.log(first_name + ' ' + last_name)


// Sample Num
// let my_nums = [1,2,3,4,5,6,7,8,9]
// let lives = 3;

// // Function for random number
// function arr(arr){
//     const random_Index = Math.floor(Math.random()*arr.length) 
//     return arr[random_Index]
// }
// let random_num = arr(my_nums)
// // console.log(random_num)

// while (lives > 0){
// let user_guess = Number(prompt('Guess a number between 1-9'))
    
// if (user_guess == random_num){
//     console.log('You Win')
//     break;
// }
// else if( user_guess != random_num){
//     console.log(`Wrong Guess, You have ${lives - 1} lives left`)
//     lives--;
// }
// else{
//     console.log('You Lost')
// }
// if (lives == 0){
//     console.log('Game Over')
//     break;
// }
// }

// let originialPrice = Number(prompt('Enter the Original Price: '))
// let discountedValue = originialPrice - (originialPrice * 20/100)
// print(discountedValue)

// let age = Number(prompt('Enter your age: '))
// if (age >= 18) {
//     console.log('You are eligible to vote');
// }
// else {
//     console.log('You are not eligible to vote');
// }

// let age = 22;
// let student = true;

// if (age >= 18 && student) {
//     console.log('You are eligible for student discount');
// }
// else if (age >= 18 && !student) {
//     console.log('You are eligible for regular ticket');
// } else {
//     console.log('You are not eligible for any discount');
// }

// student? console.log('Good'): console.log(false) 
// let a = `ahbde
// ssadsad`

// let my_name = 'Ahmed';
// let batch = 16;
// let msg = `my name is ${my_name} and my batch is ${batch = 16 ? 16: 'didnt identify' }`
// console.log(msg)
// // const btn = document.querySelector('.btn');

//              // Arrrays
// let my_arr = ['red','green','purple','grey','slate'];
// console.log(my_arr.indexOf(3)) indexof returns the index of the element
// console.log(my_arr.includes(6)); includes return Boolean value
// console.log(my_arr.push(2)) push adds the element at the end of the array
//console.log(my_arr.unshift(0))  unshift adds the element at the beginning of the array
// my_arr.forEach(function(item,index){
//     console.log(`Item: ${item} at index ${index}`)
// })
//my_arr.pop() pop removes the last element of the array
//my_arr.shift() // shift removes the first element of the array
//my_arr.splice(2,9 ) splice removes the element from the array at the given index and number of elements
//my_arr.splice(2,3, 'Ahmed') // splice removes the element from the array at the given index and number of elements and adds the new element
// my_arr.find(function(item,index){
//     console.log(`Item: ${item} at index ${index}`)
// })
// my_arr.sort() //Sort the seuence of array
// my_arr.includes('red');

// for(let i = 0; i< my_arr.length; i++){
//     console.log('Hello',my_arr[i])
// }

// console.log(my_arr) 
// let a = prompt('Enter a name to search: ');
// let check = false;
// for(let i in my_arr){
//     // console.log('Hello',my_arr[i])

    
//     if(a.trim().toLowerCase() ===  my_arr[i]){
//         check =true;
//         break;
//     }
    // else if(a !== my_arr[i]){
    //     console.log('name Not Found')
    // }    

// }
// if(check){
//   console.log(`name Found ${a}`)
// }
// else{
//     console.log(`Name did not found ${a}`)
// }

// for(i = 1; i<=10; i++){
//     // if(i % 2 == 0){
//     //     console.log(i)
//     // }

//     console.log(5*i)
// }

// for(let i =1; i<10; i++){
//     console.log(i+i)
// }

// let n =15;
// let sum =0;

// for(i=0;i<=n;i++){
//    sums = sum+= i
//    console.log(sums)
// }
// function ReverseSTR(str){
//     return str.split('').reverse().join('');
// }
// console.log(ReverseSTR('Aaand Forces'))

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
// let my_arr = [1,2,3,4,5,6,7,8]
// let a = 'slice';
// let unique_arr = [...new Set(my_arr)];
// console.log(unique_arr)

// my_arr.filter((e) => {
//     if(e%2 !== 0){
//         console.log(e)
//     }
// })
// console.log(my_arr.includes(9))
// console.log(my_arr.toReversed())
// console.log(my_arr.slice(4))
// console.log(my_arr.splice(2))
// // console.log(a.reverse())
// // console.log(a.split('').reverse().join(''))
// function ReverseString(str){
//     return str.split('').reverse('').join('')
// }
// console.log(ReverseString(a))

// function countVowels(word){
//     let str = 'aeiou';
//     let vowels = str.split('');
//     let count = 0;
//     // let word = woswoews;

//     if(word.includes(vowels)){
//         for(let i = 0; i < word.length; i++){
//             if(vowels.includes(word[i])){
//                 count++;
//             }
//         }
//     }

// }
// let c =countVowels('hello world');
// console.log(c); // Output: 3 (e, o, o)
// console.log(x);
// var x = 5;

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// function LargeNum(arr){
//     return Math.max(...arr)
// }


// let nums = [21,23,43,21,22,435,6,5];
// console.log(LargeNum(nums));

// for(let i = 0; i<10; i++){
//     console.log(`Outer Loop: ${i}`)

//     for(let j = 0; j<5; j++){
//         console.log(`Inner Loop: ${j}`)
//     }
//     // console.log(i)
// }

// for (let i = 1; i<=5; i++){
//     console.log('*' .repeat(i))
// }

// let str_arr = ['a','b','c','d','e'];
// let num_arr = [1,2,3,4,5,6,7,8,9];
// let new_arr = [];

// for(let i=0; i< num_arr.length; i++){
//     // console.log(i)
//     for(let j=0; j<str_arr.length; j++){
//         new_arr.push(`${num_arr[i]}${str_arr[j]}`);
        
//     }
// }
// console.log(new_arr)
// let str_arr = ['a','b','c','d','e'];
// let num_arr = [1,2,3,4,5,6,7,8,9];
// let new_arr = [];
// for(let i =0; i<num_arr.length; i++){
//     for(let j = 0; j<str_arr.length; j++){
//       let new_str = `${num_arr[i] + str_arr[j]}`;
//       new_arr.push(new_str);   
//     }
// }
// console.log(new_arr);

// let city = 'Karachi';
// let user_city = prompt('Enter your city: ');
// if(user_city.trim().toLowerCase() === city.trim().toLowerCase()){
//     console.log('You are from Karachi');
// }
let first_name = 'ahmed'
let second_name = 'hasan';
let thrid_name = 'ur rehman';
let fourth_name = 'ali';
let para = "hey bro IRAN how are you doing iran man i am fine thank you i iran know u know Iran but i dont know what is iran behaviour but i cant modi ji see you  why coz you are black its not my fault" 
const capitalize = (names) => {
    
let first_letter = names.slice(0,1).toUpperCase()
let second_letter = names.slice(1).toLowerCase()
full_name = first_letter + second_letter
return full_name
}

// console.log(capitalize(first_name));
// console.log(capitalize(second_name));
// console.log(capitalize(thrid_name));
// console.log(capitalize(fourth_name));
// console.log(first_name.includes('a'))
// // console.log(first_name.charAt(1))
// console.log(first_name.indexOf('a'))
// let check = para.indexOf('iran')
// let check = para.indexOf('iran')
// console.log('index: ',check)
// let starting = para.slice(0,check)
// console.log('Starting:',starting)

// let ending = para.slice(check + 4)
// console.log('Ending:',ending)
// let final_output = starting + 'Indonesia ' + ending
// console.log(final_output)
// for(let i = 0; i< para.length; i++){
//     // console.log(i)
//     let a = para.slice(i, i+4);
//     if(a === 'iran' || a === 'IRAN' || a === 'Iran'){
//         console.log('Iran Found!!')
//         let starting = para.slice(0,i);
//         let ending = para.slice(i+4);
//         para = starting + 'pakistan' + ending;

//     }
// }
// console.log(para)
// let my_arr = [1,2,3,4,5]
// console.log(my_arr.length)
    // console.log(para[i])
// console.log(para.length)

// let last_output = para.replace('behaviour','Iran')
// console.log(last_output)
// let f_arr = ['a','b','c','d']
// let s_arr = [1,2,3,4,5]
// let t_arr = []
// for(let i = 0; i<s_arr.length;i++){
//     // console.log(s_arr[i])
//     for(let j=0; j<f_arr.length; j++){
//         // console.log(t_arr.push(f_arr[i]+s_arr[j]))
//         let s = s_arr[i] + f_arr[j]
//         t_arr.push(s)
//     }
// }
// console.log(t_arr)
// let codes = '[#42$56][1#2&13][85#$58][@53$23][%1225#]'
// let starting = '['
// let ending = ']'
// for(let i = 0; i< codes.length; i++){
//     let len = codes.slice(i, i+8);
//     
//     // console.log(len)
//     if(codes.includes(starting) && codes.includes(ending)){
//         console.log(codes.split().join(''))
//     }
    
// }s
// ls
// for(let i =0; i<1; i++

// ){
    
// if(codes.includes(starting) && codes.includes(ending)){
//         console.log(codes.split('[]').join('\n'))
//     }
// }
// for(let i =0; i<codes.length; i++){
//     let key = codes.slice(i,i+8)
//     if(key.charAt(0) ==='[' && key.charAt(7) === ']'){
//         console.log(key)
//     }
// }    
// let rev_str = 'game';
// // let res = rev_str.split('').reverse().join('')
// console.log(res)

//                     flatten array

// let arr = [1,2,3,[4,5,[6,7,[4,5]]]]
// let res = arr.flat(3)
// let s = [...new Set(res)]
// console.log(s)

//                            Checking if object is empty

// let my_arr = [1,2,3,4,3,2,2]
// const sum = my_arr.reduce((acc,curr) => (
//     curr > acc? curr: acc
// )
// )
// let f_val = [...new Set(my_arr)]
// console.log(f_val)
// console.log(sum)

//               Callback func

// function greet(name_1,name_2){
//     console.log(`My name is ${name_1} and his name is ${name_2}`)

//     sayBye()
// }
// function sayBye(){
//   console.log('Bye')
//   sayNice()
// }
// function sayNice(){
//     console.log('Nice To Meet You')
// }
// greet('arsii','ahmed')
let a = 'madam'
const isPalindrome = (str) => {
    return str === str.split('').reverse().join('')
    
}
console.log(isPalindrome(a))
console.log(typeof null)
