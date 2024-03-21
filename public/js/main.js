const moonSun = document.querySelector('.fa-solid')
const mainHeader = document.getElementById('main-header')
const mainText = document.getElementById('mainText')
const buttons = document.querySelector('.language-buttons')
const addBtn = document.getElementById('addBtn')

let text;

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
    showAgrega()
})
document.getElementById('en').addEventListener('click', () => {
    text = 'A collection of Mexican colloquialisms. Coming soon...';
    showText(text)
    showAdd()
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

function showAgrega() {
    addBtn.innerText = 'Agrega un dicho'
}
function showAdd() {
    addBtn.innerText = 'Add a dicho'
}