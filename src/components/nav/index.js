import * as React from "react"
import * as styles from './nav.module.scss';
import { motion } from "motion/react"
import { ChevronRight } from 'react-feather';
import { MenuButton } from "./menu-button";
// import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";

const links = [
  {
    text: "Projects",
    url: "#projects",
    class: null
  },
  {
    text: "Services",
    url: "#services",
    class: null
  },
  {
    text: "About",
    url: "#about",
    class: null
  },
    {
    text: "Skills",
    url: "#skills",
    class: null
  },
  // {
  //   text: "Get in Touch",
  //   url: "#",
  //   class: "button primary"
  // },
]

const Nav = (props) => {

  // const isMobile = useMediaQuery("only screen and (max-width : 767px)");
  // const size = { width: 0, height: 0 };
  // const [isOpen, toggleOpen] = useCycle(false, true);

  const navList = {
    open: {
      height: '100vh',
      transition: { 
        delay: 0.3,
        duration: 0.2,
        staggerChildren: 0.3,
        staggerDirection: 1
      }
    },
    closed: {
      height: 0,
      transition: { 
        delay: 0.5,
        duration: .2,
        staggerChildren: 0.15,
        staggerDirection: -1
      }
    },
  };

  const listItemVarriants = {
    initial: {
      y: -20
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { 
        // delay: 0.45,
        duration: .2,
      }
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        // delay: 0.45,
        duration: .65,
      }
    }
  };

  return (
    <nav className={styles.container}>

      <button 
        className={styles.menuButton}
        onClick={() => props.toggleOpen()}>
        <span className="sr-only">Open Menu</span>
        <MenuButton
          isOpen={props.isOpen}
          strokeWidth="2"
          color="#ffffff"
          lineProps={{ strokeLinecap: "round" }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={styles.menuButtonSVG}
          width={18}
          height={13.5}
        />
      </button>


        <motion.ul
          className={`${styles.navList} ${styles.navListMobile}`}
          initial={false}
          animate={props.isOpen ? "open" : "closed"}
          variants={navList}
          >
          {links.map( (link, key) => (
            <motion.li
            key={key}
            variants={listItemVarriants}>
              <a href={link.url} className={link.class != null ? ( link.class ) : null}>{link.text} {link.class != null ? ( <ChevronRight size={18} /> ) : null}</a>
            </motion.li>
          ))}
          <motion.li variants={listItemVarriants}>
            <motion.a
              whileTap={{
                scale: 0.75
              }}
              transition={{
                ease: 'easeInOut',
                duration: 0.1,
              }}
              href="#contact"
              className="button primary"
            >
              Contact <ChevronRight size={18} />
            </motion.a>
          </motion.li>
        </motion.ul>


        <ul
        className={`${styles.navList} ${styles.navListDesktop}`}>
        {links.map( (link, key) => (
          <li key={key}>
            <a href={link.url} className={link.class != null ? ( link.class ) : null}>{link.text} {link.class != null ? ( <ChevronRight size={18} /> ) : null}</a>
          </li>
        ))}
        <li>
          <motion.a
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
            href="#contact"
            className="button primary"
          >
            Contact <ChevronRight size={18} />
          </motion.a>
        </li>
      </ul>

    </nav>
  )
}

export default Nav