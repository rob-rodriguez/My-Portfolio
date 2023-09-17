import * as React from "react"
import { useRef } from "react"
import * as styles from './index.module.scss'
import { motion } from "framer-motion"
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticImage } from "gatsby-plugin-image"
import { ChevronsDown } from 'react-feather';
import { ChevronRight } from 'react-feather';
import { ChevronDown } from 'react-feather';
import consulting from '../images/consulting.svg';
import development from '../images/development.svg';
import maintenance from '../images/maintenance.svg';
import prototyping from '../images/prototyping.svg';
// import unique from '../images/unique.svg';
import Unique from '../components/unique-text';
import strategyPlanning from '../images/strategy-planning.svg';
import trainingSupport from '../images/training-support.svg';


const IndexPage = (props) => {
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView({behavior: 'smooth'});


  return (
    <Layout>
      <h1 className="sr-only">Robert Rodriguez: Web designer & developer in Orange County</h1>
      <div className={styles.hero}>
        <div className={styles.heroContainer}>

          <StaticImage src="../images/headshot-thumbnail.png" alt="" placeholder="blurred" quality={100} className={styles.headshotThumbnail} />

          <div className={styles.heroTextContainer}>

            <p className={styles.heroTextTitle}>Hello, I'm Robert, a web designer and developer.</p>
            
            <p className={styles.heroTextIntro}>
              I craft <span className={styles.unique}>unique</span> web experiences.
            </p>
            

            {/* <a href="#" className="button primary">Let's Work Together <ChevronRight size={18} /></a>
            &nbsp;&nbsp;&nbsp;
            <a href="#" className="button default outline">About Me <ChevronRight size={18} /></a> */}

            <div className={styles.heroCTAContainer}>
              <motion.a
                initial={{
                  scale: 1
                }}
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.75
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.1,
                }}
                href="#"
                className="button primary"
              >
                Let's Work Together <ChevronRight size={18} />
              </motion.a>
              &nbsp;&nbsp;&nbsp;
              <motion.button
                onClick={executeScroll}
                initial={{
                  scale: 1
                }}
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.75
                }}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.1,
                }}
                className="button default outline"
              >
                Explore My Work <ChevronDown size={18} />
              </motion.button>
            </div>

          </div>
        </div>
        {/* <button className={styles.downButton} onClick={executeScroll}><ChevronsDown size={22} /> <span className="sr-only">Scroll down</span></button> */}
        <motion.button
          className={styles.downButton}
          onClick={executeScroll}
          initial={{
            x: '-50%',
          }}
          animate={{
            y: 25,
            x: '-50%'
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.7,
            delay: 1,
            repeat: Infinity,
            repeatType: 'mirror',
            repeatDelay: 0,
          }}
        >
          <ChevronsDown size={22} />
          <span className="sr-only">Scroll down</span>
        </motion.button>

        <svg className={styles.backgroundLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <path className={styles.backgroundLogoPath} d="m367.6,236.91c-5.66,3.29-12.13,5.16-19.17,5.17h-48.4l17.8,21.24,104.33,121.43,20.8,24.21c35.64-43.2,57.04-98.58,57.04-158.96C500,111.93,388.07,0,250,0,181.99,0,120.34,27.17,75.27,71.22l20.5,23.89c9.79-9.78,20.49-18.65,32-26.42,34.91-23.58,76.89-37.33,122.23-37.33,30.23,0,58.95,6.12,85.1,17.17,39.22,16.58,72.63,44.33,96.21,79.23,23.58,34.92,37.33,76.89,37.33,122.23,0,30.23-6.12,58.95-17.17,85.1-3.17,7.51-6.76,14.79-10.73,21.85l-72.7-84.92c5.67-1.64,11.06-3.95,16.03-6.85,10.54-6.14,19.31-14.89,25.5-25.4,6.18-10.5,9.74-22.82,9.73-35.84,0-13.02-3.55-25.34-9.73-35.84-6.18-10.51-14.96-19.26-25.49-25.4-10.44-6.1-22.69-9.63-35.64-9.62h-219l170.65,201.17h-148.51c-7.04,0-13.51-1.88-19.17-5.17-5.67-3.31-10.45-8.06-13.77-13.72-3.32-5.66-5.22-12.18-5.22-19.27,0-7.09,1.9-13.61,5.22-19.27,3.32-5.66,8.09-10.41,13.77-13.71,5.66-3.29,12.13-5.17,19.17-5.17h48.4l-17.8-21.24-104.33-121.43-20.8-24.21C21.41,134.24,0,189.62,0,250c0,138.07,111.93,250,250,250,67.83,0,129.33-27.03,174.37-70.89l-20.48-23.86c-9.7,9.63-20.29,18.38-31.66,26.06-34.91,23.58-76.89,37.33-122.23,37.33-30.23,0-58.95-6.12-85.1-17.17-39.22-16.58-72.63-44.33-96.21-79.23-23.58-34.92-37.33-76.89-37.33-122.23,0-30.23,6.12-58.95,17.17-85.1,3.17-7.5,6.76-14.79,10.73-21.85l72.7,84.92c-5.67,1.64-11.06,3.95-16.03,6.85-10.53,6.14-19.32,14.89-25.49,25.4-6.18,10.5-9.74,22.82-9.73,35.84,0,13.02,3.55,25.34,9.73,35.84,6.18,10.51,14.96,19.26,25.49,25.4,10.45,6.1,22.69,9.63,35.64,9.62h219l-170.65-201.17h148.51c7.04,0,13.51,1.88,19.17,5.17,5.67,3.3,10.45,8.06,13.77,13.71,3.32,5.67,5.22,12.18,5.22,19.27,0,7.09-1.9,13.61-5.22,19.27-3.32,5.66-8.09,10.41-13.77,13.72Z"/>
        </svg>
      </div>
      <div className="container small">
        <p>Dolor aute veniam dolor est ullamco amet id voluptate proident duis. Cillum mollit ex ex ullamco dolor ipsum laboris Lorem culpa. Minim laboris excepteur duis sint. Quis tempor reprehenderit velit nostrud duis veniam in dolore eiusmod cupidatat pariatur. Ad cupidatat reprehenderit Lorem anim commodo. Sint ipsum ipsum aliqua culpa nulla nisi non.</p>
        <p>Exercitation elit voluptate magna officia nulla nisi quis labore magna exercitation. Aliquip laborum cillum magna sunt nostrud. Minim consectetur anim esse labore voluptate irure adipisicing do do irure do ea tempor. Pariatur fugiat sit velit consequat consectetur fugiat labore voluptate. Ipsum exercitation aliqua aute amet dolore culpa magna dolor ex cupidatat ut ullamco anim. Non aute ut nisi ad anim est ullamco pariatur non duis.</p>
        <p>Reprehenderit elit nisi esse commodo adipisicing excepteur anim exercitation. Ea ea culpa laboris dolor quis consectetur commodo esse laborum tempor. Mollit duis ad minim ut proident in quis velit aliqua. Consequat laborum excepteur nisi consequat dolor laborum.</p>
        <div ref={myRef}>test</div>
        <p>Exercitation laborum non dolore quis. Velit do officia laboris labore minim. Sunt aliqua minim velit laboris elit qui ipsum labore anim in eu esse cupidatat.</p>
        <p>Enim laboris tempor culpa ad commodo cillum excepteur occaecat qui aute aute non non duis. Magna irure aliquip anim aliqua in Lorem ut anim nulla ut veniam non. Excepteur eiusmod deserunt consequat adipisicing duis reprehenderit labore ea consectetur mollit duis minim commodo esse. Excepteur Lorem mollit occaecat nostrud cillum magna ipsum. Fugiat elit sint fugiat reprehenderit eiusmod cupidatat. Esse ipsum consequat id nulla excepteur qui.</p>
      </div>
      <div className={styles.services}>
        <div className="container">
          <h2 className="text-center">Services</h2>
          <div className="row">
            <div className={`${styles.service} col-6`}>
              <div className={styles.serviceIcon}><img src={strategyPlanning} alt="" /></div>
              <div className={styles.serviceDetail}>
                <h3>Strategy & Planning</h3>
                <p>Aute nulla sint officia tempor. Commodo Lorem elit qui non qui. Sit dolore laboris consequat amet cupidatat Lorem et labore consequat irure aliquip ullamco.</p>
              </div>
            </div>
            <div className={`${styles.service} col-6`}>
            <div className={styles.serviceIcon}><img src={prototyping} alt="" /></div>
             <div className={styles.serviceDetail}>
              <h3>Prototyping & Design</h3>
              <p>Aliquip non aliquip anim sunt deserunt nisi labore. Ea dolor aute enim non esse sit aliqua nisi elit ullamco ipsum. Lorem commodo irure aliqua enim reprehenderit cillum ea adipisicing cillum do aliquip aliqua. Consectetur enim anim adipisicing ullamco aliqua nisi fugiat duis duis.</p>
            </div>
            </div>
          </div>
          <div className="row">
            <div className={`${styles.service} col-6`}>
              <div className={styles.serviceIcon}><img src={development} alt="" /></div>
              <div className={styles.serviceDetail}>
                <h3>Development</h3>
                <p>Duis culpa fugiat labore excepteur tempor elit elit ad amet. Commodo commodo ipsum ipsum consequat enim est cillum officia id deserunt laborum. Elit irure officia adipisicing fugiat consequat Lorem aute sit. Duis mollit labore eu duis eiusmod quis voluptate. Mollit id fugiat excepteur duis cupidatat id ipsum est reprehenderit.</p>
              </div>
            </div>
            <div className={`${styles.service} col-6`}>
            <div className={styles.serviceIcon}><img src={maintenance} alt="" /></div>
             <div className={styles.serviceDetail}>
              <h3>Maintenance</h3>
              <p>Ad officia dolor qui fugiat veniam in quis anim magna consequat. Qui eu consequat laborum ea. Velit sint laboris enim ad ex quis consequat amet ad dolor amet dolore quis. Dolor deserunt ea labore tempor cupidatat amet culpa est ad dolor esse tempor minim.</p>
            </div>
            </div>
          </div>
          <div className="row">
            <div className={`${styles.service} col-6`}>
              <div className={styles.serviceIcon}><img src={trainingSupport} alt="" /></div>
              <div className={styles.serviceDetail}>
                <h3>Training & Support</h3>
                <p>Duis deserunt exercitation sint excepteur nisi duis tempor fugiat nostrud mollit ipsum ullamco qui dolore. Excepteur in incididunt nulla ipsum id voluptate eiusmod. Non dolor eu sit laboris amet ullamco dolore consectetur officia ad excepteur.</p>
              </div>
            </div>
            <div className={`${styles.service} col-6`}>
            <div className={styles.serviceIcon}><img src={consulting} alt="" /></div>
             <div className={styles.serviceDetail}>
              <h3>Consulting</h3>
              <p>Do commodo voluptate eiusmod elit. Reprehenderit pariatur reprehenderit qui exercitation labore deserunt. Pariatur non ex magna qui officia Lorem qui id aliquip amet do consectetur. Fugiat qui nulla exercitation dolore sunt aliqua et ad qui enim minim nisi proident occaecat.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = ({location}) => <SEO title="Robert Rodriguez: Web designer & developer in Orange County" pathname={location.pathname}  />

function serviceCard() {
  return (
    <div></div>
  )
}
