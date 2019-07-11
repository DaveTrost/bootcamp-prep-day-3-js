console.log('Hello to console from JS!');

const result = document.getElementById('item-01');
console.log(result);

const header = document.getElementById('item-01');
header.textContent = 'Hello Portland';

const nameInput = document.getElementById('input-01');
const value = nameInput.value;
const checked = nameInput.checked;
console.log(value + ' ' + checked);

const paragraph = document.getElementById('para-01');
paragraph.textContent = 'The text you want to show';

const pointer = document.getElementById('result');
pointer.textContent = '[your name here]';

// eslint-disable-next-line no-unused-vars
function doThing() {
    // for(let i = 0; i < 10; i++) {
    //     document.write(i + ': ' + (i * 3) + '<br />');
    //     console.log(i);
    // }

    console.log('inside doThing');

    let nameValue = nameInput.value;
    pointer.textContent = nameValue;
}
