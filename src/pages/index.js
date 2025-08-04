import * as React from "react"
import { useRef } from "react"
import * as styles from './index.module.scss'
import { motion, useScroll, useTransform } from "motion/react"
import Layout from '../components/layout';
import SEO from '../components/seo';
import { StaticImage } from "gatsby-plugin-image"
import { ChevronsDown, ChevronRight, ChevronDown, Mail } from 'react-feather';
import consulting from '../images/consulting.svg';
import development from '../images/development.svg';
import maintenance from '../images/maintenance.svg';
import prototyping from '../images/prototyping.svg';
// import unique from '../images/unique.svg';
import Unique from '../components/unique-text';
import strategyPlanning from '../images/strategy-planning.svg';
import trainingSupport from '../images/training-support.svg';
import Projects from "../components/project-listing";


const IndexPage = (props) => {

  const recentProjectsRef = useRef(null)
  const executeScroll = () => recentProjectsRef.current.scrollIntoView({behavior: 'smooth'});

  const IntroTextP = {
    hidden: {

    },
    visible: {
      transition: {
        delayChildren: 1.5,
        when: "beforeChildren",
        staggerChildren: .5,
      }
    }
  }

  const IntroTextVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: .75,
        opacity: { duration: 1 }
      }
    }
  }

  return (
    <Layout>
      <h1 className="sr-only">Robert Rodriguez: Web designer & developer in Los Angeles</h1>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>

          <motion.div
          initial={{
            y: -50,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: .25,
              duration: .75,
              opacity: { duration: 1 }
            }
          }}>
            <StaticImage src="../images/headshot-thumbnail.png" alt="" placeholder="blurred" quality={100} className={styles.headshotThumbnail} />
          </motion.div>

          <div className={styles.heroTextContainer}>

            <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: .5,
                duration: 1
              }
            }}
            className={styles.heroTextTitle}>
              Hello, I'm Robert, a web designer and developer.
            </motion.p>
            
            <motion.p
            className={styles.heroTextIntro}
            initial="hidden"
            animate="visible"
            variants={IntroTextP}>
              <motion.span className="display-inline-block" variants={IntroTextVariants}>I craft&nbsp;</motion.span>
              <Unique variants={IntroTextVariants} />
              <motion.span className="display-inline-block" variants={IntroTextVariants}>&nbsp;web experiences.</motion.span>
            </motion.p>
            

            {/* <a href="#" className="button primary">Let's Work Together <ChevronRight size={18} /></a>
            &nbsp;&nbsp;&nbsp;
            <a href="#" className="button default outline">About Me <ChevronRight size={18} /></a> */}

            <motion.div className={styles.heroCTAContainer}
            initial={{
              opacity: 0,
              y: -50
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 3,
              duration: .75,
              opacity: { duration: 1 }
            }}
            >
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
                href="#contact"
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
                View Recent Projects <ChevronDown size={18} />
              </motion.button>
            </motion.div>

          </div>
        </div>
        {/* <button className={styles.downButton} onClick={executeScroll}><ChevronsDown size={22} /> <span className="sr-only">Scroll down</span></button> */}
        <motion.button
          className={styles.downButton}
          onClick={executeScroll}
          initial={{
            x: '-50%',
            opacity: 0
          }}
          animate={{
            opacity: 1,
            y: 25,
            x: '-50%'
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 0,
              duration: 0.7,
              ease: 'easeInOut',
            },
            opacity: {
              delay: 3.25
            }
          }}
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.75
          }}
        >
          <ChevronsDown size={22} />
          <span className="sr-only">Scroll down</span>
        </motion.button>

        <motion.svg className={styles.backgroundLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
          <path className={styles.backgroundLogoPath} d="m367.6,236.91c-5.66,3.29-12.13,5.16-19.17,5.17h-48.4l17.8,21.24,104.33,121.43,20.8,24.21c35.64-43.2,57.04-98.58,57.04-158.96C500,111.93,388.07,0,250,0,181.99,0,120.34,27.17,75.27,71.22l20.5,23.89c9.79-9.78,20.49-18.65,32-26.42,34.91-23.58,76.89-37.33,122.23-37.33,30.23,0,58.95,6.12,85.1,17.17,39.22,16.58,72.63,44.33,96.21,79.23,23.58,34.92,37.33,76.89,37.33,122.23,0,30.23-6.12,58.95-17.17,85.1-3.17,7.51-6.76,14.79-10.73,21.85l-72.7-84.92c5.67-1.64,11.06-3.95,16.03-6.85,10.54-6.14,19.31-14.89,25.5-25.4,6.18-10.5,9.74-22.82,9.73-35.84,0-13.02-3.55-25.34-9.73-35.84-6.18-10.51-14.96-19.26-25.49-25.4-10.44-6.1-22.69-9.63-35.64-9.62h-219l170.65,201.17h-148.51c-7.04,0-13.51-1.88-19.17-5.17-5.67-3.31-10.45-8.06-13.77-13.72-3.32-5.66-5.22-12.18-5.22-19.27,0-7.09,1.9-13.61,5.22-19.27,3.32-5.66,8.09-10.41,13.77-13.71,5.66-3.29,12.13-5.17,19.17-5.17h48.4l-17.8-21.24-104.33-121.43-20.8-24.21C21.41,134.24,0,189.62,0,250c0,138.07,111.93,250,250,250,67.83,0,129.33-27.03,174.37-70.89l-20.48-23.86c-9.7,9.63-20.29,18.38-31.66,26.06-34.91,23.58-76.89,37.33-122.23,37.33-30.23,0-58.95-6.12-85.1-17.17-39.22-16.58-72.63-44.33-96.21-79.23-23.58-34.92-37.33-76.89-37.33-122.23,0-30.23,6.12-58.95,17.17-85.1,3.17-7.5,6.76-14.79,10.73-21.85l72.7,84.92c-5.67,1.64-11.06,3.95-16.03,6.85-10.53,6.14-19.32,14.89-25.49,25.4-6.18,10.5-9.74,22.82-9.73,35.84,0,13.02,3.55,25.34,9.73,35.84,6.18,10.51,14.96,19.26,25.49,25.4,10.45,6.1,22.69,9.63,35.64,9.62h219l-170.65-201.17h148.51c7.04,0,13.51,1.88,19.17,5.17,5.67,3.3,10.45,8.06,13.77,13.71,3.32,5.67,5.22,12.18,5.22,19.27,0,7.09-1.9,13.61-5.22,19.27-3.32,5.66-8.09,10.41-13.77,13.72Z"/>
        </motion.svg>
      </section>
      <section className={styles.recentProjects} ref={recentProjectsRef} id="projects">

        <h2 className={`text-center`}>Recent Projects</h2>

        <Projects />

      </section>

      <section className={styles.services} id="services">
        <div className="container">
          <h2 className="text-center">Services</h2>
          <div className="row">
            <div className={`${styles.service} col-6`}>
              <div className={styles.serviceIcon}><img src={strategyPlanning} alt="" /></div>
              <div className={styles.serviceDetail}>
                <h3>Strategy & Planning</h3>
                <p>We'll work together to define your goals, understand your audience, and create a clear roadmap for your online success. No more guessing games – just a focused plan that drives results.</p>
              </div>
            </div>
            <div className={`${styles.service} col-6`}>
            <div className={styles.serviceIcon}><img src={prototyping} alt="" /></div>
             <div className={styles.serviceDetail}>
              <h3>Prototyping & Design</h3>
              <p>See your vision come to life before development even begins. I'll create intuitive and visually stunning designs that capture your brand and engage your users.</p>
            </div>
            </div>
          </div>
          <div className="row">
            <div className={`${styles.service} col-6`}>
              <div className={styles.serviceIcon}><img src={development} alt="" /></div>
              <div className={styles.serviceDetail}>
                <h3>Development</h3>
                <p>Turning designs into fully functional, responsive websites using the latest technologies. I build robust and scalable solutions that are ready for today and tomorrow's web.</p>
              </div>
            </div>
            <div className={`${styles.service} col-6`}>
            <div className={styles.serviceIcon}><img src={maintenance} alt="" /></div>
             <div className={styles.serviceDetail}>
              <h3>Maintenance</h3>
              <p>Keep your website running smoothly and securely. From updates and backups to ongoing support, I'll handle the technical details so you can focus on your business.</p>
            </div>
            </div>
          </div>
          <div className="row">
            <div className={`${styles.service} col-6`}>
              <div className={styles.serviceIcon}><img src={trainingSupport} alt="" /></div>
              <div className={styles.serviceDetail}>
                <h3>Training & Support</h3>
                <p>Empowering you to take control of your website. I offer clear, concise training and ongoing support to ensure you feel confident managing your online presence.</p>
              </div>
            </div>
            <div className={`${styles.service} col-6`}>
            <div className={styles.serviceIcon}><img src={consulting} alt="" /></div>
             <div className={styles.serviceDetail}>
              <h3>Consulting</h3>
              <p>Need expert advice on your web strategy or a specific technical challenge? Leverage my 15 years of experience to get the insights and guidance you need.</p>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about} id="about">
        <div className={`container-small ${styles.aboutContainer}`}>
          <h2 className="text-center">About Me</h2>

          <StaticImage src="../images/robert-bike.jpg" alt="Man smiling with a bicycle in front of a CicLAvia Venice Blvd event sign on a sunny day, wearing a red tank top, black shorts, sunglasses, and a cap." placeholder="blurred" layout="constrained" className={styles.aboutImage} width={400} />

          <p><strong>Hi, I'm Robert.</strong> For the past 15 years, I've been a web designer and developer, and my journey began with a curious mind and a passion for creating. It all started with MySpace. I was fascinated by the ability to customize profiles using HTML & CSS. I went from using online generators to modifying the code myself, and soon I was building my first website—a 'MySpace Help' site that offered customizations for others.</p>

          <p>My love for computers and technology just grew from there, but it wasn't always easy. As a self-taught developer, learning was a process of trial and error, filled with lots of do-overs. Debugging my code and understanding error messages was a difficult task, especially when I started tackling backend languages like PHP. But I stuck with it, and the reward of creating something from nothing is what continues to drive me today.</p>

          <p>My proudest moment was landing my first "real" job at 360 Business Consulting. It was proof that my self-taught skills were valuable and that I was good enough to be hired for it. I not only grew my technical and design skills there but also gained experience in leadership and public speaking. This foundational experience, along with my work in public, private, and higher education sectors, has made me a well-rounded developer who can understand the needs of a broader audience.</p>

          <p>I'm a laid-back, yet goal-oriented professional. My working style is collaborative, and I'm very easy to talk to, so you'll always feel informed and connected throughout our project. I want my clients to feel confident that they've selected the right developer and that their product is in the right hands.</p>
          
          <p>My diverse experience allows me to work with a wide range of clients and deliver sustainable, well-maintained code along with beautiful, polished designs. I get obsessive with the details, from making sure buttons have just the right rounded corners to creating delightful interaction animations. I also spend a lot of time ensuring everything looks correct on different screen sizes and browsers, and I test every aspect of the product to ensure proper functionality.</p>

        </div>
      </section>

      <section className={styles.skills} id="skills">
        <div className="container-large">

          <h2 className="text-center">Skills</h2>
          
          <div className="row">
            <div className={`col-7 ${styles.skillLogos}`}>
              <StaticImage src="../images/skill-logos/adobe-illustrator.png" alt="Adobe Illustrator" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/adobe-photoshop.png" alt="Adobe Photoshop" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/adobe-xd.png" alt="Adobe XD" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/apache.png" alt="Apache" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/css.png" alt="CSS" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/html.png" alt="HTML" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/git.png" alt="Git" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/mjml.png" alt="MJML" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/mysql.png" alt="MySQL" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/drupal.png" alt="Drupal" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/nodejs.png" alt="Node.js" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/php.png" alt="PHP" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/linux.png" alt="Linux" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/wordpress.png" alt="WordPress" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/gatsby.png" alt="Gatsby" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/github.png" alt="GitHub" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/react.png" alt="React" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/sass.png" alt="Sass" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/figma.png" alt="Figma" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/jquery.png" alt="jQuery" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/iis.png" alt="IIS" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/vscode.png" alt="Visual Studio Code" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/npm.png" alt="NPM" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
              <StaticImage src="../images/skill-logos/js.png" alt="JavaScript" placeholder="blurred" layout="constrained" imgClassName={styles.skillLogoImage} width={75} height={75} />
            </div>
            <div className={`col-5 ${styles.skillList}`}>
              <ul>
                <li><strong>Front-End Development:</strong> HTML, CSS, SASS, JavaScript, jQuery, React, Gatsby</li>
                <li><strong>Back-End & Server:</strong> PHP, MySQL, Node.js , Apache, Windows (IIS) & Linux server administration, DNS Management</li>
                <li><strong>CMS:</strong> WordPress, Drupal</li>
                <li><strong>Tools & Platforms:</strong> Git, VS Code, Adobe XD, Figma, Photoshop, Illustrator</li>
                <li><strong>Other:</strong> Responsive Design, Web Accessibility, SEO/Analytics, Email Campaigns (design, coding (MJML), and deployment using platforms like Mailchimp)</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.experience} id="experience">
        <div className="container">
          <h2 className="text-center">Experience</h2>

          <p className="text-center" style={{marginBottom: '2rem'}}><a href="/pdf/robert-rodriguez-resume.pdf" className="button default outline" target="_blank" rel="noopener noreferrer">Download Resume (PDF) <ChevronRight size={18} /></a></p>

          <ul className={`container-small ${styles.experienceList}`}>
            <li>
              <p>
                <span className={styles.title}>Digital Communications Designer</span>
                <span className={styles.details}>California State University, Fullerton | Fullerton, CA | June 2018 - Present</span>
              </p>
              <ul>
                <li>Built and maintained high-traffic university websites, landing pages and interactive storytelling features using React, HTML, CSS (SASS), and JavaScript, ensuring WCAG 2.1 accessibility compliance.</li>
                <li>Spearheaded the migration of the university news platform to WordPress, streamlining editorial workflows and boosting performance. Upgraded PHP on web servers and configured MySQL databases to support WordPress installation.</li>
                <li>Designed and launched the University Magazine website using GatsbyJS, a static site generator.</li>
                <li>Built custom WordPress submission form using REST API and React, enabling campus-wide content contributions.</li>
                <li>Collaborated with designers using Adobe XD to design and develop prototypes into accessible front-end components.</li>
                <li>Helped manage department web and database servers.</li>
                <li>Collaborated with IT and accessibility teams to ensure ADA/Section 508 compliance.</li>
                <li>Led training sessions for non-technical staff to manage content independently.</li>
                <li>Supported SEO and analytics by integrating structured data and performance enhancements.</li>
              </ul>
            </li>
            <li>
              <p>
                <span className={styles.title}>Freelance Website Designer & Developer</span>
                <span className={styles.details}>September 2010 - Present</span>
              </p>
              <ul>
                <li>Developed custom websites for small businesses, using HTML, Javascript, SASS, PHP, static site generators and open-source CMS platforms.</li>
                <li>Deployed client websites to custom cloud hosting environments, managing configuration and performance.</li>
                <li>Delivered clear, client-focused training to ensure independent website management.</li>
                <li>Designed easy-to-use and innovative UI/UX solutions.</li>
                <li>Collaborated closely with clients to define requirements and deliver tailored solutions.</li>
              </ul>
            </li>
            <li>
              <p>
                <span className={styles.title}>Director of Website Development</span>
                <span className={styles.details}>360 Business Consulting | Orange, CA | January 2018 - June 2018</span>
              </p>
              <ul>
                <li>Oversaw web design projects end-to-end, managing production schedules and client communication.</li>
                <li>Managed load-balanced cloud hosting infrastructure for 20+ client websites.</li>
                <li>Directed and supported a team of junior designers and developers.</li>
                <li>Played a key role in RFPs and client pitches, combining technical and creative expertise.</li>
                <li>Led CMS training workshops for 20+ users at a time, focusing on content editing for public sector clients such as school districts.</li>
                <li>Participated in budget planning and strategic decisions with the executive team.</li>
              </ul>
            </li>
            <li>
              <p>
                <span className={styles.title}>Director of Design</span>
                <span className={styles.details}>360 Business Consulting | Orange, CA | January 2016 - December 2017</span>
              </p>
              <ul>
                <li>Led creative direction across all client work, including UI/UX, branding, and digital assets.</li>
                <li>Revamped company branding to align with evolving digital strategies.</li>
                <li>Managed design production across web, social, and print.</li>
                <li>Actively involved in pre-sales design consultations and presentations.</li>
              </ul>
            </li>
            <li>
              <p>
                <span className={styles.title}>Website Designer</span>
                <span className={styles.details}>360 Business Consulting | Orange, CA | June 2013 - December 2015</span>
              </p>
              <ul>
                <li>Created and managed quality design assets in a fast-paced, production-driven environment.</li>
                <li>Responsible for email campaign design and deployment.</li>
                <li>Designed and developed responsive websites using HTML and CSS.</li>
                <li>Implemented complex CMS solutions for large-scale clients.</li>
                <li>Managed daily website content updates.</li>
                <li>Worked directly with clients and sales to design/develop effective marketing solutions.</li>
              </ul>
            </li>
          </ul>

        </div>
      </section>
      <section className={styles.contact} id="contact">
        <div className="container">
          <h2 className="text-center">Contact Me</h2>
          <p className="text-center">Have a project in mind or just want to say hello? I'd love to hear from you!</p>
          <p className="text-center">
            <motion.a
              href="mailto:robert@rodriguez.digital" className="button primary"
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
            >
                <Mail size={18} /> robert@rodriguez.digital
            </motion.a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const Head = ({location}) => <SEO title="Robert Rodriguez: Website Designer & Developer in Los Angeles" pathname={location.pathname}  />


