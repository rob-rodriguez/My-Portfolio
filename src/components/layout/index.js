import * as React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './layout.module.scss';
// import { Scrollbars } from 'react-custom-scrollbars-2';
// import { useWindowScroll } from "@uidotdev/usehooks";
import Header from '../header';


const IndexPage = (props) => {

  const [headerClass, setScroll] = useState(null);
  // const [{ x, y }, scrollTo] = useWindowScroll();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const handleScroll = (e) => {
    if (window.scrollY >= 200) {
      setScroll('fixed');
    } else {
      setScroll(null);
    }
  };

  return (
    // <Scrollbars id="site-wrapper" className={styles.siteWrapper} onScrollFrame={handleScroll}>
      <>
        <Header headerClass={headerClass} />
        <main className={styles.mainContent}>
          {props.children}
        </main>
      </>
    // </Scrollbars>
  );
}


export default IndexPage;