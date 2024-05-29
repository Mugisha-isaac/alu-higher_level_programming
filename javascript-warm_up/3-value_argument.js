#!/usr/bin/node
const { argv } = require('node:process');

console.log(argv.length - 2 === 0 ? 'No argument' : argv[2]);
