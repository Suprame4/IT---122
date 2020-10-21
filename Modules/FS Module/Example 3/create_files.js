// File System module has methods for creating new files.

 var fs = require('fs');

 /* 
 Append

// fs.appendFile() method appends specified content to a file. If the file does not exist, it will be created
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err){
    if(err) throw err;
    console.log('Saved!');
}); 

// Append "This is my text." to the end of the file "mynewfile1.txt" 
fs.appendFile('mynewfile1.txt', 'This is my text.', function (err){
    if(err) throw err;
    console.log('Updated!');
});  
*/


/* 
Open

// fs.open() method takes a "flag" as the second argument, if the flage is "w" for "writing", the specified 
// file is opened for writing. If the file does not exist, an empty file is created
fs.open('mynewfile2.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
}); 
*/

/* 
Write

// fs.writeFile() method replaces the specified file and content if it exists. If the file does not exits,
// a new file, containing the specified content, will be created
fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
    if(err) throw err;
    console.log('Saved!');
}); 

// Write methos replaces the specified file and content 
fs.writeFile('mynewfile3.txt', 'This is my text.', function (err){
    if(err) throw err;
    console.log('Replaced!');
}); 
*/