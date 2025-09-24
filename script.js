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
// let first_name = 'ahmed'
// let second_name = 'hasan';
// let thrid_name = 'ur rehman';
// let fourth_name = 'ali';
// let para = "hey bro IRAN how are you doing iran man i am fine thank you i iran know u know Iran but i dont know what is iran behaviour but i cant modi ji see you  why coz you are black its not my fault" 
// const capitalize = (names) => {
    
// let first_letter = names.slice(0,1).toUpperCase()
// let second_letter = names.slice(1).toLowerCase()
// full_name = first_letter + second_letter
// return full_name
// }

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
// let a = 'madam'
// const isPalindrome = (str) => {
//     return str === str.split('').reverse().join('')
    
// }
// console.log(isPalindrome(a))
// console.log(typeof null)

// let codes = '[#42$56][1#2&13][85#$58][@53$23][%1225#]'
// for(let i = 0; i<codes.length; i++){
//     let key = codes.slice(i,i+8)
//     if(key.charAt(0) === '[' && key.charAt(7) === ']'){
//         console.log(key)
//     }
// }
// let arr = []
// console.log(arr)

// let par = 'lorem ipsum dolor sit amet iran adipisicing elit. Quisquam, Iran. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, IRAN.'
// let s =par.toLowerCase()

// console.log(s.replace('iran','Pakistan'))
// const ul = document.querySelector('.ul');
// ul.style.display = 'flex';
// let my_arr = [3,4,5,6,];
// console.log(my_arr.join('\n'))

//                        ROundOF


// 0.0,0.1,0.2,0.3,0.4 this value will rounded reverse like

// let a =23.4
// console.log(Math.round(a))
// Output: 23

// 0.5,0.6,0.7,0.8,0.9 this value will rounded forward like

// let a = 23.5
// console.log(Math.round(a))
// Output: 24


// let a = 23.3
// let b = a*23/7.3
// console.log(Math.round(b))

// console.log(Math.ceil(b)) // Round up output 74
// console.log(Math.floor(b)) // Round down output 73
// // console.log(b)

//  How to convert  a string to number in JS

// let a = '1212.232';
// console.log(Number(a))
// console.log(+a)
// console.log(parseInt(a)) // parseInt will remove the value after decimal point
// console.log(parseFloat(a))

// convert a number to string in JS

// let a= 12
// console.log(typeof String(a)) // Number will convert the number to string
// console.log(typeof toString(a)) // Number will convert the number to string

// let a = 231.211;
// console.log(a.toFixed(2)) // toFixed will round the number to 2 decimal places but it will convert th number to string

// let my_arr = [
//     {name:'product1',price:123.54},
//     {name:'product2',price:163.24},
//     {name:'product3',price:183.511},
//     {name:'product4',price:23.154},
//     {name:'product5',price:93.64},
//     {name:'product6',price:52.14},
// ]
// let cart = []
// my_arr.forEach(function(item,index){
//     console.log(index,item.name,item.price.toFixed(2))
// })
// let a = Math.random(); // Generates a random number between 0 and 1
// a = Math.round(a)
// let a = Math.ceil(Math.random()*6);
// Generates a random number between 0 and 1
// let a = Math.floor(Math.random()*100)+1
// console.log(a) // Generates a random number between 0 and 1


//                       Chapter Date
// console.log(new Date().now())
// let a = new Date().getMonth() // since month starts from 0 so it will return 0 for January
// let a = new Date().getFullYear() // it will return the current year
// let a = new Date().getDate() // it will return the current date
// console.log(a)
// let date = new Date()
// let current_hours = date.getHours();
// let current_minutes = date.getMinutes();
// let current_seconds = date.getSeconds();
// let current_year = date.getFullYear()
// let current_milliseconds = date.getMilliseconds()

// let DOB = new Date('1/Jan/2000') // the 
// let current_date =new Date().getTime();

// let dob = DOB.getTime()
// let diff = current_date - dob

// console.log(diff/(1000*60*60*24*365))
// console.log(current_hours,current_minutes,current_seconds)

// let date = new Date();
// console.log(date)
// date.setDate(1)
// date.setMonth(3)
// date.setHours(11)
// date.setMinutes(0)
// date.setSeconds(0)
// date.setUTCHours(5)
// console.log(date)

