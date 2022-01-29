const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    //console.log(expr);
    let words = expr.split("**********");
    let morseWords = [];

    for (let i = 0; i < words.length; i++) {
        let firstMorseSign = words[i].indexOf("1");
        morseWords[i] = [];

        while (firstMorseSign > -1) {
            let letter = Math.floor(firstMorseSign / 10);
            if (!morseWords[i][letter]) morseWords[i][letter] = "";
            
            if (words[i][firstMorseSign + 1] == "0") {
                morseWords[i][letter] += ".";
            } else {
                morseWords[i][letter] += "-";
            }

            firstMorseSign = words[i].indexOf("1", firstMorseSign + 2);
        }
    }

    let result = "";
    for (let i = 0; i < morseWords.length; i++) {
        for (let j = 0; j < morseWords[i].length; j++) {
            result += MORSE_TABLE[morseWords[i][j]];
        }
        result += " ";
    }

    return result.slice(0, result.length - 1);
}

module.exports = {
    decode
}