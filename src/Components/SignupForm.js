import React, {useState} from 'react'
import DecorativeLine from '../assets/images/Element.png'
import Button from '../assets/Generics/Button'
import SignupValidation from './SignupValidation'


const SignupForm = () => {
    const [isEmailValid, setIsEmailValid] = useState(true)

    const handleEmailInput = (e) => {
        const isValid = SignupValidation(e.target, 'email');
        setIsEmailValid(isValid);
    }

  return (
    <section className="signup">
        <div className="container">
            <h2>Get News Updates By Signup</h2>
            <div className="signup-bar">
                <form noValidate id="registerForm" method="get">
                    <label htmlFor="email"></label>
                <input id="email" type="email" name="email" onKeyUp={handleEmailInput} placeholder="username@domain.com" className={isEmailValid ? "" : "error"} />
                <span id="email-error" className="email-error-signup"></span>
                <Button type="yellow" url="" title="Subscribe"/>
            </form>
                <img src={DecorativeLine} alt="Decorative line"/>
            </div>

        </div>
    </section>
  )
}

export default SignupForm
