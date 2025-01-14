import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <img
          className="not-found__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
          alt="Amazon Logo"
        />
        <h2>SORRY</h2>
        <p>we couldn't find that page</p>
        <p>
          Try searching or go to{' '}
          <Link to="/" className="not-found__link">
            Amazon's home page
          </Link>
          .
        </p>
        <img
          src="https://m.media-amazon.com/images/G/01/error/en_US/title._TTW_.png"
          alt="Amazon Dog"
        />
        <p>Frank</p>
        <p>
          <a href="#" className="not-found__link">
            Meet the dogs of Amazon
          </a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;