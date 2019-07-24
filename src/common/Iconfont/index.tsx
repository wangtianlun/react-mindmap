import React, { memo } from 'react';
import styles from './index.scss';

interface IProps {
  type: string;
}

function Iconfont({ type }: IProps) {
  return <i className={`${styles.iconfont} ${styles['icon-' + type ]}`} title={type}/>
}

export default memo(Iconfont);


