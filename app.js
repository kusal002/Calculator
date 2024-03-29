let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = "";

buttonsArray.forEach(btn => {
    btn.addEventListener("click",(evt) => {
        
        if(evt.target.innerHTML === "DEL"){
            string = string.substring(0, string.length-1);
            display.value = string;
        }else if(evt.target.innerHTML === "AC"){
            string = "";
            display.value = string;
        } else if (evt.target.innerHTML === "="){
            string = eval(string);
            display.value = string;
        } else{
            string += evt.target.innerHTML;
            display.value = string;
             }
    });
});

