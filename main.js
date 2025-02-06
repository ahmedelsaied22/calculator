let input = document.getElementById("input");
let bottons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(bottons);

arr.forEach((button) => {
    button.addEventListener("click", ()=> {
        // string = button.innerHTML;
        if(button.innerHTML == "="){
            string = parseFloat(eval(string)).toFixed(2);
            input.value = string;
        }
        else if(button.innerHTML == "AC"){
            string = "";
            input.value = string;
        }
        else if(button.innerHTML == "DEL"){
            string = string.substring(0, string.length -1);
        }
        else if(button.innerHTML != "="){
                string += button.innerHTML;
            }
            input.value = string;
    })
})