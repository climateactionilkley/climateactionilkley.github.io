/**
 * Created by will on 27/06/18.
 */
import React from 'react';

import TheFivePoints from './TheFivePoints';

import styles from './ClimateActionIlkley.module.css';



const ClimateActionIlkley = () =>
  <div className={styles.container}>
    <h1>Climate Action Ilkley</h1>
    <p>
      … is a newly formed community campaign group. We can take action together to tackle climate change and make a just transition to become a sustainable zero carbon community.
    </p>
    <p>
      Working together with the  community of Ilkley we can develop proposals leading to the implementation of detailed initiatives to address climate change locally.
    </p>
    <p>
      Climate change is personal. It's our kids, our grandchildren, our community. It’s everyone. Everywhere.
      We need to take action together. Now.
    </p>
    <h1>
      <a href="https://facebook.us18.list-manage.com/subscribe?u=a1a0e5958b2d727a3b3578b04&id=2a8d87987d" target="_blank">Join us …</a>
    </h1>
    <div className={styles.fivePoints}>
      <TheFivePoints/>
    </div>

  </div>;

export default ClimateActionIlkley;
