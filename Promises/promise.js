// const promise_1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//        console.log("Promise is resolved");
//        resolve();
//        reject();
//     }, 2000)
// })

// promise_1.then(function(){
//     console.log("This is the then block");
// })
// promise_1.catch(function(){
//     console.log("This is the catch block");
// })

// const promise_3 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve([1,2,3,4,5])
//     },1000)
// })
// promise_3.then(function(user){
//    console.log(user[2]);
// })

// const api = fetch('https://jsonplaceholder.typicode.com/users')
// api.then((response) => {
//     return response.json()
// }).then((data) => {
//     return data.id
    
// }).then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log("Error: ", err);
// })
// console.log(api[0].id);users
async function getData() {
    try {
        const url = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await url.json();
        response.forEach((users) => console.log(users.username))
    } catch (error) {
        console.log("Error", error)
    }
}
getData();