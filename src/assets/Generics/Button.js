import React from 'react'

function Button({type, url, title}) {

    const getButtonClassName = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'dark':
                return 'btn-dark'
            default:
                return 'btn-transparent'
        }
    }




  return (
    <a className={getButtonClassName()} href={url}>
        {title}
        <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
    )
}

export default Button