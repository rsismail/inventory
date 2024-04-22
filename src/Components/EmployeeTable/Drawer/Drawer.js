import React from 'react';
import { Button, Drawer, Input, Select } from 'antd';
import styles from './Drawer.module.css';
import { options } from '../EmployeeTable.constants';

const DrawerComponent = (props) => {
    const { onClose, state, handleChange, onSubmit, isDrawerModeEdit, handleEditSubmit } = props;
    console.log(state.employeeFormData, 'pop')
    const { email = '', name, employeeId, phoneNumber, jobRole } = state.employeeFormData;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = String(email).toLowerCase().match(regex);

    return (
        <Drawer
            title="Employee Form"
            placement="right"
            width={500}
            onClose={onClose}
            open={true}
        >
            <div>
                <Input onChange={(e) => handleChange(e, 'name')} value={name} className={styles.formInputs} placeholder="Name" />
                <Input onChange={(e) => handleChange(e, 'employeeId')} value={employeeId} className={styles.formInputs} placeholder="Employee Id" />
                <input style={{ borderColor: (email.length > 2 && isEmailValid === null) ? 'red' : '#d9d9d9' }} onChange={(e) => handleChange(e, 'email')} value={email} className={`${styles.emailBox} ${styles.formInputs}`} type='email' placeholder='Email' required />
                <Input onChange={(e) => handleChange(e, 'phoneNumber')} value={phoneNumber} className={styles.formInputs} placeholder="Phone Number" />
                <Select onChange={(e) => handleChange(e, 'jobRole')} className={styles.formInputs} value={jobRole ? jobRole : ''} style={{ width: '100%' }} options={options} placeholder="Job Role" ></Select>
                <div className={styles.formBtnContainer}>
                    <Button type="territiary" style={{ border: '1px solid #d9d9d9', marginRight: '2rem' }} onClick={onClose}>Close</Button>
                    {!isDrawerModeEdit ?
                        <Button type="primary" onClick={onSubmit}>Submit</Button> :
                        <Button type="primary" onClick={() => handleEditSubmit(employeeId)}>Update</Button>}
                </div>
            </div>
        </Drawer>
    )
}

export default DrawerComponent