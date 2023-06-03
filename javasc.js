const textDisplay = document.getElementById('typewriter');
const phrase = ['Hey There!'];

let i = 0;
let j = 0;
let currentPhrase = [];

function loop() {

    textDisplay.innerHTML = currentPhrase.join('');
    

        if (j <= phrase[i].length) {
            currentPhrase.push(phrase[i][j]);
            j++
        }
        
    setTimeout(loop, 250);
}

loop();