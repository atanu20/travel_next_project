import React, { useEffect } from 'react';

const HomeSlider = () => {
  const sty1 = {
    background: 'url(images/home-bg-1.jpg) no-repeat',
  };
  const sty2 = {
    background: 'url(images/home-bg-2.jpg) no-repeat',
  };
  const sty3 = {
    background: 'url(images/home-bg-3.jpg) no-repeat',
  };

  useEffect(() => {
    new Swiper('.home-slider', {
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);
  return (
    <>
      <section className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="box" style={sty1}>
                <div className="content">
                  <span>never stop</span>
                  <h3>exploring</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit unde ex molestias soluta consequatur saepe aliquam,
                    excepturi delectus consequuntur minus!
                  </p>
                  <a href="#" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box second" style={sty2}>
                <div className="content">
                  <span>make tour</span>
                  <h3>amazing</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit unde ex molestias soluta consequatur saepe aliquam,
                    excepturi delectus consequuntur minus!
                  </p>
                  <a href="#" className="btn">
                    get started
                  </a>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="box" style={sty3}>
                <div className="content">
                  <span>explore the</span>
                  <h3>new world</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit unde ex molestias soluta consequatur saepe aliquam,
                    excepturi delectus consequuntur minus!
                  </p>
                  <a href="#" className="btn">
                    get started
                  </a>
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

export default HomeSlider;
