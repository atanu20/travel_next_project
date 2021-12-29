import React from 'react';

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#shop">shop</a>
            <a href="#packages">packages</a>
            <a href="#reviews">reviews</a>
            <a href="#blogs">blogs</a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href="#">my account</a>
            <a href="#">my order</a>
            <a href="#">my wishlist</a>
            <a href="#">ask questions</a>
            <a href="#">terms of use</a>
            <a href="#">privacy policy</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {' '}
              <i className="fas fa-phone"></i> +123-456-7890{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-phone"></i> +111-222-3333{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-envelope"></i> abc@gmail.com{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fas fa-map"></i> mumbai, india - 400104{' '}
            </a>
          </div>

          <div className="box">
            <h3>follow us</h3>
            <a href="#">
              {' '}
              <i className="fab fa-facebook-f"></i> facebook{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-twitter"></i> twitter{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-instagram"></i> instagram{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-linkedin"></i> linkedin{' '}
            </a>
            <a href="#">
              {' '}
              <i className="fab fa-github"></i> github{' '}
            </a>
          </div>
        </div>

        <div className="credit">
          created by{' '}
          <span>
            {' '}
            <a href="https://github.com/atanu20">atanu20</a>{' '}
          </span>{' '}
          | all rights reserved!
        </div>
      </section>
    </>
  );
};

export default Footer;
