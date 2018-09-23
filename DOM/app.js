window.addEventListener('DOMContentLoaded', function () {

    //#1
    //Created button element
    let button = document.createElement('button');
    //Created text for button
    let text = document.createTextNode('Click First!');
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

    //#4
    //Get p from html by id.
    let p = document.getElementById('para');

    //Created event listener p tag is clicked it will call the randomColor () function and change color of text randomly.
    p.addEventListener("click", function (event) {
        //event.target.style.color = 'red';
        event.target.style.color = randomColor();
    });

    //Created function to randomly generate color.
    function randomColor() {
        let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return color;
    }

    //#5
    //Get p from html by id.
    let b = document.getElementById('btnClick');

    b.addEventListener('click', function () {

        //created a div
        let divContainer = document.createElement('div');
        //created a span element
        let span = document.createElement('span');
        //created text node for span element
        let sText = document.createTextNode('Paula Suarez');
        //appended text node to span element
        span.appendChild(sText);
        //appended span with text to div
        divContainer.appendChild(span);
        //Appended div container to body.
        document.body.appendChild(divContainer);
        //testing function
        console.log('true');

    });

    //#6
    //create an array 10 friends names
    let person = [
        {
            name: 'Ken'

        },
        {
            name: 'Meredith'

        },
        {
            name: 'Hernan'
        },
        {
            name: 'Ericka'

        },
        {
            name: 'Olivia'

        },
        {
            name: 'Ashley'

        },
        {
            name: 'James'

        },
        {
            name: 'John'

        },
        {
            name: 'Sharon'

        },
        {
            name: 'Patricia'

        },
    ]

    //#6 
    //Get button from html by id.
    let b1 = document.getElementById('btnClick1');

    b1.addEventListener('click', function () {

        let i;

        for (i = 0; i < person.length; i++) {
            let w = person[i].name;
            // console.log (w);

            //TESTING:  created a li and appended array objects to li element
            //let l = document.createElement('li').innerHTML = w;

            //created li
            let l = document.createElement('li');

            //created text node and stored value from array
            let t = document.createTextNode(w);
            //appended array values to li 
            l.appendChild(t);

            //get UL element from html and append li to UL
            document.getElementById('list').appendChild(l);

        }

    });


});