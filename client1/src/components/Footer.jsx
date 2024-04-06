import React from 'react'

const Footer = () => {
  return (
<footer>
  <div className="footer-container">
    <div className="left-col">
      <img src="images/icon/logo - Copy.png" style={{ width: 200 }} />
      <div className="logo" />
      <div className="social-media">
        <a href="#">
        <i class="fa-brands fa-facebook"style={{ color: "yellow" }} ></i>
        </a>
        <a href="#">
        <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="#">
        <i class="fa-brands fa-twitter"></i>
        </a>
        <a href="#">
        <i class="fa-brands fa-youtube"></i>
        </a>
        <a href="#">
        <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <br />
      <br />
      <p className="rights-text">
        Copyright © 2024 Created By Aditya Gupta, Abhijit Dutta All Rights
        Reserved.
      </p>
      <br />
      <p>
      <i class="fa-solid fa-location-dot"></i> RDR Tutorial Home
        <br />
        Near Airport, Guwahati
      </p>
      <br />
      <p>
      <i class="fa-solid fa-phone"></i> +91 97067 86103
        <br />
        <i class="fa-solid fa-envelope"></i>
        &nbsp; abhijitmaxxim@gmail.com
      </p>
    </div>
    <div className="right-col">
      <h1 style={{ color: "#fff" }}>Our Newsletter</h1>
      <div className="border" />
      <br />
      <p>Enter Your Email to get our News and updates.</p>
      <form className="newsletter-form">
        <input className="txtb" type="email" placeholder="Enter Your Email" />
        <input className="btn" type="submit" defaultValue="Submit" />
      </form>
    </div>
  </div>
</footer>

  )
}

export default Footer
