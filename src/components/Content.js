/**
 * Created by will on 27/06/18.
 */
import React from 'react';

import ClimateActionIlkley from './ClimateActionIlkley';
import WeCanFixIt from './WeCanFixIt';
import TownCouncil from './TownCouncil';
import NeighbourhoodPlan from './NeighbourhoodPlan';

import styles from './Content.module.css';

import traffic from './imgs/TrafficIlkey.jpg';
import grove from './imgs/grove.jpg';


const Content = () =>
  <div className={styles.container}>
    <div className={styles.climateActionIlkley}>
      <ClimateActionIlkley/>
      <img className={styles.groveImage} src={grove}/>
    </div>
    <div className={styles.townCouncil}>
      <TownCouncil/>


    </div>
      <img className={styles.trafficImage} src={traffic}/>
    {/*</div>*/}


    <div className={styles.neighbourhoodPlan}>
      <NeighbourhoodPlan/>
    </div>
    <div className={styles.weCanFixIt}>
      <WeCanFixIt/>
    </div>
  </div>;

export default Content;
