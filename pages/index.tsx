import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import styles from '@/styles/HomePage.module.css';
const HomePage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bottom_box}>
        <h1 className={styles.logo}>
          An
          <br />
          sh
        </h1>
      </div>

      <div className={styles.top_box}>
        <div className={styles.social_links}>
          <span>git</span>
          <span>li</span>
          <span>gmail</span>
        </div>

        <div className={styles.profile}>
          <Image
            src="/imgs/profile.png"
            alt="Picture of the author"
            width={250}
            height={500}
          />
        </div>

        <div className={styles.intro}>
          <h2>
            Breathing in the aroma <br /> of creativity
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            impedit accusamus nisi veritatis sequi deserunt vero quae eum harum
            fugiat. Quod est cupiditate cumque amet laudantium, perferendis
            temporibus. Est, dolores?
          </p>
        </div>
      </div>
      <div className={styles.bottom_right_box}>
        <nav>
          <ul className={styles.nav_links}>
            <li>
              <Link href="/projects">
                <a>download cv</a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a>latest work</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
