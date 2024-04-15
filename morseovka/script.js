function translateToMorse(text) {
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
        'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
        'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-',
        ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
        ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-',
        '@': '.--.-.', ' ': '/'
    };

    let morseText = '';
    text = text.toUpperCase();

    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i);
        if (morseCode[char]) {
            morseText += morseCode[char] + ' ';
        }
    }

    return morseText.trim();
}

function translateToText(morse) {
    const morseCode = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2',
        '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '.-.-.-': '.',
        '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
        '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$',
        '.--.-.': '@', '/': ' '
    };

    let text = '';
    let morseWords = morse.split('/');

    for (let i = 0; i < morseWords.length; i++) {
        let morseChars = morseWords[i].split(' ');
        for (let j = 0; j < morseChars.length; j++) {
            let char = morseChars[j];
            if (morseCode[char]) {
                text += morseCode[char];
            }
        }
        text += ' ';
    }

    return text.trim();
}

function translateOnClick() {
    let textInput = document.getElementById('text');
    let morseInput = document.getElementById('morse');

    let text = textInput.value;
    let morse = translateToMorse(text);

    morseInput.value = morse;
}

function switchOnClick() {
    let textInput = document.getElementById('text');
    let morseInput = document.getElementById('morse');

    let text = textInput.value;
    let morse = morseInput.value;

    textInput.value = morse;
    morseInput.value = translateToMorse(text);
}

function resetOnClick() {
    let textInput = document.getElementById('text');
    let morseInput = document.getElementById('morse');

    textInput.value = '';
    morseInput.value = '';
}

document.getElementById('trans').addEventListener('click', translateOnClick);
document.getElementById('switch').addEventListener('click', switchOnClick);
document.getElementById('reset').addEventListener('click', resetOnClick);