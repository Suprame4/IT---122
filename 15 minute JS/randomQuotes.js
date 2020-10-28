// simple random quote generator
// create a list of 5 quotes from anywhere you like. 
// There must be a function that selects random quotes from the list to be printed to the console
// Create a program to log a random quote to the console
// There must be a way to continue or stop generating the quotes
// Your code must never produce the same quote more than twice in a row



// Create a list of quotes
var quotes = [
    "Everyone has a plan til they get punched in the face.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. -Dr. Seuss",
    "Love the life you live. Live the life you love. -Bob Marley",
    "The question isn't who is going to let me; it's who is going to stop me. -Ayn Rand"
];

// Generate a random number between 0 and the number of quotes
var rand = Math.floor(Math.random() * quotes.length);

// Function that accepts a quote and prints it to the console
function printQuotes(q){
    console.log(q);
}

// invoke the function
printQuotes(quotes[rand]);

