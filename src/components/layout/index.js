import * as React from 'react';
import * as styles from './layout.module.scss';
import { Scrollbars } from 'react-custom-scrollbars-2';
import Header from '../header';

export default class Layout extends React.Component {
  constructor(children, props) {
    super(children, props);
    this.state = {
      headerClass: ''
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll(values) {
    // console.log(values);
    if (values.scrollTop >= 200) {
      this.setState({
        headerClass: 'fixed'
      });
    } else {
      this.setState({
        headerClass: ''
      })
    }
  }

  render() {
    return (
      <Scrollbars id="site-wrapper" className={styles.siteWrapper} onScrollFrame={this.handleScroll}>
        <Header headerClass={this.state.headerClass} />
        <main className={styles.mainContent}>
          {this.props.children}
        </main>
      </Scrollbars>
    );
  }
}