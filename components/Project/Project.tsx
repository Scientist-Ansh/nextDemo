import styles from './Project.module.css';
import Image from 'next/image';

import { FC } from 'react';
import Card from '../Card/Card';

interface ProjectProps {
  image: string;
  name: string;
  description: string;
  shortDescription: string | null;
}

const Project: FC<ProjectProps> = ({
  image,
  name,
  description,
  shortDescription,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>{name}</h1>
      </div>
      <div className={styles.right}>
        <Card
          image={image}
          description={description}
          shortDescription={shortDescription}
        />
      </div>
    </section>
  );
};

export default Project;
