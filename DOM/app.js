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

    //#2
    //Created event listener with button id from html. Displayed value from text input into an alert.
    document.getElementById('btnInput').addEventListener("click", function () {
        t = document.getElementById('txtInput');
        alert(t.value);
    });

    //#3
    //Getting div element by id from html and assigning it to a variable.
    var c = document.getElementById("test");

    //Created handler when move over happens, change background color.
    c.addEventListener('mouseover', function (event) {
        // highlight the mouseenter target a background color.
        event.target.style.backgroundColor = 'purple';

    });

    //Created handler that will remove background color when move away happens.
    c.addEventListener("mouseout", function (event) {
        // remove highlight the mouseout target
        event.target.style.backgroundColor = "";

    });



});