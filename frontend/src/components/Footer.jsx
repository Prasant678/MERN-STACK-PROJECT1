import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>EVENT</h1>
          <p>Events and weddings</p>
        </div>
        <div className="tag">
          <label>News Latter</label>
          <div>
            <input type="text" placeholder='Email' />
            <button>SUBSCRIBE</button>
          </div>
          <p>Sign up with your email address to recieve updates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
