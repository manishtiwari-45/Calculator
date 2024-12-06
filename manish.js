let string = ""; 
const buttons = document.querySelectorAll(".button");
const inputField = document.querySelector(".row input");


Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === "=") {
            try {
                string = eval(string);
                inputField.value = string; 
            } catch {
                inputField.value = "Error"; 
                string = ""; 
            }
        } else if (buttonValue === "C") {
            string = ""; 
            inputField.value = ""; 
        } else {
            string += buttonValue; 
            inputField.value = string;
        }
    });
});
