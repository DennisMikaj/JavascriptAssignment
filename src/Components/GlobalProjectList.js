import React from 'react'

const GlobalListItem = ({url, img, title, text, icon}) => (
    <a className="readmore" href={url}>
    <img src={img} alt={title}/>
    <h3>{title}</h3>
    <p>{text}</p>
    {icon}
    </a>
);

const GlobalProjectList = ({url, img, title, text, icon}) => {
return (
<GlobalListItem url={url} img={img} title={title} text={text} icon={icon} />
)
}

export default GlobalProjectList