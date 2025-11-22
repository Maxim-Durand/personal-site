import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import PageWrapper from './components/PageWrapper';

export const metadata: Metadata = {
  description:
    "Maxime Durand is a Site Reliability Engineer (SRE), full-stack developer, and open-source enthusiast.",
};

export default function HomePage() {
  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">Welcome to my website !</Link>
            </h2>
            <p>
              Not the most best website you'll ever see, but could be interesting if you want to know what I do.
            </p>
          </div>
        </header>
        <p>
          {' '}
          Welcome to my website. Please feel free to read more{' '}
          <Link href="/about" style={{ color: 'blue' }}>about me</Link>, or you can check out my{' '}
          <Link href="/resume" style={{ color: 'blue' }}>resume</Link>,{' '}
          <Link href="/projects" style={{ color: 'blue' }}>projects</Link>, view{' '}
          <Link href="/stats" style={{ color: 'blue' }}>site statistics</Link>, or{' '}
          <Link href="/contact" style={{ color: 'blue' }}>contact</Link> me.
        </p>
        <p>
          {' '}
          Source available{' '}
          <a href="https://github.com/Maxim-Durand/personal-site">here</a>.
        </p>
      </article>
    </PageWrapper>
  );
}
