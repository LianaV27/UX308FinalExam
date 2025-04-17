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


function pay_raise(status, years, salary) {
    let new_salary;
    if (status == "F" && years >= 10) {
        new_salary = salary * 0.05 + salary;

    } else if (status == "F" && years < 4) {
        new_salary = salary * 0.015 + salary;

    } else if (status == "P" && years > 10) {
        new_salary = salary * 0.03 + salary;

    } else if (status == "P" && years < 4) {
        new_salary = salary * 0.01 + salary;

    } else {
        new_salary = salary * 0.02 + salary;
    }

    return new_salary;
}

/*
   -------------------------------------------------------
   Determines if a year is a leap year. Every year that is
   exactly divisible by four is a leap year, except for years
   that are exactly divisible by 100, but these centurial years
   are leap years if they are exactly divisible by 400. 
   
   For
   example, the years 1700, 1800, and 1900 are not leap years,
   but the years 1600 and 2000 are.
   Use: result = is_leap(year)
   -------------------------------------------------------
   Parameters:
       year - a year (int > 0)
   Returns:
       result - True if year is a leap year,
           False otherwise (boolean)
   ------------------------------------------------------
   */

function is_leap(year) {

    let result;

    if (year % 400 == 0) {
        result = "True";

    } else if (year % 4 == 0 && year % 100 != 0) {
        result = "True";

    } else {
        result = "False";
    }

    return result;
}

export { colour_mix, largest_product, day_of_the_week, pay_raise, is_leap }