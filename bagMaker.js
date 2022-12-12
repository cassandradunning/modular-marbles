/*
    Define a function to create a marble. The size of the
    marble will be passed as a string argument
*/
const weaveBag = (materialString) => {
    // Define an array containing strings for all possible marble colors
    const colors = ["red", "blue", "green", "purple"]

    // Get a random number in the range of 15 - 30
    const randomAmount = Math.floor(Math.random() * 16) + 15

    // Return a string description of the bag
    return `A ${materialString} marble bag that can hold ${randomAmount} marbles`
}

/*You are not going to invoke the function in this module - just define it. 
The next step is to export this module so that the main.js module can invoke it.

At the bottom of the file, add this code. */

module.exports = { weaveBag }

/*Once that is added, any other module can import the function 
definition and invoke it.*/