import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Maxime Durand's personal website."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome to my website !</Link></h2>
          <p>
            Not the most best website you&apos;ll ever see, but could be interesting if you want to know what I do.
          </p>
        </div>
      </header>
      <p> Welcome to my website !
        Please feel free to read more <Link to="/about" style={{ color: 'blue' }}>about me</Link>,
        or you can check out my {' '}
        <Link to="/resume" style={{ color: 'blue' }}>resume</Link>, {' '}
        <Link to="/projects" style={{ color: 'blue' }}>projects</Link>, {' '}
        view <Link to="/stats" style={{ color: 'blue' }}>site statistics</Link>, {' '}
        or <Link to="/contact" style={{ color: 'blue' }}>contact</Link> me.
      </p>
      <p> Source available <a href="https://github.com/Maxim-Durand/personal-site" style={{ color: 'blue' }}>here</a>.</p>
    </article>
  </Main>
);

export default Index;
