const menuToggle = document.getElementById('menuToggle');
const navbarOverlay = document.getElementById('navbarOverlay');
const closeBtn = document.getElementById('closeBtn');

// Open the menu
menuToggle.addEventListener('click', () => {
    navbarOverlay.classList.add('active');
});

// Close the menu
closeBtn.addEventListener('click', () => {
    navbarOverlay.classList.remove('active');
});

var typed=new Typed('#element',{
    strings:['Web Developer...', 'Web Designer...', 'Frontend Developer...'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true,
});

let count = 1;
const target = 5; // Target number
const display = document.getElementById('number');

// Function to increment number
function incrementNumber() {
  if (count < target) {
    count++;
    display.textContent = count;
    setTimeout(incrementNumber, 700); // Call again after 500ms
  }
}
// Start incrementing
incrementNumber();


let count1 = 1;
const target1 = 4; // Target number
const display1 = document.getElementById('number1');

// Function to increment number
function incrementNumber1() {
  if (count1 < target1) {
    count1++;
    display1.textContent = count1;
    setTimeout(incrementNumber1, 700); // Call again after 500ms
  }
}
// Start incrementing
incrementNumber1();

let count2 = 1;
const target2 = 8; // Target number
const display2 = document.getElementById('number2');

// Function to increment number
function incrementNumber2() {
  if (count2 < target2) {
    count2++;
    display2.textContent = count2;
    setTimeout(incrementNumber2, 700); // Call again after 500ms
  }
}

// Start incrementing
incrementNumber2();

let count3 = 1;
const target3 = 3; // Target number
const display3 = document.getElementById('number3');

// Function to increment number
function incrementNumber3() {
  if (count3 < target3) {
    count3++;
    display.textContent = count3;
    setTimeout(incrementNumber, 700); // Call again after 500ms
  }
}

// Start incrementing
incrementNumber3();



