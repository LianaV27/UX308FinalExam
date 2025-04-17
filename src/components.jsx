import {  colour_mix, largest_product } from './functions.js';

function Question1() {
    return <section>
        <h2>Question 1</h2>
        1. Determines the secondary rgb_colour from mixing two primary RGB colours.
        <h2>results</h2>
        <p>colour_mix("blue", "red") == "{colour_mix("blue", "red")}"</p>
        <p>colour_mix("red", "green") == "{colour_mix("green", "red")}"</p>
        <p>colour_mix("blue", "green") == "{colour_mix("green", "blue")}"</p>
    </section>
}

function Question2() {
    return <section>
        <h2>Question 2</h2>
        2. Returns the product of the two largest values of val1, val2, and val3.
        <h2>results</h2>
        <p>largest_product(-4,10,18) == "{largest_product(-4,10,18)}"</p>
        <p>largest_product(5,4,3) == "{largest_product(5,4,3)}"</p>
        <p>largest_product(6,-5,7) == "{largest_product(6,-5,7)}"</p>
    </section>
}

export { Question1, Question2 }