// let date = new Date();
// date.getDate()
// console.log(date)

// let today_date = new Date("9-Jul-2025");
// let ten_days_before = new Date(setDate(today_date.getDate()) -10);
// console.log(ten_days_before);

//                          chap 35

// const Time = () => {
//     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//     let date = new Date();
//     let current_hours = date.getHours();
//     let current_minutes = date.getMinutes();
//     let current_seconds = date.getSeconds();
//     let day = date.getDate();
//     let current_months = months[date.getMonth()]
//     // console.log(current_months)
//     let year = date.getFullYear();
//     // console.log(`${current_hours}:${current_minutes}:${current_seconds} ${day} ${current_months} ${year}`)
//     return `${current_hours}:${current_minutes}:${current_seconds} ${day} ${current_months} ${year}`


// }
// Time()
// console.log(Time())
// const add = (num1,num2) => {
//    return num1 + num2
// }
// console.log(add(2,4))

// function getValue(a,b,c,d){
//     let result = a+b+c+d
//     return result
// }
// let v = getValue(2,4,3,2)
// console.log(v)

// function gm_to_kg(a){

//     return `${a / 1000}Kg`

// }

// console.log(gm_to_kg(200))

// function square(a){
//     return `The Square of ${a} is ${a*a}`
// }
// console.log(square(7))

// function num_of_str(a){

//     return a.length

// }
// console.log(num_of_str('hello'))

// function reverse_str(str){
//     return str.split('').reverse().join('')
// }
// console.log(reverse_str('hello'))

// function is_palindrome(str){

//     let f_str = str.toLowerCase()
//     let l_str = f_str.split('').reverse().join('')
//     return f_str === l_str
        
// }
// console.log(is_palindrome('mada'))

// function Capitalize(str){
  
//     let f_letter = str.charAt(0).toUpperCase()
//     let rest_str = str.slice(1)
//     return f_letter+rest_str
// }
// console.log(Capitalize('hello'))

//                                               Switch Case

// let st = 6
// 1 = Approved
// 2 = unApproved
// 3 = pending
// 4 = under process
// 5 = Rejected

// switch(st){
//     case 1:
//         console.log("User is Approved");
//         break;
//     case 2:
//         console.log("User is Not Approved");
//         break;
//     case 3:
//         console.log("User authentication is Pending");
//         break;
//     case 4:
//         console.log("User Authentication is Under Process");
//         break;
//     case 5:
//         console.log("User Is rejected");   
//         break;
//     default:
//         console.log("Status Error")                 
// }
// let str ="23"

// console.log(str.slice(0,1))

// let a = 0
// while(a<10){
//     console.log("while" + a)
//     a++
// }


//                      objects
// let students = [
    
//  student_1 = {
//     id:314,
//     name:'Ahmed',
//     course:'MWAD',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:16

// },
//  student_2 = {
//     id:14,
//     name:'khang',
//     course:'MWAD',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:23

// },
//  student_3 = {
//     id:314,
//     name:'kaku',
//     course:'Freelancing',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:14

// },
//  student_4 = {
//     id:1114,
//     name:'Lala',
//     course:'MWAD',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:7

// },
//  student_5 = {
//     id:314,
//     name:'Hussain',
//     course:'Graphic Designing',
//     fee:1035,
//     feePaid:false,
//     isStudent:true,
//     age:36

// },
//  student_6 = {
//     id:22,
//     name:'Shah g',
//     course:'Graphic Designing',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:23

// },
//  student_7 = {
//     id:32444,
//     name:'Raja',
//     course:'MWAD',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:19

// },
//  student_8 = {
//     id:344,
//     name:'khan',
//     course:'Freelancing',
//     fee:1035,
//     feePaid:true,
//     isStudent:false,
//     age:18

// },
//  student_9 = {
//     id:2214,
//     name:'Hammad',
//     course:'MWAD',
//     fee:1035,
//     feePaid:false,
//     isStudent:true,
//     age:16

// },
//  student_10 = {
//     id:312,
//     name:'KK BAkri',
//     course:'MWAD',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:15

// }

// ]
// let student_1 = {
//     id:314,
//     name:'Ahmed',
//     course:'MWAD',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:16

// }
// let student_2 = {
//     id:14,
//     name:'khang',
//     course:'MWAD',
//     fee:1035,
//     feePaid:true,
//     isStudent:true,
//     age:23

