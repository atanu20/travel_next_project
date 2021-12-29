import React from 'react';

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="image">
          <img src="images/about-img.jpg" alt="" />
        </div>

        <div className="content">
          <h3>memorable outdoor experiences</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            voluptates corrupti natus necessitatibus beatae voluptatibus,
            deserunt quo soluta minima libero laborum, corporis error esse vitae
            placeat blanditiis reiciendis vel? Minima.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            dicta doloremque placeat porro, ipsam quia at beatae atque odit
            iste?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
