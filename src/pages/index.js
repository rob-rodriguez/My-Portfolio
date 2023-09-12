import * as React from "react"
import * as styles from './index.module.scss'
import Layout from '../components/layout';
import { StaticImage } from "gatsby-plugin-image"
import { ChevronsDown } from 'react-feather';
import { ChevronRight } from 'react-feather';

const IndexPage = () => {
  return (
    <Layout>
      <h1 className="sr-only">Robert Rodriguez: Web designer & developer in Orange County</h1>
      <div className={styles.hero}>
        <div className={styles.heroTextContainer}>
          <StaticImage src="../images/headshot-thumbnail.png" alt="" placeholder="blurred" quality={100} className={styles.headshotThumbnail} />
          <div>
            <p className={styles.heroTextTitle}>Hello, I'm Robert, a UI Designer & Web Developer.</p>
            <p className={styles.heroTextIntro}>I create <span>unique</span> web experiences.</p>

            <a href="#" className="button primary">Let's Work Together <ChevronRight size={18} /></a>
            &nbsp;&nbsp;&nbsp;
            <a href="#" className="button white outline">About Me <ChevronRight size={18} /></a>

          </div>
        </div>
        <button className={styles.downButton}><ChevronsDown /></button>
      </div>
      <div className="container small">
        Dolor aute veniam dolor est ullamco amet id voluptate proident duis. Cillum mollit ex ex ullamco dolor ipsum laboris Lorem culpa. Minim laboris excepteur duis sint. Quis tempor reprehenderit velit nostrud duis veniam in dolore eiusmod cupidatat pariatur. Ad cupidatat reprehenderit Lorem anim commodo. Sint ipsum ipsum aliqua culpa nulla nisi non.

Exercitation elit voluptate magna officia nulla nisi quis labore magna exercitation. Aliquip laborum cillum magna sunt nostrud. Minim consectetur anim esse labore voluptate irure adipisicing do do irure do ea tempor. Pariatur fugiat sit velit consequat consectetur fugiat labore voluptate. Ipsum exercitation aliqua aute amet dolore culpa magna dolor ex cupidatat ut ullamco anim. Non aute ut nisi ad anim est ullamco pariatur non duis.

Reprehenderit elit nisi esse commodo adipisicing excepteur anim exercitation. Ea ea culpa laboris dolor quis consectetur commodo esse laborum tempor. Mollit duis ad minim ut proident in quis velit aliqua. Consequat laborum excepteur nisi consequat dolor laborum.

Exercitation laborum non dolore quis. Velit do officia laboris labore minim. Sunt aliqua minim velit laboris elit qui ipsum labore anim in eu esse cupidatat.

Enim laboris tempor culpa ad commodo cillum excepteur occaecat qui aute aute non non duis. Magna irure aliquip anim aliqua in Lorem ut anim nulla ut veniam non. Excepteur eiusmod deserunt consequat adipisicing duis reprehenderit labore ea consectetur mollit duis minim commodo esse. Excepteur Lorem mollit occaecat nostrud cillum magna ipsum. Fugiat elit sint fugiat reprehenderit eiusmod cupidatat. Esse ipsum consequat id nulla excepteur qui.
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
