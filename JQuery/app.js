//event handler
$(document).ready(function () {

    //#1
    // create the button
    let b = $('<button>Click!</button>');
    //append button to body
    $('body').append(b);
    //button event handler
    $(b).click(function () {
        //message alert after button clicked
        alert('Clicked!');
    });

    //#2
    //create event handler and take input value from html and display in alert
    $('#btnInput').click(function () {
        let txt = $('#txtInput').val();
        alert(txt);
    });

    //#3

    //get div from html
    let d = $('#test');

    //TESTING: move over div to change background color
    // $(d).moveover(function(){
    //  $(this).css('background-color', 'gray');
    // }, function(){
    //$(this).css('background-color', 'pink');
    // });


    //TESTING: move over div to change background color
    // $(d).mouseout(function(){
    // $(this).css('background-color', 'pink');
    //}, function(){
    // $(this).css('background-color', 'pink');
    // });


    //move over to change background color then remove color on mouseout
    $(d).mouseover(function () {
        $(d).css('background-color', 'yellow');
    });
    $(d).mouseout(function () {
        $(d).css('background-color', '');
    });

    //#4
    //get p from html
    let p = $('#para');

    //create random color function
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = `rgb(${r},${g},${b})`;
        return color;
    }

    //event handler to p element that calls the randomColor function
    $(p).click(function (event) {
        //event.target.style.color = 'red';
        event.target.style.color = randomColor();
    });












});