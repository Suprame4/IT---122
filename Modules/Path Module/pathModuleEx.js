// Let's say we need the file path of an image, and we have the name of the image. 

const path = require('path');

let imageName = 'bob_smith';

let filepath = path.join(__dirname, '../../../images/useravatars/', imageName, '.png');

console.log('the file path of the image is', filepath);