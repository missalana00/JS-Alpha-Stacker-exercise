

// Step 1:

// Create an array that contains the letters of the alphabet, then send
// it to the console so that it prints out.

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(alphabet);

 // Step 2:

// The stackLetter function should accept the array as the sole argument -
// function stackLetters (theAlphabetArray) {

      // Write a `for` loop that iterates over the array argument and
     //  outputs the letters so that they stack like this:

 //       a
 //       ab
 //       abc
 //       abcd
 //       abcde
 //       abcdef
 //       abcdefg

// }

function stackLetters () {

var output = ' ';  /* Note: You have to declare var before filling it. You also need to give it
an empty string as a place holder. */

for (var i = 0; i < alphabet.length; i++ ) {
    output += alphabet[i]; /* Understand that += gives you where you're at currently and where you were. */
    console.log(output);
  }
}

stackLetters(); /* Here, you are calling the function you created. */


// Step 3:

// Now, add logic to stackLetters that places a space after every third letter.
// This will require you to do some basic math in JavaScript, and use an if statement.
// Your job is to read the following English statement and write
// the equivalent in JavaSript code to make it work:

// If the current value of the counter variable can be
// evenly divided by 3 - using the JavaScript remainder operator - then add a single space to the output.

function stackLetters () {

var output = '';

for (var i = 0; i < alphabet.length; i++ ) {
    if (i % 3 === 0) {
    output = output + ' ' + alphabet[i];
    console.log(output);
    }

else {
    output = output + alphabet[i];
    console.log(output);
   }
 }
}

stackLetters();
