import React from 'react'


const ListItem = ({icon, title, text}) =>  (
        <>
            {icon}
            <div className="content">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
         </>
);

const WhyChooseUsList = ({icon, title, text}) => {
  return (
    
    <ListItem
    icon={icon}
    title={title}
    text={text}
    />
  )
}

export default WhyChooseUsList