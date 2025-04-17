import {  colour_mix, largest_product, day_of_the_week, pay_raise } from './functions.js';

function Question1() {
    return <section>
        <h2>Question 1</h2>
        1. Determines the secondary rgb_colour from mixing two primary RGB colours.
        <h3>results</h3>
        <p>colour_mix("blue", "red") == "{colour_mix("blue", "red")}"</p>
        <p>colour_mix("red", "green") == "{colour_mix("green", "red")}"</p>
        <p>colour_mix("blue", "green") == "{colour_mix("green", "blue")}"</p>
    </section>
}

function Question2() {
    return <section>
        <h2>Question 2</h2>
        2. Returns the product of the two largest values of val1, val2, and val3.
        <h3>results</h3>
        <p>largest_product(-4,10,18) == "{largest_product(-4,10,18)}"</p>
        <p>largest_product(5,4,3) == "{largest_product(5,4,3)}"</p>
        <p>largest_product(6,-5,7) == "{largest_product(6,-5,7)}"</p>
    </section>
}

function Question3() {
    return <section>
        <h2>Question 3</h2>
        2. Returns the name of a day of the week given an integer day number.
        <h3>results</h3>
        <p>day_of_the_week(1) == "{day_of_the_week(1)}"</p>
        <p>day_of_the_week(5) == "{day_of_the_week(5)}"</p>
        <p>day_of_the_week(7) == "{day_of_the_week(7)}"</p>
    </section>
}

function Question4() {
    return <section>
        <h2>Question 4</h2>
        2. Calculates pay raises for employees.
        <h3>results</h3>
        <p>pay_raise(F,10,100) == "{pay_raise("F",10,100)}"</p>
        <p>pay_raise(P,5,50) == "{pay_raise("P",5,50)}"</p>
        <p>pay_raise(P,4,25) == "{pay_raise("P",4,25)}"</p>

    </section>
}

export { Question1, Question2, Question3, Question4 }

