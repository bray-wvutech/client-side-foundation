// body OnLoad event handler
window.addEventListener("load", () => {
    document.getElementById("messageDiv").style.visibility = "hidden";
});

// button handler to show/hide message
document.getElementById("messageButton").addEventListener("click", () => {
    if (document.getElementById("messageDiv").style.visibility == "hidden") 
        document.getElementById("messageDiv").style.visibility = "visible";
    else
        document.getElementById("messageDiv").style.visibility = "hidden";
});

// handler for button that is outside the form
document.getElementById("programSubmitButton").addEventListener("click", function() {
    if (validate())  {
        document.querySelector("form").submit();
    }
    else {
        document.getElementById("messageDiv").style.visibility = "visible";
    }
});

// form OnSubmit event
document.getElementById("numberForm").addEventListener("submit", (event) => {
    if (!validate() ) {
        // you have to do this to cancel
        // return value does not matter
        document.getElementById("messageDiv").style.visibility = "visible";
        event.preventDefault();
    }
});

// is our textbox value correct?
function validate() {
    const value = document.getElementById("formTextBox").value;
    if (isNaN(value))
        return false;
    if (value < 1)
        return false;
    if (value > 10)
        return false;
    return true;
}

