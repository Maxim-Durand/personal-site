'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <Image
            src="/images/me.png"
            alt="Maxime Durand"
            width={200}
            height={200}
            priority
          />
        </Link>
        <header>
          <h2>Maxime Durand</h2>
          <p>
            <a href="mailto:maximedurand.work@gmail.com">maximedurand.work@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About Me</h2>
        <p>
          Hi, I&apos;m Maxime. I currently work as a Site Reliability Engineer (SRE) and
          full-stack developer. I&apos;m passionate about open-source software,
          DevOps practices, and building reliable, scalable systems.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Maxime Durand <Link href="/">maximedurand.work@gmail.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
