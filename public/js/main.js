const moonSun = document.querySelector('.fa-solid')
const mainHeader = document.getElementById('main-header')
const mainText = document.getElementById('mainText')
const buttons = document.querySelector('.language-buttons')
let text;

// moon.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'black';
//     mainHeader.style.color = 'white'
//     mainText.style.color = 'white'
//     moon.style.display = 'none';
//     sun.style.display = 'block'
// })
// sun.addEventListener('click', () => {
//     document.body.style.backgroundColor = 'white';
//     mainHeader.style.color = 'black'
//     // mainText.style.color = 'white'
    // moon.style.display = 'block';
//     sun.style.display = 'none'
// })

function toggle() {
    console.log('toggle toggle')
    moonSun.classList.toggle('fa-moon')
    moonSun.classList.toggle('fa-sun')
    document.documentElement.classList.toggle('dark-mode')
}

// event listeners will assign either ES or EN to text depending on which button is clicked
// then, both call showText func, passing in our text variable
document.getElementById('es').addEventListener('click', () => {
    text = 'Una colección de coloquialismos mexicanos. Próximamente...';
    showText(text)
})
document.getElementById('en').addEventListener('click', () => {
    text = 'A collection of Mexican colloquialisms. Coming soon...';
    showText(text)
})

function showText(text, i = 0) {
    buttons.style.display = 'none';

    if (i === 0) {
        mainText.textContent = '';
    }

    if (i === text.length) { return; }
    mainText.textContent += text[i];
    setTimeout(() => showText(text, (i + 1)), 55)   
}