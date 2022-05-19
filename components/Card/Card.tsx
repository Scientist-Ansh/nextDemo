import Image from 'next/image';
import { FC } from 'react';

import styles from './Card.module.css';

interface CardProps {
  description: string;
  image: string;
}
const Card: FC<CardProps> = ({ description, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={image} alt="Project" />
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
