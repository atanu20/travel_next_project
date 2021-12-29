import React, { useEffect } from 'react';

const Shop = () => {
  useEffect(() => {
    new Swiper('.product-slider', {
      loop: true,
      grabCursor: true,
      spaceBetween: 20,
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
      <section className="shop" id="shop">
        <h1 className="heading">featured products</h1>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="image">
                <img src="images/product-1.jpg" alt="" />
                <div className="icons">
                  <a href="#" className="fas fa-shopping-cart"></a>
                  <a href="#" className="fas fa-eye"></a>
                  <a href="#" className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h3>survival kits</h3>
                <div className="price"> $5.00 - $25.00 </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src="images/product-2.jpg" alt="" />
                <div className="icons">
                  <a href="#" className="fas fa-shopping-cart"></a>
                  <a href="#" className="fas fa-eye"></a>
                  <a href="#" className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h3>survival kits</h3>
                <div className="price"> $5.00 - $25.00 </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src="images/product-3.JPG" alt="" />
                <div className="icons">
                  <a href="#" className="fas fa-shopping-cart"></a>
                  <a href="#" className="fas fa-eye"></a>
                  <a href="#" className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h3>survival kits</h3>
                <div className="price"> $5.00 - $25.00 </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src="images/product-4.JPG" alt="" />
                <div className="icons">
                  <a href="#" className="fas fa-shopping-cart"></a>
                  <a href="#" className="fas fa-eye"></a>
                  <a href="#" className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h3>survival kits</h3>
                <div className="price"> $5.00 - $25.00 </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src="images/product-5.jpg" alt="" />
                <div className="icons">
                  <a href="#" className="fas fa-shopping-cart"></a>
                  <a href="#" className="fas fa-eye"></a>
                  <a href="#" className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h3>survival kits</h3>
                <div className="price"> $5.00 - $25.00 </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src="images/product-6.jpg" alt="" />
                <div className="icons">
                  <a href="#" className="fas fa-shopping-cart"></a>
                  <a href="#" className="fas fa-eye"></a>
                  <a href="#" className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h3>survival kits</h3>
                <div className="price"> $5.00 - $25.00 </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </section>
    </>
  );
};

export default Shop;
