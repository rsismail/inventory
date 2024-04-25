import React from 'react';
import styles from './DashboardView.module.css';

const DashboardTile = (props) => {
    const { value, label, icon } = props;
  return (
    <div className={styles.tileContainer}>
        <div className={styles.tileIconContainer}>
            <img src={icon}/>
            <div className={styles.tileLabel}>{label}</div>
        </div>
        <div className={styles.tileValue}>{value}</div>
    </div>
  )
}

export default DashboardTile