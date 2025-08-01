import * as React from "react"
import * as styles from './header.module.scss';
import Nav from '../nav';
import { motion, useCycle } from "motion/react"

const Header = (props) => {

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className={`${styles.container} ${props.headerClass} ${isOpen ? "mobile-nav-open" : ""}`}>
      <motion.a
        href="#main-content"
        whileTap={{
          scale: [1, 1.25, 1],
        }}
      >
        <motion.svg id="site-logo" className={`${styles.siteLogo} ${isOpen ? "fill-white" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" aria-label={"Robert Rodriguez - Website Design and Development"} role="img">
          <path
          className={styles.siteLogoPath} d="m367.6,236.91c-5.66,3.29-12.13,5.16-19.17,5.17h-48.4l17.8,21.24,104.33,121.43,20.8,24.21c35.64-43.2,57.04-98.58,57.04-158.96C500,111.93,388.07,0,250,0,181.99,0,120.34,27.17,75.27,71.22l20.5,23.89c9.79-9.78,20.49-18.65,32-26.42,34.91-23.58,76.89-37.33,122.23-37.33,30.23,0,58.95,6.12,85.1,17.17,39.22,16.58,72.63,44.33,96.21,79.23,23.58,34.92,37.33,76.89,37.33,122.23,0,30.23-6.12,58.95-17.17,85.1-3.17,7.51-6.76,14.79-10.73,21.85l-72.7-84.92c5.67-1.64,11.06-3.95,16.03-6.85,10.54-6.14,19.31-14.89,25.5-25.4,6.18-10.5,9.74-22.82,9.73-35.84,0-13.02-3.55-25.34-9.73-35.84-6.18-10.51-14.96-19.26-25.49-25.4-10.44-6.1-22.69-9.63-35.64-9.62h-219l170.65,201.17h-148.51c-7.04,0-13.51-1.88-19.17-5.17-5.67-3.31-10.45-8.06-13.77-13.72-3.32-5.66-5.22-12.18-5.22-19.27,0-7.09,1.9-13.61,5.22-19.27,3.32-5.66,8.09-10.41,13.77-13.71,5.66-3.29,12.13-5.17,19.17-5.17h48.4l-17.8-21.24-104.33-121.43-20.8-24.21C21.41,134.24,0,189.62,0,250c0,138.07,111.93,250,250,250,67.83,0,129.33-27.03,174.37-70.89l-20.48-23.86c-9.7,9.63-20.29,18.38-31.66,26.06-34.91,23.58-76.89,37.33-122.23,37.33-30.23,0-58.95-6.12-85.1-17.17-39.22-16.58-72.63-44.33-96.21-79.23-23.58-34.92-37.33-76.89-37.33-122.23,0-30.23,6.12-58.95,17.17-85.1,3.17-7.5,6.76-14.79,10.73-21.85l72.7,84.92c-5.67,1.64-11.06,3.95-16.03,6.85-10.53,6.14-19.32,14.89-25.49,25.4-6.18,10.5-9.74,22.82-9.73,35.84,0,13.02,3.55,25.34,9.73,35.84,6.18,10.51,14.96,19.26,25.49,25.4,10.45,6.1,22.69,9.63,35.64,9.62h219l-170.65-201.17h148.51c7.04,0,13.51,1.88,19.17,5.17,5.67,3.3,10.45,8.06,13.77,13.71,3.32,5.67,5.22,12.18,5.22,19.27,0,7.09-1.9,13.61-5.22,19.27-3.32,5.66-8.09,10.41-13.77,13.72Z"/>
        </motion.svg>
      </motion.a>
      <Nav isOpen={isOpen} toggleOpen={toggleOpen} />
    </header>
  )
}

export default Header

