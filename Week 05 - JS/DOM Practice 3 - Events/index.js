// Events!! - Below are some, not all examples of stuff you can do!

// Mouse Events
let button = document.getElementById('button');
button.addEventListener('click', (event) => {
  alert('You won 1,000 bitcoin');
});

let h3 = document.getElementById('h-3');
h3.addEventListener('mousemove', (e) => {
  h3.innerHTML = 'X: ' + e.screenX + ' Y: ' + e.screenY;
});

// keyboard Events
window.addEventListener('keydown', (event) => {
  // console.log(event.key);
});

// Form Events
document.getElementById('input-text').addEventListener('blur', () => {
  text = document.getElementById('input-text');
  console.log(text.value);
});
