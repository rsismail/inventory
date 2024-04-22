import React from 'react';
import { Button } from 'antd';
import styles from './EmployeeHeader.module.css';

const EmployeeHeader = ({ showDrawer, state }) => {
  const { employeeTableData } = state;
  return (
    <div className={styles.headerContainer}>
        <div className={styles.textContainer}>
            <div className={styles.text}>
                <h1>Users</h1>
                <div>{employeeTableData.length} Employees</div>
            </div>
            <p>See your active employees and make changes</p>
        </div>
        <Button type="primary" onClick={showDrawer}>Add Employee</Button>
    </div>
  )
}

export default EmployeeHeader