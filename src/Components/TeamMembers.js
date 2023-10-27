import React from 'react'

const TeamMembers = ({img, name, role}) =>  (
    <div className="box-1">
        <img src={img} alt={name}/>
        <h5>{name}</h5>
        <p>{role}</p>
    </div>
     
);

export default TeamMembers