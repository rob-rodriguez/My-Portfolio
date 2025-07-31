import React from 'react';
import { useRef } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion, useScroll, useTransform } from "motion/react"
import * as styles from './project-listing.module.scss'
import projectList from '../../content/projects.json';
import { ChevronRight, ArrowUpRight } from 'react-feather';
import LightboxModal from '../modal';

const Projects = () => {

  let projectListingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectListingRef,
    offset: ['start end', 'end start'],
    // container: siteWrapperRef
  })

  const y = useTransform(scrollYProgress, [0,1], ["0%", "-40%"]);
  const rotate = useTransform(scrollYProgress, [0,1], ["0deg", "10deg"]);
  const rotate2 = useTransform(scrollYProgress, [0,1], ["0deg", "-10deg"]);


  // Query to fetch the image using GraphQL
  const data = useStaticQuery(graphql`
    query projectImageQuery {
      allFile(
        filter: {
          extension: { 
            regex: "/(jpg|jpeg|png)/"
          }
          relativeDirectory: { 
            eq: "projects"
          }
        }
      ){
        nodes {
          childImageSharp {
            gatsbyImageData
          }
          base
        }
      }
    }
  `);

  return (
    <div className="container" ref={projectListingRef}>

      {projectList.map((project, index) => {

        const imageNode = data.allFile.nodes.find(
          (node) => node.base === project.image
        );

        // Only access childImageSharp if imageNode is defined
        const image = imageNode ? getImage(imageNode.childImageSharp) : null;

        return (
          <div className={`${styles.project} project-${index}`} key={index}>
            {
              image && 
              <motion.div
              initial={{
              opacity: 0
              }}
              whileInView={{
              opacity: 1,
              }}
              transition={{
              opacity: {
                duration: 2
              }
              }}
              style={{
                y: y,
                rotate: index % 2 === 1 ? rotate2 : rotate
              }}
              className={styles.projectImage}>
                <GatsbyImage
                  image={image}
                  alt={`${project.title} preview`}
                />
              </motion.div>
            }
            <motion.div className={styles.projectText}
            initial={{
              opacity: 0,
              y: 100
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1
            }}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <LightboxModal
                label={<span>View Project <ChevronRight size={18} /></span>}
                title={project.title}
                ariaLabel={`View ${project.title} project details`}
                buttonClassName="button primary"
                contentLabel={project.title}
              >
                <div className={`container row ${styles.projectModal}`}>

                  <div className='col-5'>
                    {image && (
                      <GatsbyImage
                        image={image}
                        alt={`${project.title} preview`}
                        className={styles.projectImageModal}
                      />
                    )}
                  </div>
                  <div className='col-7'>
                    <h3>{project.title}</h3>
  
                    <p>{project.description}</p>
  
                    {project.technologies && project.technologies.length > 0 && (
                      <div>
                        <span>Technologies Used:</span>
                        <ul className={styles.technologies}>
                          {project.technologies.map((tech, techIndex) => (
                            <li key={techIndex}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="button primary" aria-label={`View ${project.title} website (Opens in new window`}>View Website <ArrowUpRight size={18} /></a>
                  </div>
                </div>
              </LightboxModal>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
