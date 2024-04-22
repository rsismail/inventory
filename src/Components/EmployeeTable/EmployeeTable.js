/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useReducer } from 'react';
import styles from './EmployeeTable.module.css';
import imageUser from '../../assets/user-regular.svg'
import imageEdit from '../../assets/pen-solid.svg'
import { message } from "antd";
import imageDelete from '../../assets/trash-solid.svg'
import Drawer from './Drawer';
import { INITIAL_STATE } from './EmployeeTable.constants';
import { reducer } from './EmployeeTable.helper';
import { isFormValid } from './Drawer/FormValidation';

const EmployeeTable = (props) => {
    const { open, state, dispatch, setOpen } = props;
    const [messageApi, contextHolder] = message.useMessage();
    const [isDrawerModeEdit, setIsDrawerModeEdit] = useState(false);
    const onClose = () => {
        setOpen(false);
        dispatch({ type: 'SET_TO_INITIAL', value: INITIAL_STATE })
        setIsDrawerModeEdit(false);
    };

    const handleChange = (e, type) => {
        if (type !== 'jobRole') {
            dispatch({ type, value: e.target.value });
            return
        }
        dispatch({ type, value: e });
    }

    const onSubmit = () => {
        if (isFormValid(state)) {
            const { employeeTableData, employeeFormData } = state;
            const updatedTableData = [...employeeTableData];
            updatedTableData.push(employeeFormData);
            dispatch({ type: 'ON_SUBMIT', value: updatedTableData });
            onClose();
            messageApi.success('Employee Added Successfully');
        } else {
            messageApi.error('Please fill all the field');
        }
    }

    const onEditDrawerOpen = (data) => {
        setOpen(true);
        setIsDrawerModeEdit(true);
        dispatch({ type: 'ON_EDIT_DRAWER_MODE', value: data });
    }

    const handleDelete = (id) => {
        const { employeeTableData } = state;
        const updatedTableData = employeeTableData.filter(({ employeeId }) => employeeId !== id);
        dispatch({ type: 'ON_DELETE', value: updatedTableData });
    }

    const handleEditSubmit = (employeeId) => {
        console.log({ employeeId });
        if (isFormValid(state)) {
            const { employeeTableData, employeeFormData } = state;
            const updatedTableData = employeeTableData.map((el) => {
                
                if(el.employeeId === employeeFormData.employeeId) {
                    console.log(el.employeeId, 'lopp')
                    return employeeFormData
                }
                return el
            })
            dispatch({ type: 'ON_SUBMIT', value: updatedTableData });
            onClose();
            messageApi.success('Employee Edited Successfully');
        } else {
            messageApi.error('Please fill all the field');
        }
    }
    return (
        <div className={styles.tableContainer}>
            {contextHolder}
            <table width="100%" style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <td>Employee Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Ph Number</td>
                        <td>Job Role</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.employeeTableData.map((data) => {
                            const { email, name, employeeId, phoneNumber, jobRole } = data
                            return (<tr className={styles.tableBody}>
                                <td>00{employeeId}</td>
                                <td><div className={styles.userContainer}><div><img src={imageUser} /></div><span>{name}</span></div></td>
                                <td>{email}</td>
                                <td>{phoneNumber}</td>
                                <td>{jobRole}</td>
                                <td>
                                    <div className={styles.actionContainer}>
                                        <div onClick={() => {onEditDrawerOpen(data)}}><img src={imageEdit} /></div>
                                        <div onClick={() => handleDelete(employeeId)}><img src={imageDelete} /></div>
                                    </div>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            {open && (<Drawer
                isDrawerOpen={open}
                onClose={onClose}
                state={state}
                dispatch={dispatch}
                handleChange={handleChange}
                onSubmit={onSubmit}
                handleEditSubmit={handleEditSubmit}
                isDrawerModeEdit={isDrawerModeEdit}
            />)}
        </div>
    )
}

export default EmployeeTable