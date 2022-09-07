import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <>
      <Head>

      </Head>

      <>
    {/*    <div className="preloader">
          <img
              className="preloader__image"
              width={60}
              src="assets/images/loader.png"
              alt=""
          />
        </div>*/}
        <div className="page-wrapper">
          <header className="main-header clearfix">
            <div className="main-header__logo">
              <a href="index.html">
                <img src="assets/images/resources/logo-1.png" alt="" />
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="main-menu-wrapper__top">
                <div className="main-menu-wrapper__top-inner">
                  <div className="main-menu-wrapper__left">
                    <div className="main-menu-wrapper__left-content">
                      <div className="main-menu-wrapper__left-text">
                        <p>Welcome to the Charity &amp; Donation Theme</p>
                      </div>
                      <div className="main-menu-wrapper__left-email-box">
                        <div className="icon">
                          <i className="fas fa-envelope" />
                        </div>
                        <div className="email">
                          <a href="mailto:needhelp@company.com">
                            needhelp@company.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-menu-wrapper__right">
                    <div className="main-menu-wrapper__right-social">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-square" />
                      </a>
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-menu-wrapper__bottom">
                <nav className="main-menu">
                  <div className="main-menu__inner">
                    <a href="#" className="mobile-nav__toggler">
                      <i className="fa fa-bars" />
                    </a>
                    <ul className="main-menu__list">
                      <li className="dropdown current">
                        <a href="index.html">Home</a>
                        <ul>
                          <li>
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index3.html">Home Three</a>
                          </li>
                          <li className="dropdown">
                            <a href="#">Header Styles</a>
                            <ul>
                              <li>
                                <a href="index.html">Header One</a>
                              </li>
                              <li>
                                <a href="index.html">Header Two</a>
                              </li>
                              <li>
                                <a href="index.html">Header Three</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Pages</a>
                        <ul>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="volunteers.html">Volunteers</a>
                          </li>
                          <li>
                            <a href="gallery.html">Gallery</a>
                          </li>
                          <li>
                            <a href="become-volunteer.html">Become a Volunteer</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Donations</a>
                        <ul>
                          <li>
                            <a href="causes.html">Causes</a>
                          </li>
                          <li>
                            <a href="causes-details.html">Causes Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Events</a>
                        <ul>
                          <li>
                            <a href="events.html">Events</a>
                          </li>
                          <li>
                            <a href="event-details.html">Event Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">News</a>
                        <ul>
                          <li>
                            <a href="news.html">News</a>
                          </li>
                          <li>
                            <a href="news-details.html">News Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                    <div className="main-menu__right">
                      <a
                          href="#"
                          className="main-menu__search search-toggler icon-magnifying-glass"
                      />
                      <a href="#" className="main-menu__cart icon-shopping-cart  " />
                      <div className="main-menu__phone-contact">
                        <div className="main-menu__phone-icon">
                          <span className="icon-chat" />
                        </div>
                        <div className="main-menu__phone-number">
                          <p>Call Anytime</p>
                          <a href="tel:92 666 888 0000">92 666 888 0000</a>
                        </div>
                      </div>
                      <a href="causes-details.html" className="main-menu__donate-btn">
                        <i className="fa fa-heart" />
                        Donate
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          <div className="stricky-header stricked-menu main-menu">
            <div className="sticky-header__content" />
          </div>
          <section className="main-slider">
            <div
                className="swiper-container thm-swiper__slider"
                data-swiper-options='{"slidesPerView": 1, "loop": true,
    "effect": "fade",
     "pagination": {
  "el": "#main-slider-pagination",
  "type": "bullets",
  "clickable": true
},
    "navigation": {
  "nextEl": "#main-slider__swiper-button-next",
  "prevEl": "#main-slider__swiper-button-prev"
    },
    "autoplay": {
  "delay": 5000
    }}'
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                      className="image-layer"
                      style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/main-slider-1-1.jpg)"
                      }}
                  ></div>
                  <div className="image-layer-overlay" />
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="main-slider__content">
                          <p>Helping Them Today</p>
                          <h2>
                            Help the Poor <br /> in Need
                          </h2>
                          <a href="#" className="thm-btn">
                            <i className="fas fa-arrow-circle-right" />
                            Learn More
                          </a>
                          <div className="main-slider__shape-1 zoom-fade">
                            <img
                                src="assets/images/shapes/main-slider-1-shape-1.png"
                                alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                      className="image-layer"
                      style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/main-slider-2-1.jpg)"
                      }}
                  ></div>
                  <div className="image-layer-overlay" />
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="main-slider__content">
                          <p>Helping Them Today</p>
                          <h2>
                            Help the Poor <br /> in Need
                          </h2>
                          <a href="#" className="thm-btn">
                            <i className="fas fa-arrow-circle-right" />
                            Learn More
                          </a>
                          <div className="main-slider__shape-1 zoom-fade">
                            <img
                                src="assets/images/shapes/main-slider-1-shape-1.png"
                                alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                      className="image-layer"
                      style={{
                        backgroundImage:
                            "url(assets/images/backgrounds/main-slider-3-1.jpg)"
                      }}
                  ></div>
                  <div className="image-layer-overlay" />
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="main-slider__content">
                          <p>Helping Them Today</p>
                          <h2>
                            Help the Poor <br /> in Need
                          </h2>
                          <a href="#" className="thm-btn">
                            <i className="fas fa-arrow-circle-right" />
                            Learn More
                          </a>
                          <div className="main-slider__shape-1 zoom-fade">
                            <img
                                src="assets/images/shapes/main-slider-1-shape-1.png"
                                alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-slider__counter">
                <ul className="main-slider__counter-box list-unstyled">
                  <li>
                    <h3 className="main-sldier__counter-digit">4390</h3>
                    <span className="main-slider__counter-text">
                Volunteers are Available
              </span>
                  </li>
                  <li>
                    <h3 className="main-sldier__counter-digit">8900</h3>
                    <span className="main-slider__counter-text">
                Funds Raised by People
              </span>
                  </li>
                </ul>
              </div>
              {/* If we need navigation buttons */}
              <div className="swiper-pagination" id="main-slider-pagination" />
              <div className="main-slider__nav">
                <div
                    className="swiper-button-prev"
                    id="main-slider__swiper-button-next"
                >
                  <i className="icon-right-arrow icon-left-arrow" />
                </div>
                <div
                    className="swiper-button-next"
                    id="main-slider__swiper-button-prev"
                >
                  <i className="icon-right-arrow" />
                </div>
              </div>
            </div>
          </section>
          {/*Welcome One Start*/}
          <section className="welcome-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="welcome-one__left">
                    <div className="welcome-one__img-box">
                      <img
                          src="assets/images/resources/welcome-one-img-1.jpg"
                          alt=""
                      />
                      <div className="welcome-one__img-box-2">
                        <img
                            src="assets/images/resources/welcome-one-img-2.jpg"
                            alt=""
                        />
                      </div>
                      <h2 className="welcome-one__bottom-text">Helping Today</h2>
                      <div className="welcome-one__heart-icon">
                        <img
                            src="assets/images/resources/welcome-one-heart-icon.png"
                            alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="welcome-one__right">
                    <div className="section-title text-left">
                <span className="section-title__tagline">
                  Welcome to Charity
                </span>
                      <h2 className="section-title__title">
                        Helping each other can make world better
                      </h2>
                    </div>
                    <p className="welcome-one__right-text">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                      sed do eiusmod tempor incididunt ut labore et simply free text
                      dolore magna aliqua lonm andhn.
                    </p>
                    <div className="welcome-one__our-mission-and-story">
                      <div className="welcome-one__mission-and-story-single">
                        <h3>
                          <i className="fas fa-arrow-circle-right" />
                          Our Mission
                        </h3>
                        <p className="welcome-one__our-mission-and-story-text">
                          Lorem ipsum dolor sit amet not is consectetur notted.
                        </p>
                      </div>
                      <div className="welcome-one__mission-and-story-single">
                        <h3>
                          <i className="fas fa-arrow-circle-right" />
                          Our Story
                        </h3>
                        <p className="welcome-one__our-mission-and-story-text">
                          Lorem ipsum dolor sit amet not is consectetur notted.
                        </p>
                      </div>
                    </div>
                    <div className="welcome-one__progress">
                      <div className="welcome-one__progress-single">
                        <h4 className="welcome-one__progress-title">Charity</h4>
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="83%">
                            <div className="count-text">83%</div>
                          </div>
                        </div>
                      </div>
                      <div className="welcome-one__progress-single">
                        <h4 className="welcome-one__progress-title">Donations</h4>
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="38%">
                            <div className="count-text">38%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="welcome-one__btn thm-btn">
                      <i className="fas fa-arrow-circle-right" />
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Welcome One End*/}
          {/*Causes One Start*/}
          <section className="causes-one">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">Latest Causes</span>
                <h2 className="section-title__title">
                  Find the popular cause <br /> and donate them
                </h2>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <div className="causes-one__carousel owl-theme owl-carousel">
                    <div
                        className="causes-one__single wow fadeInLeft"
                        data-wow-duration="1500ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-1.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            Raise Fund for Clean &amp; Healthy Water
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                        className="causes-one__single wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="100ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-2.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            School Counseling for Children
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                        className="causes-one__single wow fadeInRight"
                        data-wow-duration="1500ms"
                        data-wow-delay="200ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-3.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            Fundrising for Early Childhood Rise
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                        className="causes-one__single wow fadeInLeft"
                        data-wow-duration="1500ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-1.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            Promoting The Rights of Children
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                        className="causes-one__single wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="100ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-2.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            Education for Poor Children
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                        className="causes-one__single wow fadeInRight"
                        data-wow-duration="1500ms"
                        data-wow-delay="200ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-3.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            Raise Fund for Clean &amp; Healthy Water
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                        className="causes-one__single wow fadeInLeft"
                        data-wow-duration="1500ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-1.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            Raise Fund for Clean &amp; Healthy Water
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                        className="causes-one__single wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="100ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-2.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            Raise Fund for Clean &amp; Healthy Water
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                        className="causes-one__single fadeInRight"
                        data-wow-duration="1500ms"
                        data-wow-delay="200ms"
                    >
                      <div className="causes-one__img">
                        <div className="causes-one__img-box">
                          <img
                              src="assets/images/resources/causes-one-img-3.jpg"
                              alt=""
                          />
                          <a href="#">
                            <i className="fa fa-plus" />
                          </a>
                        </div>
                        <div className="causes-one__category">
                          <span>Medical</span>
                        </div>
                      </div>
                      <div className="causes-one__content">
                        <h3 className="causes-one__title">
                          <a href="causes-details.html">
                            Raise Fund for Clean &amp; Healthy Water
                          </a>
                        </h3>
                        <p className="causes-one__text">
                          There are not many of passages of lorem ipsum avail isn
                          alteration donationa in form simply free.
                        </p>
                      </div>
                      <div className="causes-one__progress">
                        <div className="bar">
                          <div className="bar-inner count-bar" data-percent="36%">
                            <div className="count-text">36%</div>
                          </div>
                        </div>
                        <div className="causes-one__goals">
                          <p>
                            <span>$25,270</span> Raised
                          </p>
                          <p>
                            <span>$30,000</span> Goal
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Causes One End*/}
          {/*Join One Start*/}
          <section className="join-one">
            <div
                className="join-one-bg jarallax"
                data-jarallax=""
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{
                  backgroundImage: "url(assets/images/backgrounds/join-one-bg.jpg)"
                }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="join-one__inner">
                    <h2 className="join-one__title">
                      Join the community to give <br /> education for children
                    </h2>
                    <a href="#" className="join-one__btn thm-btn">
                      <i className="fas fa-arrow-circle-right" />
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Join One End*/}
          {/*Three Boxes Start*/}
          <section className="three-boxes">
            <div className="container-box">
              <div className="row">
                <div className="col-xl-4">
                  {/*Three Boxes Single*/}
                  <div className="three-boxes__single">
                    <div
                        className="three-boxes__single-bg"
                        style={{
                          backgroundImage:
                              "url(assets/images/resources/three-boxes-img-1.jpg)"
                        }}
                    />
                    <div className="three-boxes__content">
                      <div className="three-boxes__icon">
                        <span className="icon-fast-food" />
                      </div>
                      <div className="three-boxes__text-box">
                        <h2>Healthy Food</h2>
                        <p className="three-boxes__text">
                          Lorem ipsum is simply free text available amet, consectetuer
                          adipiscing elit. There are not many passages of ipsum.
                        </p>
                        <a href="#" className="three-boxes__btn">
                          <i className="fa fa-heart" />
                          Donate{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  {/*Three Boxes Single*/}
                  <div className="three-boxes__single three-boxes__single-item-two">
                    <div
                        className="three-boxes__single-bg"
                        style={{
                          backgroundImage:
                              "url(assets/images/resources/three-boxes-img-1.jpg)"
                        }}
                    />
                    <div className="three-boxes__content">
                      <div className="three-boxes__icon">
                        <span className="icon-water" />
                      </div>
                      <div className="three-boxes__text-box">
                        <h2>Clean Water</h2>
                        <p className="three-boxes__text">
                          Lorem ipsum is simply free text available amet, consectetuer
                          adipiscing elit. There are not many passages of ipsum.
                        </p>
                        <a href="#" className="three-boxes__btn">
                          <i className="fa fa-heart" />
                          Donate{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  {/*Three Boxes Single*/}
                  <div className="three-boxes__single three-boxes__single-item-three">
                    <div
                        className="three-boxes__single-bg"
                        style={{
                          backgroundImage:
                              "url(assets/images/resources/three-boxes-img-1.jpg)"
                        }}
                    />
                    <div className="three-boxes__content">
                      <div className="three-boxes__icon">
                        <span className="icon-health-check" />
                      </div>
                      <div className="three-boxes__text-box">
                        <h2>Medical Treatment</h2>
                        <p className="three-boxes__text">
                          Lorem ipsum is simply free text available amet, consectetuer
                          adipiscing elit. There are not many passages of ipsum.
                        </p>
                        <a href="#" className="three-boxes__btn">
                          <i className="fa fa-heart" />
                          Donate{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Three Boxes End*/}
          {/*Helping One Start*/}
          <section className="helping-one">
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">Latest Causes</span>
                <h2 className="section-title__title">
                  Find the popular cause <br /> and donate them
                </h2>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="helping-one__left">
                    <h3 className="helping-one__title">
                      We’re Helping Today. Helping Tommorow
                    </h3>
                    <p className="helping-one__text">
                      There are many variations of passages of available but the
                      majority have suffered alteration in some form, by injected
                      humou or randomised words even slightly believable. All the
                      Lorem Ipsum generators on the Internet tend.
                    </p>
                    <ul className="helping-one__left-list list-unstyled">
                      <li>
                        <div className="helping-one__left-icon">
                          <i className="fas fa-arrow-circle-right" />
                        </div>
                        <div className="helping-one__left-text">
                          <p>Making this the first true generator on the Internet</p>
                        </div>
                      </li>
                      <li>
                        <div className="helping-one__left-icon">
                          <i className="fas fa-arrow-circle-right" />
                        </div>
                        <div className="helping-one__left-text">
                          <p>Lorem Ipsum is not simply random text</p>
                        </div>
                      </li>
                      <li>
                        <div className="helping-one__left-icon">
                          <i className="fas fa-arrow-circle-right" />
                        </div>
                        <div className="helping-one__left-text">
                          <p>If you are going to use a passage</p>
                        </div>
                      </li>
                    </ul>
                    <div className="helping-one__left-img">
                      <img
                          src="assets/images/resources/helping-one-left-img.jpg"
                          alt=""
                      />
                      <div className="helping-one__left-icon-box">
                        <span className="icon-heart" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="helping-one__right">
                    <form action="" className="helping-one__right-form">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="helping-one__right-input-box">
                            <input
                                type="text"
                                name="amount"
                                placeholder="Enter Donation Amount"
                            />
                            <div className="helping-one__right-dolar-icon">
                              <span>$</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <input type="text" name="name" placeholder="Your Name" />
                        </div>
                        <div className="col-lg-6">
                          <input
                              type="email"
                              name="email"
                              placeholder="Email Address"
                          />
                        </div>
                        <div className="col-lg-12">
                          <input
                              type="text"
                              name="phone"
                              placeholder="Phone Number"
                          />
                        </div>
                        <div className="col-lg-12">
                    <textarea
                        name="message"
                        placeholder="Write Message"
                        defaultValue={""}
                    />
                        </div>
                        <div className="col-lg-12">
                          <button
                              type="submit"
                              className="thm-btn helping-one__right-btn"
                          >
                            <i className="fas fa-arrow-circle-right" />
                            Continue Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Helping One End*/}
          {/*Gallery One Start*/}
          <section className="gallery-one">
            <div className="gallery-one__container-box clearfix">
              <div className="gallery-one__carousel owl-theme owl-carousel">
                {/*Gallery One Single*/}
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <img src="assets/images/gallery/gallery-1-1.jpg" alt="" />
                    <div className="gallery-one__hover-content-box">
                      <h2>Child Education</h2>
                      <p>Charity</p>
                    </div>
                  </div>
                </div>
                {/*Gallery One Single*/}
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <img src="assets/images/gallery/gallery-1-2.jpg" alt="" />
                    <div className="gallery-one__hover-content-box">
                      <h2>Child Education</h2>
                      <p>Charity</p>
                    </div>
                  </div>
                </div>
                {/*Gallery One Single*/}
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <img src="assets/images/gallery/gallery-1-3.jpg" alt="" />
                    <div className="gallery-one__hover-content-box">
                      <h2>Child Education</h2>
                      <p>Charity</p>
                    </div>
                  </div>
                </div>
                {/*Gallery One Single*/}
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <img src="assets/images/gallery/gallery-1-4.jpg" alt="" />
                    <div className="gallery-one__hover-content-box">
                      <h2>Child Education</h2>
                      <p>Charity</p>
                    </div>
                  </div>
                </div>
                {/*Gallery One Single*/}
                <div className="gallery-one__single">
                  <div className="gallery-one__img-box">
                    <img src="assets/images/gallery/gallery-1-5.jpg" alt="" />
                    <div className="gallery-one__hover-content-box">
                      <h2>Child Education</h2>
                      <p>Charity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Gallery One End*/}
          {/*Testimonial One Start*/}
          <section className="testimonial-one">
            <div
                className="testimonial-one-bg"
                style={{
                  backgroundImage: "url(assets/images/backgrounds/testimonial-1-bg.jpg)"
                }}
            />
            <div className="container">
              <div className="row">
                <div className="col-xl-4">
                  <div className="testimonial-one__left">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">Our Testimonials</span>
                      <h2 className="section-title__title">
                        What they’re talking about charity
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="testimonial-one__right">
                    <div className="testimonial-one__carousel owl-theme owl-carousel">
                      {/*Testimonial One Single*/}
                      <div className="testimonial-one__single">
                        <p className="testimonial-one__text">
                          Lorem ipsum is simply free text dolor sit amet, consectetur
                          notted adipisicing elit sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img
                                src="assets/images/testimonial/testimonial-1-img-1.png"
                                alt=""
                            />
                            <div className="testimonial-one__quote"></div>
                          </div>
                          <div className="testimonial-one__client-name">
                            <h3>Kevin Martin</h3>
                            <p>Volunteer</p>
                          </div>
                        </div>
                      </div>
                      {/*Testimonial One Single*/}
                      <div className="testimonial-one__single">
                        <p className="testimonial-one__text">
                          Lorem ipsum is simply free text dolor sit amet, consectetur
                          notted adipisicing elit sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img
                                src="assets/images/testimonial/testimonial-1-img-2.png"
                                alt=""
                            />
                            <div className="testimonial-one__quote"></div>
                          </div>
                          <div className="testimonial-one__client-name">
                            <h3>Jessica Brown</h3>
                            <p>Volunteer</p>
                          </div>
                        </div>
                      </div>
                      {/*Testimonial One Single*/}
                      <div className="testimonial-one__single">
                        <p className="testimonial-one__text">
                          Lorem ipsum is simply free text dolor sit amet, consectetur
                          notted adipisicing elit sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img
                                src="assets/images/testimonial/testimonial-1-img-1.png"
                                alt=""
                            />
                            <div className="testimonial-one__quote"></div>
                          </div>
                          <div className="testimonial-one__client-name">
                            <h3>Jessica Brown</h3>
                            <p>Volunteer</p>
                          </div>
                        </div>
                      </div>
                      {/*Testimonial One Single*/}
                      <div className="testimonial-one__single">
                        <p className="testimonial-one__text">
                          Lorem ipsum is simply free text dolor sit amet, consectetur
                          notted adipisicing elit sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.
                        </p>
                        <div className="testimonial-one__client-info">
                          <div className="testimonial-one__client-img">
                            <img
                                src="assets/images/testimonial/testimonial-1-img-2.png"
                                alt=""
                            />
                            <div className="testimonial-one__quote"></div>
                          </div>
                          <div className="testimonial-one__client-name">
                            <h3>Kevin Martin</h3>
                            <p>Volunteer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Testimonial One End*/}
          {/*Help Them Start*/}
          <section className="help-them">
            <div
                className="help-them-bg jarallax"
                data-jarallax=""
                data-speed="0.2"
                data-imgposition="50% 0%"
                style={{
                  backgroundImage: "url(assets/images/backgrounds/help-them-bg.jpg)"
                }}
            />
            <div className="container">
              <div className="help-them__top">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="help-them__top-content">
                      <h2 className="help-them__top-content-title">
                        Help them whenever they are in need
                      </h2>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="help-them__top-video-box">
                      <a
                          href="https://www.youtube.com/watch?v=i9E_Blai8vk"
                          className="help-them__top-video-btn video-popup"
                      >
                        <i className="fa fa-play" />
                      </a>
                      <p className="help-them__top-video-text">Watch the Video</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="help-them__bottom">
                <div className="row">
                  <div className="col-xl-4 col-lg-4">
                    {/*Help Them Single*/}
                    <div className="help-them__single">
                      <div className="help-them__icon">
                        <span className="icon-charity" />
                      </div>
                      <div className="help-them__text">
                        <h3>Become a Volunteer</h3>
                        <p>
                          There are many variations of but the majority have simply
                          free text suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    {/*Help Them Single*/}
                    <div className="help-them__single">
                      <div className="help-them__icon">
                        <span className="icon-generous" />
                      </div>
                      <div className="help-them__text">
                        <h3>Quick Fundraising</h3>
                        <p>
                          There are many variations of but the majority have simply
                          free text suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    {/*Help Them Single*/}
                    <div className="help-them__single">
                      <div className="help-them__icon">
                        <span className="icon-fundraiser" />
                      </div>
                      <div className="help-them__text">
                        <h3>Start Donating</h3>
                        <p>
                          There are many variations of but the majority have simply
                          free text suffered.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Help Them End*/}
          <section className="news-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8">
                  <div className="section-title text-left">
                    <span className="section-title__tagline">Get Daily Updates</span>
                    <h2 className="section-title__title">
                      Latest news &amp; articles directly <br /> coming from the blog
                    </h2>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="news-one__button-box">
                    <a href="#" className="news-one__btn thm-btn">
                      <i className="fas fa-arrow-circle-right" />
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="news-one__left">
                    <div className="news-one__img">
                      <img src="assets/images/blog/news-one-img-1.jpg" alt="" />
                      <a href="news-details.html">
                        <i className="fa fa-plus" />
                      </a>
                    </div>
                    <div className="news-one__bottom">
                      <ul className="list-unstyled news-one__meta">
                        <li>20 Jan, 2021</li>
                        <li>
                          <span>/</span>
                        </li>
                        <li>
                          <a href="#">2 Comments</a>
                        </li>
                      </ul>
                      <h3 className="news-one__title">
                        <a href="news-details.html">
                          Donation is Hope for Poor Childrens in Africa
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="news-one__right">
                    <div className="news-one__right-single">
                      <div className="news-one__right-img">
                        <img
                            src="assets/images/blog/news-one-right-img-1.jpg"
                            alt=""
                        />
                        <a href="news-details.html">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                      <div className="news-one__right-content">
                        <ul className="list-unstyled news-one__right-meta">
                          <li>20 Jan, 2021</li>
                          <li>
                            <span>/</span>
                          </li>
                          <li>
                            <a href="#">2 Comments</a>
                          </li>
                        </ul>
                        <h3 className="news-one__right-title">
                          <a href="news-details.html">
                            How Does Malnutrition Affect Children?
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="news-one__right-single">
                      <div className="news-one__right-img">
                        <img
                            src="assets/images/blog/news-one-right-img-2.jpg"
                            alt=""
                        />
                        <a href="news-details.html">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                      <div className="news-one__right-content">
                        <ul className="list-unstyled news-one__right-meta">
                          <li>20 Jan, 2021</li>
                          <li>
                            <span>/</span>
                          </li>
                          <li>
                            <a href="#">2 Comments</a>
                          </li>
                        </ul>
                        <h3 className="news-one__right-title">
                          <a href="news-details.html">
                            Capitalize on low hanging fruit to identify
                          </a>
                        </h3>
                      </div>
                    </div>
                    <div className="news-one__right-single">
                      <div className="news-one__right-img">
                        <img
                            src="assets/images/blog/news-one-right-img-3.jpg"
                            alt=""
                        />
                        <a href="news-details.html">
                          <i className="fa fa-plus" />
                        </a>
                      </div>
                      <div className="news-one__right-content">
                        <ul className="list-unstyled news-one__right-meta">
                          <li>20 Jan, 2021</li>
                          <li>
                            <span>/</span>
                          </li>
                          <li>
                            <a href="#">2 Comments</a>
                          </li>
                        </ul>
                        <h3 className="news-one__right-title">
                          <a href="news-details.html">
                            Override the digital divide with additional
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Brand One Start*/}
          <section className="brand-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="brand-one__carousel owl-theme owl-carousel">
                    {/*Brand One Single*/}
                    <div className="brand-one__single">
                      <div className="brand-one__img">
                        <img src="assets/images/resources/brand-1-1.png" alt="" />
                      </div>
                    </div>
                    {/*Brand One Single*/}
                    <div className="brand-one__single">
                      <div className="brand-one__img">
                        <img src="assets/images/resources/brand-1-2.png" alt="" />
                      </div>
                    </div>
                    {/*Brand One Single*/}
                    <div className="brand-one__single">
                      <div className="brand-one__img">
                        <img src="assets/images/resources/brand-1-3.png" alt="" />
                      </div>
                    </div>
                    {/*Brand One Single*/}
                    <div className="brand-one__single">
                      <div className="brand-one__img">
                        <img src="assets/images/resources/brand-1-4.png" alt="" />
                      </div>
                    </div>
                    {/*Brand One Single*/}
                    <div className="brand-one__single">
                      <div className="brand-one__img">
                        <img src="assets/images/resources/brand-1-5.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Brand One End*/}
          {/*Site Footer One Start*/}
          <footer className="site-footer">
            <div
                className="site-footer-bg"
                style={{
                  backgroundImage: "url(assets/images/backgrounds/footer-bg.jpg)"
                }}
            />
            <div className="container">
              <div className="site-footer__top">
                <div className="row">
                  <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay="100ms"
                  >
                    <div className="footer-widget__column footer-widget__about">
                      <h3 className="footer-widget__title">About</h3>
                      <p className="footer-widget__text">
                        Lorem ipsum dolor sit ame consect etur pisicing elit sed do
                        eiusmod tempor incididunt ut labore.
                      </p>
                      <a href="#" className="footer-widget__about-btn">
                        <i className="fa fa-heart" />
                        Donate{" "}
                      </a>
                    </div>
                  </div>
                  <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay="200ms"
                  >
                    <div className="footer-widget__column footer-widget__explore clearfix">
                      <h3 className="footer-widget__title">Explore</h3>
                      <ul className="footer-widget__explore-list list-unstyled">
                        <li>
                          <a href="#">Donate</a>
                        </li>
                        <li>
                          <a href="#">Campaigns</a>
                        </li>
                        <li>
                          <a href="#">Fundraise</a>
                        </li>
                        <li>
                          <a href="#">Volunteers</a>
                        </li>
                        <li>
                          <a href="#">Sponsors</a>
                        </li>
                      </ul>
                      <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                        <li>
                          <a href="#">Fundraising</a>
                        </li>
                        <li>
                          <a href="#">Contact</a>
                        </li>
                        <li>
                          <a href="#">Help</a>
                        </li>
                        <li>
                          <a href="#">Faqs</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay="300ms"
                  >
                    <div className="footer-widget__column footer-widget__contact">
                      <h3 className="footer-widget__title">Contact</h3>
                      <ul className="list-unstyled footer-widget__contact-list">
                        <li>
                          <div className="icon">
                            <i className="icon-chat" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Call Anytime</span>
                              <a href="tel:92 666 888 0000">92 666 888 0000</a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-message" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Send Email</span>
                              <a href="mailto:needhelp@company.com">
                                needhelp@company.com
                              </a>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="icon-address" />
                          </div>
                          <div className="text">
                            <p>
                              <span>Visit Office</span>80 broklyn golden street
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                      className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
                      data-wow-delay="400ms"
                  >
                    <div className="footer-widget__column footer-widget__newsletter">
                      <h3 className="footer-widget__title">Newsletter</h3>
                      <p className="footer-widget__newsletter-text">
                        Lorem ipsum dolor sit ame consect etur pisicing elit sed do.
                      </p>
                      <form className="footer-widget__newsletter-form">
                        <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                        />
                        <button
                            type="submit"
                            className="footer-widget__newsletter-btn"
                        >
                          <i className="fas fa-arrow-circle-right" />
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="site-footer__bottom">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="site-footer__bottom-inner">
                      <div className="site-footer__bottom-logo-social">
                        <div className="site-footer__bottom-logo">
                          <a href="index.html">
                            <img
                                src="assets/images/resources/footer-logo.jpg"
                                alt=""
                            />
                          </a>
                        </div>
                        <div className="site-footer__bottom-social">
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fab fa-facebook-square" />
                          </a>
                          <a href="#">
                            <i className="fab fa-dribbble" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </div>
                      </div>
                      <div className="site-footer__bottom-copy-right">
                        <p>
                          © Copyright 2021 by <a href="#">Layerdrops.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/*Site Footer One End*/}
        </div>
        {/* /.page-wrapper */}
        <div className="mobile-nav__wrapper">
          <div className="mobile-nav__overlay mobile-nav__toggler" />
          {/* /.mobile-nav__overlay */}
          <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="fa fa-times" />
      </span>
            <div className="logo-box">
              <a href="index.html" aria-label="logo image">
                <img src="assets/images/resources/logo-1.png" width={155} alt="" />
              </a>
            </div>
            {/* /.logo-box */}
            <div className="mobile-nav__container" />
            {/* /.mobile-nav__container */}
            <ul className="mobile-nav__contact list-unstyled">
              <li>
                <i className="fa fa-envelope" />
                <a href="mailto:needhelp@packageName__.com">needhelp@halpes.com</a>
              </li>
              <li>
                <i className="fa fa-phone-alt" />
                <a href="tel:666-888-0000">666 888 0000</a>
              </li>
            </ul>
            {/* /.mobile-nav__contact */}
            <div className="mobile-nav__top">
              <div className="mobile-nav__social">
                <a href="#" className="fab fa-twitter" />
                <a href="#" className="fab fa-facebook-square" />
                <a href="#" className="fab fa-pinterest-p" />
                <a href="#" className="fab fa-instagram" />
              </div>
              {/* /.mobile-nav__social */}
            </div>
            {/* /.mobile-nav__top */}
          </div>
          {/* /.mobile-nav__content */}
        </div>
        {/* /.mobile-nav__wrapper */}
        <div className="search-popup">
          <div className="search-popup__overlay search-toggler" />
          {/* /.search-popup__overlay */}
          <div className="search-popup__content">
            <form action="#">
              <label htmlFor="search" className="sr-only">
                search here
              </label>
              {/* /.sr-only */}
              <input type="text" id="search" placeholder="Search Here..." />
              <button type="submit" aria-label="search submit" className="thm-btn">
                <i className="icon-magnifying-glass" />
              </button>
            </form>
          </div>
          {/* /.search-popup__content */}
        </div>
        {/* /.search-popup */}
        <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
          <i className="fa fa-angle-up" />
        </a>

        <Script  strategy="beforeInteractive"  src="assets/vendors/jquery/jquery-3.5.1.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/owl-carousel/owl.carousel.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/jarallax/jarallax.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/jquery-appear/jquery.appear.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/jquery-validate/jquery.validate.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/nouislider/nouislider.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/odometer/odometer.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/swiper/swiper.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/tiny-slider/tiny-slider.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/wnumb/wNumb.min.js"></Script>
        <Script  strategy="beforeInteractive" src="assets/vendors/wow/wow.js"></Script>
        <Script  strategy="beforeInteractive"  src="assets/vendors/isotope/isotope.js"></Script>
        <Script  strategy="beforeInteractive"  src="assets/vendors/countdown/countdown.min.js"></Script>
        <Script  strategy="afterInteractive" src="assets/js/halpes.js"></Script>
      </>


    </>
  )
}

export default Home
