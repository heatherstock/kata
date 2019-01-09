// Detect Pangram
// A pangram is a sentence that contains every single letter of the alphabet at least once. 
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
  }
  

// Simple Pig Latin
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

  function pigIt(string){
    return string.split(' ')
      .map((x) => x.split(''))
      .map((x) => {
        const firstLetter = x.shift();
        if (!/[a-z]+$/i.test(firstLetter)) {
          x.push(firstLetter);
          return x;
        } else {
          x.push(firstLetter, 'a', 'y');
          return x;
        }
      })
      .map((x) => x.join(''))
      .join(' ');
  }

  // HELLO BLAH BLAH BLAH