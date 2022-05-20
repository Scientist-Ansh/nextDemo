import type { NextPage } from 'next';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import { getProjects } from 'queries/queries';

import Link from 'next/link';

import styles from '@/styles/ProjectsPage.module.css';
import Project from '@/components/Project/Project';

import { motion } from 'framer-motion';

interface ProjectsPageProps {
  id: string;
  name: string;
  shortDescription: string | null;
  description: {
    html: string;
    text: string;
  };
  image: {
    url: string;
  };
}

const ProjectsPage: NextPage<{ data: ProjectsPageProps[] }> = ({ data }) => {
  return (
    <motion.div
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100vh', opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.ProjectsPage}>
        <Head>
          <title>Projects</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href="/">
          <a>
            <img className={styles.back} alt="back" src="/imgs/back.svg"></img>
          </a>
        </Link>

        <div className={styles.container}>
          {/* <div className={styles.project_links}>
            <p>Project 1</p>
            <p>Project 2</p>
            <p>Project 3</p>
          </div> */}
          <div className={styles.left}>
            <h1 className={styles.heading}>
              Recent <br /> Projects
            </h1>
          </div>
          <div className={styles.right}>
            <div className={styles.image_wrapper}>
              <img src="/imgs/Enthusiastic.gif" alt="projects" />
            </div>
          </div>
        </div>
        {data.map((project) => (
          <Project
            key={project.id}
            name={project.name}
            shortDescription={project.shortDescription}
            description={project.description.text}
            image={project.image.url}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getProjects();
  console.log(data.data.projects);
  return {
    props: {
      data: data.data.projects,
    },
  };
};
