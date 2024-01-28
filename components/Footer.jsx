import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2024 Royal Deals All rights reserverd</p>
      <h2>contact us:</h2>
      <p className="icons">
        <a href="https://wa.me/9004206694">
        <AiOutlineWhatsApp /><h6>9004206694</h6></a>
        <a href="https://wa.me/809764653">
        <AiOutlineWhatsApp /><h6>809764653</h6></a>
      </p>
    </div>
  )
}

export default Footer