/**
 * Created by will on 27/06/18.
 */
import React from 'react';

import styles from './WeCanFixIt.module.css';

export default () =>
  <div>
    <h2>We Can Fix it:</h2>
    <p>One Planet Living is a vision of the world where everyone, everywhere can live happy, healthy lives within the limits of our planet, leaving space for wildlife and wilderness.
    </p>
    <p>
      The <a href="https://www.bioregional.com/oneplanetliving/" target="_blank">One Planet Living framework</a> has 10 principles which will guide us:
    </p>
    <ul className={styles.principles}>
      <li>Zero carbon</li>
      <li>Zero waste</li>
      <li>Sustainable transport</li>
      <li>Sustainable materials</li>
      <li>Local and sustainable food</li>
      <li>Sustainable water</li>
      <li>Land and nature</li>
      <li>Culture and heritage</li>
      <li>Equity and local economy</li>
      <li>Health and well being</li>
    </ul>
  </div>