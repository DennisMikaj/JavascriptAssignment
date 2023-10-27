import React from 'react'

const SignupValidation = (inputElement, elementId) => {
    const errorMessage = {
        email_required: "You Must enter a valid e-mail adress.",
        email_not_valid: "You must enter a real e-mail adress"
    };

    // email = document.getElementById("email").value
    const value = inputElement.value;
    const element = document.getElementById(elementId);
    const errorMessageElement = document.getElementById(`${elementId}-error`)

    let isValid = true;

    switch(inputElement.type) {
        case 'email':
            const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

            if (!emailPattern.test(value)) {
                element.classList.add('error');
                errorMessageElement.textContent = errorMessage[`${elementId}_required`]
                isValid = false
            } else {
                element.classList.remove('error');
                errorMessageElement.textContent = "";
                isValid = true
                } break;
    }

    return isValid;

}

export default SignupValidation