// }

// let total_students = [student_1,student_2]
// for(let i = 0; i<total_students.length;i++){
//     // console.log(students
//     // let stu_info = students[i]
//     let stu_info = total_students[i]
//     // console.log(stu_info)
//     if(stu_info.age >=18){
//         console.log('AGe !8+')
//     }
//     // if(stu_info.course == 'Freelancing'){
//     //     console.log('Your Class is Scheduled to Monday')
//     // }
//     // else{
//     //     console.log('Not FOund!')
//     // }
// }
// students.map((stu_data) => {
//     if(stu_data.course == 'Freelancing'){
//         console.log(stu_data.name)
//     }
//     else{
//         console.log('Nothing found')
//     }
// })
// if(student_info.isStudent){
//     console.log(student_info.name)
// }
// if(student_info.feePaid){
//     console.log('You can enter in to the class')
// }
// let property = "lastName"
// let checkProperty = property in student_info
// console.log(checkProperty)
// let name_1 = "Ahmed"
// let name_2 = name_1

// console.log(name_1)
// console.log(name_2)
// name_2 = "Arsi"

// console.log(name_1)
// console.log(name_2)

// function Student(name,contact,age,course){
//    this.name = name
//    this.contact = contact
//    this.age = age
//    this.course = course

// } 

// let student_1 = new Student('Arsii','34324324',18,'Web Designer')
// let student_2 = new Student('Hasii','5324324',28,'DevOps')
// let total_students = [student_1,student_2]
// console.log(total_students)

// let entries = Object.entries(student_1)
// let vals = Object.values(student_1)
// let keys = Object.keys(student_1)
// let freezae_obj = Object.freeze(student_1)
// student_1.age = 78
// console.log(student_1)
// console.log(`Entries ${entries}\nValues ${vals}\nKeys ${keys}`)
// console.log(entries.length)
// console.log(keys)
// console.log(vals)



// function arr(arr){
//     const random_Index = Math.floor(Math.random()*arr.length) 
//     return arr[random_Index]
// // }
// let random_ques = arr(total_questions)


// let submit = () => {
// if(input.value == random_ques.correctAnswer){
//     console.log(input)
//     student_marks += random_ques.marks
//     console.log(student_marks)
//     arr()
// }
// }

// let user =  {
//     name :'arsii',
//     password:'12321',
//     email:'abc@gmail.com'
// }

// function check(){
//     if(user.email === 'abc@gmail.com' && user.password === '1221'){
//     window.location.assign('https://chatgpt.com')
// }
// else{
    
//     let hostname = window.location.hostname()
//     console.log(hostname)
// }
// }

// check()
// let popupfunc =() =>{
//     let popup = window.open('https://www.google.com/search?gs_ssp=eJzj4tDP1TewTC-sMGD0YstJzMlMTwQAMXYFgg&q=laliga&rlz=1C1FHFK_en-GBPK1151PK1152&oq=lal&gs_lcrp=EgZjaHJvbWUqDAgBEC4YJxiABBiKBTIGCAAQRRg5MgwIARAuGCcYgAQYigUyDwgCEEUYOxiDARixAxiABDIMCAMQABhDGIAEGIoFMhAIBBAAGIMBGLEDGIAEGIoFMgoIBRAAGLEDGIAEMgoIBhAAGLEDGIAEMhAIBxAuGIMBGLEDGIAEGIoFMhAICBAAGIMBGLEDGIAEGIoFMgcICRAAGI8C0gEIMjQ5N2owajmoAgawAgHxBdmv_ZE0nfu_&sourceid=chrome&ie=UTF-8#sie=lg;/g/11x7mwkym8;2;/m/09gqx;bs;hd;;;;2025-08-31T19:30:00Z',"laliga","width=300px,height=500px")
//     if(!popup){
//         alert('Unblock your popup')
//     }
//     else{
//         console.log(popup)
//     }
// }

// let obj = {
//     name:'arsii',
//     class:'222',
//     id:2132132
// }

// let arr = [
//     {
//         name:'shah_khaan',
//         id:23432423,
//         age:21,
//         assignment:'done'
//     },
//     {
//         name:'shah_g',
//         id:23432423,
//         age:50,
//         assignment:'done'
//     },
//     {
//         name:'shah',
//         id:23432423,
//         age:32,
//         assignment:'none'
//     }
// ]

