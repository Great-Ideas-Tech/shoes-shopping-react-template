import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import Link from 'next/link';

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 40px
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    $("#search_input_box").hide();
    $("#search").on("click", function () {
      $("#search_input_box").slideToggle();
      $("#search_input").focus();
    });
    $("#close_search").on("click", function () {
      $('#search_input_box').slideUp(500);
    });

    // Clean up jQuery event handlers on component unmount
    return () => {
      $("#search").off("click");
      $("#close_search").off("click");
    };
  }, []);

  return (
    <>
      {/* Start Header Area */}
      <div
        id="undefined-sticky-wrapper"
        className={`sticky-wrapper ${isSticky ? 'is-sticky' : ''}`}
        style={{ height: '80px' }}
      >
        <header
          className={`header_area sticky-header ${isSticky ? 'sticky-header-active' : ''}`}
          style={{
            width: '100%',
            position: isSticky ? 'fixed' : 'relative',
            top: 0,
            transition: 'all 0.3s'
          }}
        >
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light main_box">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <a className="navbar-brand logo_h" href="index.html">
            <img src="assets/img/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item submenu dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/category">
                      Shop Category
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/product_detail">
                      Product Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/checkout">
                      Product Checkout
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/cart">
                      Shopping Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/confirmation">
                      Confirmation
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item submenu dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog">
                      Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/blog-detail">
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item submenu dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <Link className="nav-link" href="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/tracking">
                      Tracking
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/elements">
                      Elements
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <a href="#" className="cart">
                  <span className="ti-bag" />
                </a>
              </li>
              <li className="nav-item">
          <button className="search">
            <span className="lnr lnr-magnifier" id="search" />
          </button>
        </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn" />
              <span
                className="lnr lnr-cross"
                id="close_search"
                title="Close Search"
              />
            </form>
          </div>
        </div>
      </header>
      </div>
      {/* End Header Area */}
    </>
  );
}
