const path = require('path');

// path.sep returns the seperator of files yo
console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);

// base name
// path.basename returns the base/last file
const base = path.basename(filePath)
console.log(base);

// path.resolve returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);