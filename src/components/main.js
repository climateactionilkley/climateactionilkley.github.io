/**
 * Created by will on 27/06/18.
 */
import React from 'react';

import header from './imgs/header.jpg';

import Content from './Content';

import styles from './main.module.css';

const Main = () =>
  <div className={styles.container}>
    <img className={styles.header} src={header}/>
    <Content/>

  </div>

  export default Main;