// arr.forEach((my_arr) => {
//     if(my_arr.age > 25){

//         console.log(my_arr)
//     }
// })

// my_arr_ids = arr.map((my_arr) => {
//     return my_arr.id
// })
// console.log(my_arr_ids) // map() always reurn array, in array it always return something like ig id is empty it waill return undefined

// let assignment_done_students = arr.filter((my_arr) => {
//    my_arr.assignment == 'done'? console.log('Great Students'): console.log('L Students')
// })

// // filter retirns the whole object of only filter arr

// let f_name = arr.find((my_arr) => {
//     return my_arr.name
// })

// console.log(f_name) // find will reurn only only one value and that is first value

// let findindex = arr.findIndex((my_arr) => {
//     my_arr.name == 'shah'? console.log('He is real'): console.log('Fake') 
// })

let items = [
    {
        id: 1,
        itemName: "Laptop",
        category: "Electronics",
        price: 850,
        inStock: true,
        userAge:23
    },
    { id: 2, itemName: "Smartphone", category: "Electronics", price: 500, inStock: true,userAge:12 },
    { id: 3, itemName: "Desk Chair", category: "Furniture", price: 120, inStock: false,userAge:32 },
    { id: 4, itemName: "Wrist Watch", category: "Accessories", price: 75, inStock: true,userAge:17 },
    { id: 5, itemName: "Backpack", category: "Bags", price: 45, inStock: true,userAge:54 },
    { id: 6, itemName: "Bluetooth Speaker", category: "Electronics", price: 60, inStock: true,userAge:55 },
    { id: 7, itemName: "Running Shoes", category: "Footwear", price: 95, inStock: false,userAge:8 },
    { id: 8, itemName: "Notebook", category: "Stationery", price: 5, inStock: true,userAge:65 },
    { id: 9, itemName: "Coffee Mug", category: "Kitchen", price: 12, inStock: true,userAge:22 },
    { id: 10, itemName: "Table Lamp", category: "Furniture", price: 40, inStock: false,userAge:33 }
];


let invoices = [
    {
        invoiceId: 101,
        itemId: 1,
        // itemPrice:---
        quantity: 2,
        totalPrice: 1700,
        date: "2025-09-01"
    },
    { invoiceId: 102, itemId: 3, quantity: 1, totalPrice: 120, date: "2025-09-02" },
    { invoiceId: 103, itemId: 5, quantity: 4, totalPrice: 180, date: "2025-09-02" },
    { invoiceId: 104, itemId: 2, quantity: 1, totalPrice: 500, date: "2025-09-03" },
    { invoiceId: 105, itemId: 7, quantity: 2, totalPrice: 190, date: "2025-09-03" },
    { invoiceId: 106, itemId: 4, quantity: 3, totalPrice: 225, date: "2025-09-04" },
    { invoiceId: 107, itemId: 8, quantity: 10, totalPrice: 50, date: "2025-09-04" },
    { invoiceId: 108, itemId: 9, quantity: 6, totalPrice: 72, date: "2025-09-05" },
    { invoiceId: 109, itemId: 10, quantity: 2, totalPrice: 80, date: "2025-09-05" },
    { invoiceId: 110, itemId: 6, quantity: 1, totalPrice: 60, date: "2025-09-06" },
    { invoiceId: 111, itemId: 2, quantity: 2, totalPrice: 1000, date: "2025-09-06" },
    { invoiceId: 112, itemId: 5, quantity: 1, totalPrice: 45, date: "2025-09-07" },
    { invoiceId: 113, itemId: 1, quantity: 3, totalPrice: 2550, date: "2025-09-07" },
    { invoiceId: 114, itemId: 9, quantity: 8, totalPrice: 96, date: "2025-09-08" },
    { invoiceId: 115, itemId: 7, quantity: 1, totalPrice: 95, date: "2025-09-08" },
    { invoiceId: 116, itemId: 6, quantity: 4, totalPrice: 240, date: "2025-09-09" },
    { invoiceId: 117, itemId: 8, quantity: 15, totalPrice: 75, date: "2025-09-09" },
    { invoiceId: 118, itemId: 10, quantity: 3, totalPrice: 120, date: "2025-09-10" },
    { invoiceId: 119, itemId: 4, quantity: 2, totalPrice: 150, date: "2025-09-10" },
    { invoiceId: 120, itemId: 3, quantity: 5, totalPrice: 600, date: "2025-09-11" }
];

