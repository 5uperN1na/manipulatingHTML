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













});