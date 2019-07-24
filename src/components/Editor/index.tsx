import React, { Component } from 'react';
import EditorContext from '../../common/context/EditorContext';
import Toolbar from '../Toolbar';
import styles from './index.scss';

export type Minder = ReturnType<typeof window.kityminder.Minder> | null;

interface IState {
  minder: Minder;
}

export default class Editor extends Component{
  state: IState = {
    minder: null,
  }

  render() {
    const { minder } = this.state;
    return (
      <div className={styles.container}>
        <EditorContext.Provider value={minder} >
          <Toolbar />
          <div id="J_ReactMindmap_Container" className={styles.editorWrapper}></div>
        </EditorContext.Provider>
      </div>
    )
  }

  componentDidMount() {
    const minder = new window.kityminder.Minder({
      renderTo: `#J_ReactMindmap_Container`
    });
      
    this.setState({
      minder,
    });
  }
}