import React, {useState} from 'react'

function Button({type, url, title}) {
    const [isActive, setIsActive] = useState(false)

    const getButtonClassName = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'dark':
                return 'btn-dark'
            case 'small':
                return isActive ? 'small-buttons active-button-1' : 'small-buttons'
                case 'small-2':
                return isActive ? 'small-buttons-2 active-button-1' : 'small-buttons-2'
            default:
                return 'btn-transparent'
        }
    }


    const handleSmallButtonClick = () => {
        setIsActive(!isActive);
    }




    if (type === "small" || type === "small-2") {
        return <button className={getButtonClassName()} onClick={handleSmallButtonClick}></button>
    } else 
    return (
    <a className={getButtonClassName()} href={url}>
        {title}
        <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
    )
}

export default Button