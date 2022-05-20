import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { getHomePage } from 'queries/queries';

import styles from '@/styles/HomePage.module.css';
import { motion } from 'framer-motion';

interface HomePageProps {
  data: {
    id: string;
    logo: string;
    heading: string;
    description: {
      html: string;
      text: string;
    };
    image: {
      url: string;
    };
  };
}

const HomePage: NextPage<HomePageProps> = ({ data }) => {
  const { id, logo, heading, description, image } = data;
  return (
    <motion.div
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
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
          <div className={styles.profile}>
            <Image
              src="/imgs/profile.png"
              alt="Picture of the author"
              width={250}
              height={500}
            />
          </div>

          <div className={styles.intro}>
            <h2>{heading}</h2>
            <p>{description.text}</p>
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
                <a href="mailto:ansh1999arora@gmail.com">contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getHomePage();
  console.log(data.data.homePages);
  return {
    props: {
      data: data.data.homePages[0],
    },
  };
};
