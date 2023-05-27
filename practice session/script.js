// let spanColor = document.getElementById('spanColor');

// spanColor.addEventListener('mouseover',function (event){

// spanColor.style.color = 'blue';
// });

// spanColor.addEventListener('mouseout',function (event) {
//     spanColor.style.color = 'red';
// });

// <div className="container"></div>
// let container = document.getElementById('container');
// container.addEventListener('click',function (event){
//     alert('clicked');
//     });

// calling function

function second(){
    console.log("second");
    third();
};

function third(){
    console.log("third");
};

function first(){
    console.log("first");
    second();
};