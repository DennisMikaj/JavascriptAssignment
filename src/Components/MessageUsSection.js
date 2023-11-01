import React, {useState} from 'react'
import SignupValidation from './SignupValidation'
import Button from '../assets/Generics/Button'


const MessageUsSection = () => {
        const [isEmailValid, setIsEmailValid] = useState(true)
        const [isTextValid, setIsTextValid] = useState(true)
        const [isNameValid, setIsNameValid] = useState(true)
    
        const handleEmailInput = (e) => {
            const isValid = SignupValidation(e.target, 'email');
            setIsEmailValid(isValid);
        }
        const handleTextInput = (e) => {
            const isValid = SignupValidation(e.target, 'text');
            setIsTextValid(isValid);
        }
        const handleNameInput = (e) => {
            const isValid = SignupValidation(e.target, 'name');
            setIsNameValid(isValid);
        }
  return (
<section className="container message-us">

<div>
    <div>
    <h2>Leave us a message for any information</h2>
</div>
<div className="input-column">
    <form noValidate>
        <label for="message"></label>
    <input id="name" type="text" placeholder="Name*" onKeyUp={handleNameInput}/>
    <span id="name-error"></span>
    <input id="email" type="email" placeholder="Email*" onKeyUp={handleEmailInput}/>
    <span id="email-error"></span>
    <textarea type="text" name="text" id="text" cols="30" rows="10" placeholder="Your Message*" onKeyUp={handleTextInput}></textarea>
    <span id="text-error"></span>
    <Button type="yellow" title="Send Message" url="/services"/>
</form>
</div>
</div>


</section>  )
}

export default MessageUsSection