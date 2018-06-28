import React from 'react';

import Main from '../components/main';
import Footer from '../components/Footer';

import styles from './index.module.css';

const IndexPage = () => (
  <div className={styles.layoutGrid}>
    <div className={styles.main}>
      <Main/>
    </div>

    <Footer/>
  </div>
);

export default IndexPage
