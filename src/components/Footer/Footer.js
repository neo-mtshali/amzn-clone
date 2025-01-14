import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Amazon and Our Planet</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Press Releases</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#">Sell on Amazon</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Self-Publish with Us</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#">Amazon Rewards Visa Signature Cards</a></li>
            <li><a href="#">Amazon.com Store Card</a></li>
            <li><a href="#">Amazon Business Card</a></li>
            <li><a href="#">Shop with Points</a></li>
          </ul>
        </div>

        <div className="footer__section">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Your Orders</a></li>
            <li><a href="#">Shipping Rates & Policies</a></li>
            <li><a href="#">Returns & Replacements</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <img
          className="footer__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
        <span className="footer__copyright">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </span>
      </div>
    </div>
  );
}

export default Footer;