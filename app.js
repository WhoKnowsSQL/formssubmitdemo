const h1 = document.querySelector(".content h1");
const strText = h1.textContent;
const splitText = strText.split("");

// Clear the existing content
h1.innerHTML = '';

for (let i = 0; i < splitText.length; i++) {
  // Check if the current character is a space
  if (splitText[i] === ' ') {
    h1.innerHTML += '<span>&nbsp;</span>'; // Add a non-breaking space
  } else {
    h1.innerHTML += "<span class='span2'>" + splitText[i] + "</span>";
  }
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = h1.querySelectorAll('span')[char];
  span.classList.add('rainbow');
  span.classList.add('fade');
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  console.log(entry)
  if (entry.isIntersecting) {
    entry.target.classList.add('show');
  } else {
    entry.target.classList.remove('show');
  }
});
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
