const h1 = document.getElementById('mainText')
const span = document.getElementById('subText')
const buttons = document.querySelector('.language-buttons')
let text, subText;

// event listeners will assign either ES or EN to text depending on which button is clicked
// then, both call showText func, passing in our text variable
document.getElementById('es').addEventListener('click', async () => {
    text = 'Una colección de coloquialismos mexicanos.';
    // subText = 'próximamente...'
    await showText(text)
    // showsubText(subText)
})
document.getElementById('en').addEventListener('click', () => {
    text = 'A collection of Mexican colloquialisms.';
    // subText = 'coming soon...'
    showText(text)
    // showsubText(subText)
})

function showText(text, i = 0) {
    buttons.style.display = 'none';

    if (i === 0) {
        h1.textContent = '';
    }

    if (i === text.length) { return; }
    h1.textContent += text[i];
    setTimeout(() => showText(text, (i + 1)), 55)   
}
// function showsubText(subtext, i = 0) {
//     if (i === 0) {
//         span.textContent = '';
//     }

//     if (i === subtext.length) { return; }
//     span.textContent += subtext[i];
//     setTimeout(() => showsubText(subtext, (i + 1)), 55)   
// }