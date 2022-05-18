import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Projects</h1>
    </div>
  );
};

export default ProjectsPage;
