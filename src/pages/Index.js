import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ben Klinovsky's personal website. Israel based full-stack Developer, "
    + 'Focus on e-commerce themes and apps development. Specializing in React, Vue & Shopify liquid.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About me and this site</Link></h2>
          <p>
            I made this site to show case both myself and the work I do.
            please browse the site - you can find all my projects and works I&apos;ve done.
          </p>
        </div>
      </header>
      <p>Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <div className="cta-btns">
        <button type="button" className="cta-btn">
          <Link to="/resume">Get My Resume</Link>
        </button>
        <button type="button" className="cta-btn">
          <Link to="/projects">View My projects</Link>
        </button>

      </div>
    </article>
  </Main>
);

export default Index;
