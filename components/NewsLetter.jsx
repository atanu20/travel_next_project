import React from 'react';

const NewsLetter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="content">
          <h1 className="heading">subscirbe now</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            ipsam repellat nostrum esse officiis unde quisquam corporis
            doloremque adipisci similique!
          </p>
          <form action="">
            <input
              type="email"
              name=""
              placeholder="enter your email"
              id=""
              className="email"
            />
            <input type="submit" value="subscirbe" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
