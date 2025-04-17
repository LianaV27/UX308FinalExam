import { fahrenheitToCelsius, hello, colour_mix, largest_product } from './functions.js';

function Question1() {
    return <section>
        <h2>Question 1</h2>
        1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name parameter. Test at least 3 names. <br />*Note ... I solved this one already
        <h2>results</h2>
        <p>hello("Rich") == "{hello('Rich')}"</p>
        <p>hello("Billl") == "{hello('Billl')}"</p>
        <p>hello("Liana") == "{hello("Liana")}"</p>
    </section>;
}

function Question2() {
    return <section>
         <h2>Question 2</h2>
        2. Write a function that converts from fahrenheit to celsius
        <h2>results</h2>
        <p>fahrenheitToCelsius(32) == "{fahrenheitToCelsius(32)}"</p>
        <p>fahrenheitToCelsius(212) == "{fahrenheitToCelsius(212)}"</p>
        <p>fahrenheitToCelsius(70) == "{fahrenheitToCelsius(70)}"</p>
    </section>
}

function Question3() {
    return <section>
        <h2>Question 3</h2>
        3. Determines the secondary rgb_colour from mixing two primary RGB colours.
        <h2>results</h2>
        <p>colour_mix("red","blue") == "{colour_mix('blue', 'red')}"</p>
        <p>colour_mix("red","green") == "{colour_mix('red', 'green')}"</p>
        <p>colour_mix("blue","green") == "{colour_mix('blue', 'green')}"</p>
    </section>
}

function Question4() {
    return <section>
        <h2>Question 4</h2>
        1. Returns the product of the two largest values of val1, val2, and val3.
        <h2>results</h2>
        <p>largest_product(-8,12,20) == "{largest_product(-8,12,20)}"</p>
    </section>
}

export { Question1, Question2, Question3, Question4 }

