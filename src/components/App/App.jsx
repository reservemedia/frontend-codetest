import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './App.css';

const App = ({ children }) => {
  return (
    <div className={ styles.containerWrap }>
      <h1 className={ styles.centered }>Reserve Front End Code Test</h1>
      <p className={ styles.centered }>
        check out <a href="../../readme.md">readme.md</a> in the project root to
        get started!
      </p>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node,
};

export default connect()(App);
