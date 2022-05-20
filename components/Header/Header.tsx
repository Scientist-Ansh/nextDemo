import { FC } from 'react';
import styles from './Header.module.css';

import { useRouter } from 'next/router';
import Image from 'next/image';

import Link from 'next/link';

const Header: FC = () => {
  const router = useRouter();
  const color = router.pathname === '/projects' ? 'hidden' : 'visible';
  return (
    <div className={styles.container}>
      <div className={styles.left} style={{ visibility: color }}>
        <Link href="/">
          <a>
            <span className={styles.logo}>Ansh</span>

            <span className={styles.role}>web developer</span>
          </a>
        </Link>
      </div>
      <div className={styles.right}>
        <div>
          <nav>
            {router.pathname === '/' ? (
              <div className={styles.social_links}>
                <span>
                  <a
                    href="https://www.linkedin.com/in/ansh-arora-9aaa87153/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      height={35}
                      width={35}
                      src="/imgs/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/Scientist-Ansh"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      height={35}
                      width={35}
                      src="/imgs/github.png"
                      alt="github"
                    />
                  </a>
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
