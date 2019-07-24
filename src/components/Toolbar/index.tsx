import React from 'react';
import EditorContext from '../../common/context/EditorContext';
import { Divider } from 'antd';
import styles from './index.scss';
import Icon from '../../common/Iconfont';
import { Minder } from '../Editor'

export default class Toolbar extends React.Component {
  handleClick = (minder: Minder) => {
    minder.execCommand('AppendChildNode', '子节点');
  }

  renderCommandSet(minder: Minder) {
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
          (minder) => (
            <div className={styles.toolbar}>
              { this.renderCommandSet(minder) }
            </div>
          )
        }
      </EditorContext.Consumer>
    )
  }
}