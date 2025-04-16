function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}


/*
        -------------------------------------------------------
        Determines the secondary rgb_colour from mixing two primary
        RGB (Red, Green, Blue) colours. The order of the colours
        is *not* significant.
        Returns "Error" if any of the rgb_colour parameter(s) are invalid.
            "red" + "blue": "fuchsia"
            "red" + "green": "yellow"
            "green" + "blue": "aqua"
            "red" + "red": "red"
            "blue" + "blue": "blue"
            "green" + "green": "green"
        Use: rgb_colour = colour_mix(rgb_colour1, rgb_colour2)
        -------------------------------------------------------
        Parameters:
            rgb_colour1 - a primary RGB rgb_colour (str)
            rgb_colour2 - a primary RGB rgb_colour (str)
        Returns:
            rgb_colour - a secondary RGB rgb_colour (str)
        -------------------------------------------------------
    */

function colour_mix(rgb_colour1, rgb_colour2){

    let rgb_colour;

    if (rgb_colour1 == "red" && rgb_colour2 == "blue"){
        rgb_colour = "fuchsia";

    } else if (rgb_colour1 == "red" && rgb_colour2 == "green"){
        rgb_colour = "yellow";

    } else if (rgb_colour1 == "green" && rgb_colour2 == "blue"){
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

export {hello, fahrenheitToCelsius, colour_mix}