// destructuring the methods
// const { log } = require('console');
const { readFileSync, writeFileSync } = require('fs');

// OR
// const fs = require('fs');
// fs.readFileSync


// to read from the file system
// provide 2 parameters
//1: a path to that specific path
//2: check the encoding. Node knows how to decode the file

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log('start');
// console.log(first, second);


// node to create file if the file is not there
// if the file is already there, node will overwrite all the values that are in the file
writeFileSync('./content/result-sync.txt', 
	`Here is the result : ${first}, ${second}`, 
	{flag: 'a'}
)
console.log('done with this task');
console.log('starting the next task');

// to hop into the file add {flag: 'a'}
