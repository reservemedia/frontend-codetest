// Module
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

// File
import styles from './App.pcss';

const App = ({ children }) => {
  return (
    <div className={ styles.containerWrap }>
      <h1 style={ { color: '#fff', textAlign: 'center' } }>Reserve Front End Code Test</h1>
      { children }
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default connect()(App);
