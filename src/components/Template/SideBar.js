import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Ben Klinovsky</h2>
        <p><a href="mailto:bnk989@gmail.com">bnk989@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Ben. I am a Frontend Developer, specializing in React and Vue.
        Graduated from the Open University of Israel
        with a BA in Communication & International Relations.
        Previously, I manged big e-commerce sites in targeting Israel and U.S costumers.
        such as <a href="https://edikted.org">Edikted</a>, and <a href="https://alm.co.il">ALM Appliances</a>,
        based on Magento 2.0 and Shopify respectively.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Ben Klinovsky <Link to="/">BenKlinovsky.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
