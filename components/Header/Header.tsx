import { FC } from 'react';
import styles from './Header.module.css';

import { useRouter } from 'next/router';
import Image from 'next/image';

import Link from 'next/link';

const Header: FC = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.logo}>Ansh</span>

        <span className={styles.role}>web developer</span>
      </div>
      <div className={styles.right}>
        <div>
          <nav>
            {router.pathname === '/' ? (
              <div className={styles.social_links}>
                <span>
                  <Image
                    height={35}
                    width={35}
                    src="/imgs/fb.png"
                    alt="facebook"
                  />
                </span>
                <span>
                  <Image
                    height={35}
                    width={35}
                    src="/imgs/linkedin.png"
                    alt="linkedin"
                  />
                </span>
                <span>
                  <Image
                    height={35}
                    width={35}
                    src="/imgs/github.png"
                    alt="github"
                  />
                </span>
              </div>
            ) : (
              <ul className={styles.nav_links}>
                <li>
                  <a target="_blank" href="/Ansh's_Resume.pdf">
                    download cv
                  </a>
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
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
