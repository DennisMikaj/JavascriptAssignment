import React from 'react'
import Paperz from '../assets/images/Paperz.svg'
import Dorfus from '../assets/images/Dorfus.svg'
import Martino from '../assets/images/Martino.svg'
import Square from '../assets/images/square.svg'
import Gobona from '../assets/images/Gobona.svg'



const Brands = () => {
    return (
    <section className="container companies-section">
    <div className="companies">
        <img src={Paperz} alt="Company logo Paperz leading paper company"></img>
        <img src={Dorfus} alt="Company logo Dorfus" ></img>
        <img src={Martino} alt="Company logo Martino colors of your life"></img>
        <img src={Square} alt="Company logo Square real estate solution"></img>
        <img className="gobona" src={Gobona} alt="Company logo Gobona your trusted currier"></img>
    </div>
     </section>
  )
}

export default Brands