import React from 'react';

function Category() {
  return (
    <>
      <section className="category">
        <h1 className="heading">adventure idea!</h1>

        <div className="box-container">
          <div className="box">
            <img src="images/category-1.jpg" alt="" />
            <h3>bungee jump</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              id.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src="images/category-2.jpg" alt="" />
            <h3>zip lines</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              id.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src="images/category-3.jpg" alt="" />
            <h3>Canoeing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              id.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>

          <div className="box">
            <img src="images/category-4.jpg" alt="" />
            <h3>kayaking</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
              id.
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
