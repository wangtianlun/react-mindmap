import React from 'react';
import EditorContext from '../../common/context/EditorContext';
import styles from './index.scss';
import Icon from '../../common/Iconfont';

export default class Toolbar extends React.Component {
  handleClick = (minder) => {
    minder.execCommand('AppendChildNode', '子节点');
  }

  render() {
    return (
      <EditorContext.Consumer>
        {
          ({ minder }) => (
            <div className={styles.toolbar}>
              <div className={styles.command} onClick={this.handleClick.bind(this, minder)}>
                <Icon type="undo"/>
              </div>
            </div>
          )
        }
      </EditorContext.Consumer>
      
    )
  }
}