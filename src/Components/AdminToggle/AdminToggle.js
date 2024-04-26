import React, { useState } from 'react';
import { Switch } from 'antd';
import styles from './AdminToggle.module.css';

const AdminToggle = (props) => {
    const { isChecked, handleSwitch } = props;
  return (
    <div className={styles.adminContainer}>
       <label>Admin</label> <Switch className={styles.switch} value={isChecked} onChange={handleSwitch} /> <label>User</label>
    </div>
  )
}

export default AdminToggle