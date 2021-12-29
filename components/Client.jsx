import React, { useEffect } from 'react';

const Client = () => {
  useEffect(() => {
    new Swiper('.clients-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }, []);
  return (
    <>
      <section className="clients">
        <div className="swiper clients-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide silde">
              <img src="images/client-logo-1.png" alt="" />
            </div>
            <div className="swiper-slide silde">
              <img src="images/client-logo-2.png" alt="" />
            </div>
            <div className="swiper-slide silde">
              <img src="images/client-logo-3.png" alt="" />
            </div>
            <div className="swiper-slide silde">
              <img src="images/client-logo-4.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
