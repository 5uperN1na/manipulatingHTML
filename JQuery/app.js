//event handler
$(document).ready(function () {

    //#1
    // create the button
    // var button = document.createElement("button");
    // button.innerHTML = "Do Something";

    // append the button to the page
    //var body = document.getElementsByTagName("body")[0];
    // body.appendChild(button);

    //add event handler
    //button.addEventListener("click", function () {
    // alert("You clicked!");
    // });


    let b = $('<button>Click!</button>');
    $('body').append(b);

    $(b).click (function (){

        alert ('Clicked!');

    });
















});