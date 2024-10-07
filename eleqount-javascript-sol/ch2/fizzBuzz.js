const fizzBuzz = function() {
    for (let i = 1; i <= 100; i++) {
        let strToPrint = "";
        if (i%3 == 0)
            strToPrint += "Fizz";
        if (i%5 == 0)
            strToPrint += "Buzz";
        if (!strToPrint)
            strToPrint += String(i);
        console.log(strToPrint);
    }
}

fizzBuzz();