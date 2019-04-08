import React from 'react';
import { Divider } from 'antd';
import EditorContext from '../../common/context/EditorContext';
import styles from './index.scss';

export default class Toolbar extends React.Component {
  handleClick = (minder) => {
    minder.execCommand('AppendChildNode', '子节点');
  }

  render() {
    return (
      <EditorContext.Consumer>
        {
          ({minder}) => (
            <div className={styles.toolbar}>
              <button onClick={this.handleClick.bind(this, minder)}>insert</button>
            </div>
          )
        }
      </EditorContext.Consumer>
      
    )
  }
}