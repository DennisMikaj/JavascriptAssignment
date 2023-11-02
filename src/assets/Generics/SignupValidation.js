import React from 'react'

const SignupValidation = (inputElement, elementId) => {

    
    const errorMessage = {
        email_required: "You Must enter a valid e-mail adress.",
        email_not_valid: "You must enter a real e-mail adress",
        name_required: "You must enter a Name",
        text_required: "You must include a message"

    };

    const value = inputElement.value;
    const element = document.getElementById(elementId);
    const errorMessageElement = document.getElementById(`${elementId}-error`)

    let isValid = true;


    if (inputElement.tagName === 'INPUT') {
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

        case 'text':
        case 'name':
            if (value.trim().length < 2) {
                element.classList.add('error')
                errorMessageElement.textContent = errorMessage[`${elementId}_required`]
                isValid = false
            } else {
                element.classList.remove('error')
                errorMessageElement.textContent = ""
            } break;

            default:
                break;
    }}
    else if (inputElement.tagName === 'TEXTAREA') {
        if (value.trim().length < 2 ) {
            element.classList.add('error')
                errorMessageElement.textContent = errorMessage[`${elementId}_required`]
                isValid = false
            } else {
                element.classList.remove('error')
                errorMessageElement.textContent = ""
            }

        }
    

    return isValid;
}

export default SignupValidation