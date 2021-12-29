import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          {' '}
          <i className="fas fa-hiking"></i> travel.{' '}
        </a>

        <nav className="navbar">
          <div id="nav-close" className="fas fa-times"></div>
          {/* <a href="#home">home</a> */}
          <Link href="#home">
            <a>Home</a>
          </Link>
          <Link href="#about">
            <a>About</a>
          </Link>
          <Link href="#shop">
            <a>Shop</a>
          </Link>
          <Link href="#packages">
            <a>Packages</a>
          </Link>
          <Link href="#reviews">
            <a>Reviews</a>
          </Link>
          <Link href="#blogs">
            <a>Blogs</a>
          </Link>
        </nav>

        <div className="icons">
          <div id="menu-btn" className="fas fa-bars"></div>
          <a href="#" className="fas fa-shopping-cart"></a>
          <div id="search-btn" className="fas fa-search"></div>
        </div>
      </header>
      <div className="search-form">
        <div id="close-search" className="fas fa-times"></div>

        <form>
          <input
            type="search"
            name=""
            placeholder="search here..."
            id="search-box"
          />
          <label for="search-box" className="fas fa-search"></label>
        </form>
      </div>
    </>
  );
};

export default Navbar;
