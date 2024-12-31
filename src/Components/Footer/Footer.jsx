import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=""  />
            </div>
            <div className="footer-icons-container">
                <img src={pintester_icon} alt=""  />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""  />
            </div>          
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @2024 Kushagra Goswami. All rights reserved</p>
             <p>
    Connect with me on 
    <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
  </p>
            
        </div>
    </div>
  )
}

export default Footer
