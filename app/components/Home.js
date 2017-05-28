// @flow
import React, { Component } from 'react';
import styles from './Home.css';
import {getApplications, openApp} from '../utils';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from '../actions/applications';

class Home extends Component {

  onClick = () => {
    getApplications()
      .then((applications) => {
        this.props.updateApplications(applications)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2 onClick={this.onClick}>Home</h2>
          <img src="file:///Users/manojsinghnegi/Downloads/AppIcon.icns" />
          {this.props.appStore.applications.map((application, index) => {
            return <p onClick={() => openApp(application)} key={index}>
              {application.name}
            </p>
          })}
        </div>
      </div>
    );
  }
}

const HomeContainer = connect((store) => (
  {
    appStore: store.applications
  }
),(dispatch) => {
  return bindActionCreators(AppActions, dispatch)
})(Home)

export default HomeContainer;
