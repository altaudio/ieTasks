import React from 'react' //ignore this
import catNames from 'cat-names'
import request from 'superagent'

// Answers go here!
import banana from './banana.js'
import {apple} from './apple.js'
import adder from './myFunctions.js'
import fruitMessage, {apples, bananas} from './fruits.js'
import pieMenu, {applePie, blueberryPie} from './pies'


console.log(`Question 1 is a ${banana}`);
console.log(`Question 2 is a ${apple}`);
console.log(`Question 3 the adder function with arguments 1 and 2 equals ${adder(1,2)}`);
console.log(`Question 4 ${fruitMessage} We have ${apples} and ${bananas}!`);

console.log('Question 5');
console.log(pieMenu);
console.log(applePie);
console.log(blueberryPie);

console.log(`Question 6 A nice cat name is ${catNames.random()}`);





// Ignore this!
export default () => <p>Import Export Tasks. Open your debugger :)</p>