// function ProjectListing(props) {

//   let projectListingRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: projectListingRef,
//     offset: ['start end', 'end start'],
//     // container: siteWrapperRef
//   })
  
//   const y = useTransform(scrollYProgress, [0,1], ["0%", "-40%"]);
//   const rotate = useTransform(scrollYProgress, [0,1], ["0deg", "20deg"]);

//   let projectImage
//   if (props.layout === 'laptop') {
//     projectImage = <motion.div
//     initial={{
//       opacity: 0
//     }}
//     whileInView={{
//       opacity: 1,
//     }}
//     transition={{
//       opacity: {
//         duration: 2
//       }
//     }}
//     style={{
//       y: y,
//       rotate: rotate
//     }}
//     className={styles.projectImage}>
//       <StaticImage src={props.img} alt="" placeholder="blurred" quality={80}  />
//     </motion.div>
//   }

//   return (
//     <div className={`${styles.project} container layout-${props.layout}`} ref={projectListingRef}>
//       <motion.div className={styles.projectText}
//       initial={{
//         opacity: 0,
//         y: 100
//       }}
//       whileInView={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 1
//       }}>
//         <h3>{props.title}</h3>
//         <p>{props.desc}</p>
//         <a href="#" className="button primary">View Project</a>
//       </motion.div>
//       {projectImage}
//     </div>
//   )
// }