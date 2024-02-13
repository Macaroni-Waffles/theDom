const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = "Hey I'm red!";
para.style.color = "Red";

container.appendChild(para);

const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.textContent = "I'm a blue h3!";
header3.style.color = "#0000FF";

container.appendChild(header3);

const divider = document.createElement('div');
divider.classList.add('divider');
divider.style.backgroundColor = "Pink";
divider.style.border = "solid #000000";



const header1 = document.createElement('h1');
header1.textContent = "I'm in a div!";
divider.appendChild(header1);

const para1 = document.createElement('p');
para1.textContent = "ME TOO!";
divider.appendChild(para1);

container.appendChild(divider);

const btn = document.querySelector('#btn');
btn.classList.add('btn');
btn.textContent = "Click Me!";
btn.style.fontWeight = 'bold';
btn.style.backgroundColor = "#fc03ec";
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
btn.addEventListener('click', () => {
    alert("Hey Buddy!");
});



/*
Add the following elements to the container using ONLY JavaScript and the DOM methods shown above.

    a <p> with red text that says “Hey I’m red!”
    an <h3> with blue text that says “I’m a blue h3!”
    a <div> with a black border and pink background color with the following elements inside of it:
        another <h1> that says “I’m in a div”
        a <p> that says “ME TOO!”
        Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/