import styles from '@/styles/AboutPage.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>About</h2>
        <p>
          Skilled in web development using ReactJS . Also actively learning in
          the field of Data Science. I am very passionate about my work and
          eager to work on projects. I love collaborating and meeting with new
          People. When not working you can find me playing badminton or guitar.
        </p>
      </div>
      <div className={styles.right}>
        <img src="/imgs/about.svg" width={500} alt="me" />
      </div>
    </div>
  );
};

export default About;
