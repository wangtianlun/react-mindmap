import React, { Component } from 'react';
import EditorContext from '../../common/context/EditorContext';
import Toolbar from '../Toolbar';
import styles from './index.scss';

export default class Editor extends Component {
  render() {
    return (
      <div className={styles.container}>
        <EditorContext.Provider value={{ minder: this.props.minder }} >
          <Toolbar />
          <div id="minder-container"></div>
        </EditorContext.Provider>
      </div>
    )
  }
}