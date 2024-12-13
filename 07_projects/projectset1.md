# Projects related to DOM

## Project link
[Click here](https://stackblitz.com/edit/stackblitz-starters-kza2jpbp?description=HTML/CSS/JS%20Starter&file=1-colorChanger%2Findex.html,1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Fstyle.css,index.html,styles.css&terminalHeight=10&title=Static%20Starter)

# Solution Code

## Project 1

```JavaScript 
console.log('hitesh');
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```