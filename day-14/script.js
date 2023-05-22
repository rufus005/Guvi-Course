console.log(window);
console.log(window.location);
console.log(window.location.href); current page url

console.log(window.location.hostname);
console.log(window.location.protocol);

console.log(window.location.search);
console.log(window.location);
window.localStorage.setItem('username','rufus');

console.log(window.localStorage.getItem('username'));  

window.localStorage.removeItem('username')

window.localStorage.setItem('isLoggedIn',true);

console.log(window.localStorage);

setTimeout
   
window.setTimeout(() => console.log('after two seconds'),4000);

let sayHello = ()=> {
    console.log('after five seconds');

};

window.setTimeout(sayHello,5000);

let sayHello = () => {
    console.log('after five seconds');

};

const sayHelloID = window.setInterval(sayHello,1000);

window.clearInterval(sayHelloID);


Question 10 9 8 7 6 5 4 3 2 1 Happy new year 

function countDownTimer(seconds) {
 if (seconds > 0) {
    console.log(seconds);
    setTimeout(() => {
        countDownTimer(seconds - 1);
    },1000);
    } else {
        console.log('Happy New Year');
    }
 }

countDownTimer(10);

2nd model 

let seconds = 10;

let countDownTimer = setInterval

Me practiced

window.setTimeout(happyNewYear,5000);

let happyNewYear = () => {
    console.log('happyNewYear');

};

let name = prompt('your name?');
console.log(name);

alert('hi')

let confirmAnswer = confirm('are you sure');
if (confirmAnswer) {
    console.log('yes');
    } else {
        console.log('no');
}

console.log(window.innerWidth,Window.innerHeight);

console.log(window.open('https:google.com',
'new window', 'width=300,height=300'));


// document.body.innerHTML = `<h1>Hello</h1>`;
