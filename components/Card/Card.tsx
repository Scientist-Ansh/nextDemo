import Image from 'next/image';
import { FC } from 'react';

import styles from './Card.module.css';

interface CardProps {
  description: string;
  image: string;
  shortDescription: string | null;
}
const Card: FC<CardProps> = ({ description, image, shortDescription }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={image} alt="Project" />
      </div>
      {shortDescription ? <h4>{shortDescription}</h4> : null}
      <p>{description}</p>
    </div>
  );
};

export default Card;
