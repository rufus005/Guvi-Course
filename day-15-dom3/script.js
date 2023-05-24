// get the reference of the span/div
let spanColor = document.getElementById('spanColor');

spanColor.addEventListener('mouseover', function (event) {
 spanColor.style.color = 'red'

});

spanColor.addEventListener('mouseout', function (event) {
    spanColor.style.color = 'blue';
});

let formElement = document.getElementById('formElement');

formElement.addEventListener('submit', function (event) {
    event.preventDefault();
})