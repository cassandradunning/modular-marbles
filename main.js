const { createMarble } = require("./marbleMaker.js")

// Now you can invoke the function and store what it returns.
const marble = createMarble("medium")
console.log(marble)

const { weaveBag } = require("./bagMaker.js")

// Prints: A medium, red marble

/*This is the yang to the yin of exporting. This is importing the function 
definition from the other module. 

Now you can invoke the function and store what it returns. */

const bag = weaveBag("cotton")
console.log(bag)

// Prints: A cotton marble bag that can hold 20 marbles