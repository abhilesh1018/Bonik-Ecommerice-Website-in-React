import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Shop US</h1>
            <p>Welcome to Shop US, your one-stop destination for all your shopping needs! At Shop US, we pride ourselves on offering a diverse range of products to cater to every shopper's tastes and preferences. Whether you're searching for the latest fashion trends, tech gadgets, home essentials, or unique gifts, we have it all under one virtual roof.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>VAKA ABHILESH</li>
              <li>Email:ShopUS.help@gmail.com</li>
              <li>Phone:22BCE3815</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
