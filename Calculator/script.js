let buttons = document.querySelectorAll('.btn');
let input = document.getElementById('sum');
let string = ""
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText == "="){
            string = eval(string);
        }
        
        else if(e.target.innerText == "AC"){
            string = "";
        }

        else if (e.target.innerText == '%') {
            string = string + "/100"
        }

        else {
            string = string + e.target.innerText;
        }
        input.value = string;
    })
})