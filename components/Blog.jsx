import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    new Swiper('.blogs-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 10,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });
  }, []);
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading"> our daily posts </h1>

        <div className="swiper blogs-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <img src="images/img-1.jpg" alt="" />
              <div className="icons">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar"></i> 21st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user"></i> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>

            <div className="swiper-slide slide">
              <img src="images/img-2.jpg" alt="" />
              <div className="icons">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar"></i> 21st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user"></i> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>

            <div className="swiper-slide slide">
              <img src="images/img-3.jpg" alt="" />
              <div className="icons">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar"></i> 21st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user"></i> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>

            <div className="swiper-slide slide">
              <img src="images/img-4.jpg" alt="" />
              <div className="icons">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar"></i> 21st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user"></i> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>

            <div className="swiper-slide slide">
              <img src="images/img-5.jpg" alt="" />
              <div className="icons">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar"></i> 21st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user"></i> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>

            <div className="swiper-slide slide">
              <img src="images/img-6.jpg" alt="" />
              <div className="icons">
                <a href="#">
                  {' '}
                  <i className="fas fa-calendar"></i> 21st may, 2021{' '}
                </a>
                <a href="#">
                  {' '}
                  <i className="fas fa-user"></i> by admin{' '}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, deserunt.
              </p>
              <a href="#" className="btn">
                read more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
