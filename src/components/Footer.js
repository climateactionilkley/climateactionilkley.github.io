/**
 * Created by will on 26/02/18.
 */
import React from 'react';
import { withPrefix } from 'gatsby-link'

import FaTwitter from 'react-icons/lib/fa/twitter';
import FaMedium from 'react-icons/lib/fa/medium';
import FaSlack from 'react-icons/lib/fa/slack';
import FaFacebook from 'react-icons/lib/fa/facebook-official';

import styles from './Footer.module.css';
import email from './icons/email.png';
import twitter from './icons/twitter.png';
import facebook from './icons/facebook2.png';

export default () =>
  <div className={styles.container}>
    <div className={styles.email}>
      <img src={email} width={45} height={45}/>
      <span className={styles.emailText}>climateactionilkley@gmail.com</span>
    </div>


      <div className={styles.social}>
        <span>Slack:</span>
        <a className={styles.icons}
           target="_blank"
           href="https://join.slack.com/t/climateactionilkley/shared_invite/enQtMzMzNTE2MDgwNDIzLTNhNTdkN2JiNzQwNzM1YzU0ZTJhMDU0N2FjYzFiYmIyOTlkOGUzYWFhZGIyYmUzNTI1ODljNzY1MDIyY2VmYzU">
          <FaSlack size={40}/>
        </a>
        <span>Social:</span>
        <a className={styles.icons}
           target="_blank"
           href="https://twitter.com/ClimateIlkley">
          <FaTwitter size={40}/>
        </a>

        <a className={styles.icons}
           target="_blank"
           href="https://www.facebook.com/groups/climateactionilkley">
          <FaFacebook size={40}/>
        </a>
        <a className={styles.icons}
           target="_blank"
           href="https://medium.com/climate-action-ilkley">
          <FaMedium size={40}/>
        </a>
      </div>


  </div>