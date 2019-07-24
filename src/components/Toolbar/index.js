import React from 'react';
import EditorContext from '../../common/context/EditorContext';
import { Divider } from 'antd';
import styles from './index.scss';
import Icon from '../../common/Iconfont';

export default class Toolbar extends React.Component {
  handleClick = (minder) => {
    minder.execCommand('AppendChildNode', '子节点');
  }

  renderCommandSet(minder) {
    return (<>
      <div className={styles.command} onClick={this.handleClick.bind(this, minder)} data-command="undo">
        <Icon type="undo"/>
      </div>
      <div className={styles.command} onClick={this.handleClick.bind(this, minder)} data-command="redo">
        <Icon type="redo"/>
      </div>
      <Divider type="vertical" />
    </>);
  }

  render() {
    return (
      <EditorContext.Consumer>
        {
          ({ minder }) => (
            <div className={styles.toolbar}>
              { this.renderCommandSet(minder) }
            </div>
          )
        }
      </EditorContext.Consumer>
      
    )
  }
}