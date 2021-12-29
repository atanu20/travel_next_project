import React, { useEffect } from 'react';

const Review = () => {
  useEffect(() => {
    new Swiper('.review-slider', {
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
      },
    });
  }, []);

  return (
    <>
      <section className="reviews" id="reviews">
        <h1 className="heading">client's reviews</h1>

        <div className="swiper review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quidem laborum pariatur alias, culpa illum quaerat, aliquid
                laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab
                delectus dolorum ut recusandae ipsam?
              </p>
              <div className="user">
                <img src="images/pic-1.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quidem laborum pariatur alias, culpa illum quaerat, aliquid
                laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab
                delectus dolorum ut recusandae ipsam?
              </p>
              <div className="user">
                <img src="images/pic-2.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quidem laborum pariatur alias, culpa illum quaerat, aliquid
                laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab
                delectus dolorum ut recusandae ipsam?
              </p>
              <div className="user">
                <img src="images/pic-3.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quidem laborum pariatur alias, culpa illum quaerat, aliquid
                laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab
                delectus dolorum ut recusandae ipsam?
              </p>
              <div className="user">
                <img src="images/pic-4.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quidem laborum pariatur alias, culpa illum quaerat, aliquid
                laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab
                delectus dolorum ut recusandae ipsam?
              </p>
              <div className="user">
                <img src="images/pic-5.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                quidem laborum pariatur alias, culpa illum quaerat, aliquid
                laboriosam voluptatem nisi repellat obcaecati, adipisci esse ab
                delectus dolorum ut recusandae ipsam?
              </p>
              <div className="user">
                <img src="images/pic-6.png" alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <span>designer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
