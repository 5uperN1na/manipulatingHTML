window.addEventListener('DOMContentLoaded', function () {

    //#1
    //Created button element
    let button = document.createElement('button');
    //Created text for button
    let text = document.createTextNode('Click!');
    //Appended text to the button element.
    button.appendChild(text);
    //Appended button to body
    document.body.appendChild(button);

    //#1
    //Created event listener 
    button.addEventListener('click', function () {
        alert("You clicked!");

    });



    function myFunction() {
        alert("I am an alert box!");
    }


});