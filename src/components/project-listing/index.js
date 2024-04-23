import React from 'react';
import { useRef } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion, useScroll, useTransform } from "framer-motion"
import * as styles from './project-listing.module.scss'

const ProjectListing = ({ title, description, layout, image }) => {

  let projectListingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectListingRef,
    offset: ['start end', 'end start'],
    // container: siteWrapperRef
  })

  const y = useTransform(scrollYProgress, [0,1], ["0%", "-40%"]);
  const rotate = useTransform(scrollYProgress, [0,1], ["0deg", "20deg"]);

  // Query to fetch the image using GraphQL
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {sourceInstanceName: {eq: "images"}}) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `);

  // Find the node corresponding to the image path
  const imageData = data.allFile.nodes.find(node => node.relativePath === image);

  // Check if the image data is available
  if (!imageData) {
    console.error(`Image "${image}" not found.`);
    return null;
  }

  return (
    <div className={`${styles.project} container layout-${layout}`} ref={projectListingRef}>
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
        <h3>{title}</h3>
        <p>{description}</p>
        <a href="#" className="button primary">View Project</a>
      </motion.div>
      {layout === 'laptop' && (
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
          rotate: rotate
        }}
        className={styles.projectImage}>
          <GatsbyImage
            image={imageData.childImageSharp.gatsbyImageData}
            alt={title}
            style={{ maxWidth: '100%' }}
          />
        </motion.div>
      )}
      {layout === 'tablet' && (
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
          rotate: rotate
        }}
        className={styles.projectImage}>
          <GatsbyImage
            image={imageData.childImageSharp.gatsbyImageData}
            alt={title}
            style={{ maxWidth: '50%' }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ProjectListing;
