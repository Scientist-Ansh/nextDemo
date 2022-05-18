import { FC } from 'react';
import styles from './Header.module.css';

import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span className={styles.logo}>Ansh</span>

        <span className={styles.role}>web developer</span>
      </div>
      <div className={styles.right}>
        <div>
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
    </div>
  );
};

export default Header;
