const log = () => {
    console.log('welcome to my website')
}

setInterval(log, 1000)

const h1 = document.querySelector('h1');
h1.addEventListener("click", () => {
    h1.textContent = 'I will be world class very soon';
    h1.style.background = 'black';
    h1.style.color = 'white';
})