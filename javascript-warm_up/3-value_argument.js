#!/usr/bin/node
const { argv } = require("node:process");
const [, , firstArg] = argv;

if (firstArg === undefined) {
<<<<<<< HEAD
  console.log("No argument");
=======
  console.log('No argument');
>>>>>>> d54ae80668f5472130050fd5fc93f7f5d2bee61f
} else {
  console.log(firstArg);
}
