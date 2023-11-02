import React, {useState} from 'react'
import SignupValidation from '../assets/Generics/SignupValidation'
import Button from '../assets/Generics/Button'


            

const errorMessage = {
    message_success: "Your message have been successfully sent.",
    message_error: "Unable to send message, check if all field are filled correctly.",
    
};

const MessageUsSection = () => {
        const [formMessage, setFormMessage] = useState('');
        const [formMessageClass, setFormMessageClass] = useState('');   
        const [isEmailValid, setIsEmailValid] = useState(true)
        const [isTextValid, setIsTextValid] = useState(true)
        const [isNameValid, setIsNameValid] = useState(true)
        

        const [formData, setFormData] = useState({
            name: '',
            email: '',
            Message: '',
        })
    
        const handleNameInput = (e) => {
            const isValid = SignupValidation(e.target, 'name');
            setIsNameValid(isValid);
            setFormData({...formData, name: e.target.value})
            return (isValid)
        }
        
        const handleEmailInput = (e) => {
            const isValid = SignupValidation(e.target, 'email');
            setIsEmailValid(isValid);
            setFormData({...formData, email: e.target.value})
            return (isValid)
        }
        const handleTextInput = (e) => {
            const isValid = SignupValidation(e.target, 'text');
            setIsTextValid(isValid);
            setFormData({...formData, Message: e.target.value})
            return (isValid)
        }

        const handleForm = async (e) => {
            e.preventDefault()
            const apiUrl = 'https://win23-assignment.azurewebsites.net/api/contactform'

             

            if (isNameValid && isEmailValid && isTextValid) {
            try {
                const result = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
            
                if (result.status === 200) {
                    console.log("message sent")
                    setFormMessage(errorMessage.message_success)
                    setFormMessageClass("submit-success")

                } else {
                    console.error("Unable to send message")
                    setFormMessage(errorMessage.message_error)
                    setFormMessageClass("submit-error")
                }
            } catch (error) {
                console.error("Couldn't send message", error)
                setFormMessage(errorMessage.message_error)
                setFormMessageClass("submit-error")

            }} else {
                console.log("You must enter texts")
                setFormMessage(errorMessage.message_error)
                setFormMessageClass("submit-error")

            }
        }


  return (
<section className="container message-us">

<div>
    <div>
    <h2>Leave us a message for any information</h2>
</div>
<div className="input-column">
    <form onSubmit={handleForm} noValidate>
        <label htmlFor="message"></label>
    <input id="name" type="text" placeholder="Name*" onBlur={handleNameInput}/>
    <span id="name-error"></span>
    <input id="email" type="email" placeholder="Email*" onKeyUp={handleEmailInput}/>
    <span id="email-error"></span>
    <textarea type="text" name="text" id="text" cols="30" rows="10" placeholder="Your Message*" onKeyUp={handleTextInput}></textarea>
    <span id="text-error"></span>
    <Button type="yellow-submit" title="Send Message" />
    <span id="submit-form-info" className={formMessageClass}>{formMessage}</span>
</form>
</div>
</div>


</section>  )
}

export default MessageUsSection