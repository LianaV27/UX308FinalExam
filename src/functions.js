function colour_mix(rgb_colour1, rgb_colour2) {

    let rgb_colour;

    if (rgb_colour1 == "red" && rgb_colour2 == "blue" || rgb_colour1 == "blue" && rgb_colour2 == "red") {
        rgb_colour = "fuchsia";

    }
    else if (rgb_colour1 == "red" && rgb_colour2 == "green" || rgb_colour1 == "green" && rgb_colour2 == "red") {
        rgb_colour = "yellow";

    } else if (rgb_colour1 == "blue" && rgb_colour2 == "green" || rgb_colour1 == "green" && rgb_colour2 == "blue") {
        rgb_colour = "aqua";

    } else if (rgb_colour1 == "red" && rgb_colour2 == "red") {
        rgb_colour = "red";

    } else if (rgb_colour1 == "blue" && rgb_colour2 == "blue") {
        rgb_colour = "blue";

    } else if (rgb_colour1 == "green" && rgb_colour2 == "green") {
        rgb_colour = "green";

    } else {
        rgb_colour = "Error";
    }

    return rgb_colour;
}


function largest_product(val1, val2, val3) {

    let product;

    // 1 & 2
    if (val1 > val3 && val2 > val3) {
        product = val1 * val2;

        // 1 & 3
    } else if (val1 > val2 && val3 > val2) {
        product = val1 * val3;

        // 2 & 3
    } else if (val2 > val1 && val3 > val1) {
        product = val2 * val3;
    }
    return product;
}

/*
    -------------------------------------------------------
    Returns the name of a day of the week given an integer day number.
    Day 1 is "Sunday", day 7 is "Saturday".
    Returns "Error" if the number is not valid.
    Use: day = day_of_the_week(day_num)
    -------------------------------------------------------
    Parameters:
        day_num - day number (1 <= int <= 7)
    Returns:
        day - name of a day of the week (str)
    ------------------------------------------------------
    */
function day_of_the_week(day_num) {

    let day;

    if (day_num == 1) {
        day = "Sunday";

    } else if (day_num == 2) {
        day = "Monday";

    } else if (day_num == 3) {
        day = "Tuesday";

    } else if (day_num == 4) {
        day = "Wednesday";

    } else if (day_num == 5) {
        day = "Thursday";

    } else if (day_num == 6) {
        day = "Friday";

    } else if (day_num == 7) {
        day = "Saturday";

    } else {
        day = "Error";
    }
    return day;
}

/*
-------------------------------------------------------
Calculates pay raises for employees. Pay raises are based on:
status: Full Time ('F)' or Part Time ('P')
and years of service
Raises are:
    5% for full time greater than or equal to 10 years service
    1.5% for full time less than 4 years service
    3% for part time greater than 10 years service
    1% for part time less than 4 years service
    2% for all others
Use: new_salary = pay_raise(status, years, salary)
-------------------------------------------------------
Parameters:
    status - employment type (str - 'F' or 'P')
    years - number of years employed (int > 0)
    salary - current salary (float > 0)
Returns:
    new_salary - employee's new salary (float).
-------------------------------------------------------
*/

function pay_raise(status, years, salary) {
    let new_salary;
    if (status == "F" && years >= 10) {
        new_salary = salary * 0.05 + salary;

    } else if (status == "F" && years < 4) {
        new_salary = salary * 0.015 + salary;

    } else if (status == "P" && years >10) {
        new_salary = salary * 0.03 + salary;
    
    } else if (status == "P" && years < 4) {
        new_salary = salary * 0.01 + salary;
    
    } else {
        new_salary = salary * 0.02 + salary;
    }

    return new_salary;
}

export { colour_mix, largest_product, day_of_the_week, pay_raise }