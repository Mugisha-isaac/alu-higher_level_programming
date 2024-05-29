#!/usr/bin/node
const { argv } = require("node:process");

let argvSize = argv.length - 2;

let values = [];


if(argvSize <=1){
    console.log(0);
}

for (let i = 0; i < argvSize; i++) {
  values.push(argv[i +2]);
}

const sortedValues = values.sort((a, b) => a - b);

console.log(sortedValues[sortedValues.length - 2]);
