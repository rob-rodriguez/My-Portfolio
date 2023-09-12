import * as React from 'react';
import * as styles from './layout.module.scss';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Header from './header';

export default function Layout({ children, pathname }) {
  return (
    <Scrollbars id="site-wrapper" className={styles.siteWrapper}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
    </Scrollbars>
  )
}
