/**
 * Created by will on 27/06/18.
 */
import React from 'react';

import TheFivePoints from './TheFivePoints';

import styles from './ClimateActionIlkley.module.css';



const ClimateActionIlkley = () =>
  <div className={styles.container}>
    <h2>Climate Action Ilkley</h2>
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
    <p>
      Join us …
    </p>
    <div className={styles.fivePoints}>
      <TheFivePoints/>
    </div>

  </div>;

export default ClimateActionIlkley;
