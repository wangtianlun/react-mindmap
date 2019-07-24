import React, { memo } from 'react';
import styles from './index.scss';

function Iconfont({ type }) {
  return <i className={`${styles.iconfont} ${styles['icon-' + type ]}`} title={type}/>
}

export default memo(Iconfont);