// let item_id = invoices.forEach((invoices) => {
//      let inner_item_id = invoices.itemId // single invoice id
//     //  console.log(inner_item_id)
//      let find_id = items.find((items) => items.id == inner_item_id ? items : undefined
//         // console.log(ite)
//         //  if(items.id == inner_item_id){
//         //      return items
//         //  }
//      )

//      invoices.price_per_item = find_id.price
//     //  items.price_per_item = find_id.price
   
// })

// // console.log(items)
// console.log(invoices)



// let some_method = items.some((x) => {
//     if(x.inStock){
//         return x
//     }
// })
// //  ----------------------- in some method if even a single item in array contains instock == true it will return true ------------------------

// // console.log(some_method)

// let every_method =  items.every((y) => {
//     if(y.inStock){
//         return y
//     }
// })

// // console.log(every_method)

// // --------------------- in every if an array contains all item.instock(in out situation) == true it will return true if even a single item .instock contains == false it will return false
// let amount = 0
// let reduce_method = items.reduce((x,y) => {
//      console.log(x) // x is the 3rd param and it holds 0 rn
//     //  console.log(y) // y is object / array
//     return x += y.price
// },amount)

// console.log(reduce_method)


// let grouped_data = items.reduce((x,y) => {
//     // console.log(x)
//     // console.log(y)
//     if(x[y.category]){
//         x[y.category].push(y)
//     }
//     else{
//         x[y.category] = [y]

//     }
//     return x
// },{}) 

// console.log(grouped_data)

// let grouped_data = items.reduce((x,y) => {
//     if(y.userAge < 18){
//         if(x.underAge){

//             x.underAge.push(y)
//         }
//         else{
//             x.underAge = [y]
//         }
//     }
//     else if (y.userAge <= 50){
//     //    x[y.userAge.eligible].push(y)
//        if(x.eligible){
//          x.eligible.push(y)
//        }
//        else{
//         x.eligible = [y]
//        }
//     }
//     else if(y.userAge > 50){
//           if(x.overAge){
//             x.overAge.push(y)
//           }
//           else{
//             x.overAge = [y]
//           }
//     }   
//     return x
    
//     }
// ,{})

// console.group(grouped_data)


// ---------------------- Promises -------------------

// let getdata = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//           let a = [
//             {
//                 id:2
//             },
//             {
//                 id:32
//             }
//         ]
//        if(a.length){
//         resolve(a)
//        }
//        else{
//         reject('Not found')
//        }  
//         },3000)
//     })
// }

// let data = async () => {
//     let reder_data = await getdata()
//     console.log(reder_data)
// }
// data()

// let inp = document.getElementById('inp');

// let email_validation = () => {
// let reges = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

//     if(inp.value.match(reges)){
//         console.log('Correct')
//     }
//     else{
//         console.log('Error')
//     }

// }

// //------- Check Form Validation in book -----------



// // Closures

// let abc_1 = () => {
//     let a = 2;
//     let nested_abc_1 = () => {
//         console.log(a)
//     }
//     nested_abc_1()
// } 
// abc_1()

// let a = 10;

// let abc = () => {
//     let a =3
//     console.log(a)
//     // Lexical scoping

//     // The answer will be 3 because the consle will check in his closure if there is var a if not then it will check in gllobal scope
// }


// let a = [1,2,3,4,5]
// let b = [...a]
// b.push(232)
// console.log(b)

// let a = {
//     name:'arsii',
//     id:123
// }
// let b = {...a}
// b.class = 'CS'
// console.log(b)

// Rest Operator

// let ab = (...rest) => {
//     console.log(rest)
// }

// ab(
    
//         {name:'arsii',id:12},
//         // {name:'arsii_1',id:1312},
//         // {name:'arsii_2',id:142},
//         // {name:'arsii_3',id:32},
    
// )

//  FFInding Max and Min number in an array

// let a = [21,23,34,213,4]
// let mx = Math.max(...a)
// let min = Math.min(...a)
// console.log(mx)
// console.log(min)

//  Default Params

// let a  = (param = 3) => {
//     return param + 3
// }
// console.log(a())
