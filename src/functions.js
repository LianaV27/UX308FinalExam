function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}


function colour_mix(rgb_colour1, rgb_colour2){

    let rgb_colour;
   
    if (rgb_colour1 == "red" && rgb_colour2 == "blue" || rgb_colour1 == "blue" && rgb_colour2 == "red"){
        rgb_colour = "fuchsia";

    } 
    else if (rgb_colour1 == "red" && rgb_colour2 == "green" || rgb_colour1 == "green" && rgb_colour2 == "red"){
        rgb_colour = "yellow";

    } else if (rgb_colour1 == "blue" && rgb_colour2 == "green" || rgb_colour1 == "green" && rgb_colour2 == "blue"){
        rgb_colour = "aqua";

    } else if (rgb_colour1 == "red" && rgb_colour2 == "red"){
        rgb_colour = "red";

    } else if (rgb_colour1 == "blue" && rgb_colour2 == "blue"){
        rgb_colour = "blue";

    } else if (rgb_colour1 == "green" && rgb_colour2 == "green"){
        rgb_colour = "green";
    
    } else {
        rgb_colour = "Error";
    }

    return rgb_colour;
}

/*
        -------------------------------------------------------
        Returns the product of the two largest values of
        val1, val2, and val3.
        Use: product = largest_product(val1, val2, val3)
        -------------------------------------------------------
        Parameters:
            val1 - a number (float)
            val2 - a number (float)
            val3 - a number (float)
        Returns:
            product - the product of the two largest values of
                val1, val2, and val3 (float)
        ------------------------------------------------------
     */

function largest_product(val1, val2, val3){
    let product;

     // 1 & 2
     if(val1 && val2 > val3){
        product = val1 * val2;
        
    // 1 & 3
     } else if (val1 && val3 > val2){
        product = val1 * val3;

    // 2 & 3
     } else if (val2 && val3 > val1){
        product = val2 * val3;
     } 
       return product;
    }


export {hello, fahrenheitToCelsius, colour_mix, largest_product}