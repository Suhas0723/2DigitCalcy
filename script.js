x = 0;
y = 0;
operation = "";

function change(value, tag_id)
{
    console.log("function called");
    if (y == 0 && value > 0 && x > 0) {
        y = value;
        document.getElementById("display").innerHTML = value;
        console.log(y);
    }

    if (x == 0 && value > 0) {
        x = value;
        document.getElementById("display").innerHTML = value;
        console.log(x);
    }

    if (tag_id == "add") {
        operation = "add";
    }

    if (tag_id == "sub") {
        operation = "sub";
    }

    if (tag_id == "multi") {
        operation = "multi";
    }

    if (tag_id == "div") {
        operation = "div";
    }

    if (tag_id == "clear") {
        x = 0;
        y = 0;
        operation = "";
        document.getElementById("display").innerHTML = 0;
    }

    if (tag_id == "equals" && value == 0) {
        if (operation == "add") {
            document.getElementById("display").innerHTML = x+y;         
        }

        if (operation == "sub") {
            document.getElementById("display").innerHTML = x-y;         
        }

        if (operation == "multi") {
            document.getElementById("display").innerHTML = x*y;         
        }

        if (operation == "div") {
            document.getElementById("display").innerHTML = x/y;         
        }
        
    }

    

}













