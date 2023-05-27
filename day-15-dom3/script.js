// get the reference of the span/div
// task 1
// let spanColor = document.getElementById('spanColor');

// spanColor.addEventListener('mouseover', function (event) {
//     console.log(event);
//  spanColor.style.color = 'red'

// });

// spanColor.addEventListener('mouseout', function (event) {
//     spanColor.style.color = 'blue';
// });

// let formElement = document.getElementById('formElement');

// formElement.addEventListener('submit', function (event) {
//     event.preventDefault();
// });
// let formElement = document.getElementById('formElement');
// formElement.addEventListener('submit', function (event) {
//     event.preventDesfault();
    
//     event.target.elements['userName'].value = 'rufus';
    // console.log(event.target.elements['userName'].value)
    // });
// task-2

    // let spanElement = document.getElementById('spanElement');
    // let getInput = document.getElementById('getInput');
    
    // getInput.addEventListener('click', function (event) {
    //    spanElement.textContent = window.prompt('say something');
    
    // });

    // task -3

//     function showCoordinates(event) {
//         let header =document.getElementById('header');

//         let x = event.ClientX;
//         let Y = event.clientlY;
    
//     // get the refernece of span
//     let spanCoordinates = document.getElementById('coordinates');
    
//     spanCoordinates.textContent = `coordinates x: ${x} and y: ${y}`;
// };

// 1 method
// function characterCount() {
//     let textarea = document.getElementById('textarea');

// console.log(textarea.value.length);
// };

// 2 method

function characterCount() {
    let textarea = document.getElementById('textarea');
let count = document.getElementById('count');

count.textContent = `You Inserted Characters : ${textarea.value.length}
`;
}