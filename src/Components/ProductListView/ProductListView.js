import React, { useState } from 'react';
import styles from './ProductListView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProductList, setDisableList } from '../../store/reducer';
import EditModal from './EditModal';

const ProductListView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductName, setSelectedProductName] = useState('');
    const dispatch = useDispatch();
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const { productList, disableList } = useSelector(store => store.inventory);

    const handleEdit = (name) => {
        setIsModalOpen(true);
        setSelectedProductName(name)
    };

    const handleDelete = (deletedName) => {
        const updatedList = productList.filter(({ name }) => name !== deletedName);
        dispatch(setProductList(updatedList));
    }
    const handleDisable = (disableName) => {
        if(disableList.includes(disableName)) {
            dispatch(setDisableList(disableList.filter((name) => name !== disableName)));
            return
        }
        dispatch(setDisableList([...disableList, disableName]));
    }

    return (
        <div className={styles.listViewContainer}>
            <table width="100%" style={{ borderCollapse: 'collapse' }}>
                <thead>
                    <tr className={styles.tableHeader}>
                        <td><div className={styles.tableHeadTile}>Name</div></td>
                        <td><div className={styles.tableHeadTile}>category</div></td>
                        <td><div className={styles.tableHeadTile}>Price</div></td>
                        <td><div className={styles.tableHeadTile}>Quantity</div></td>
                        <td><div className={styles.tableHeadTile}>Value</div></td>
                        <td><div className={styles.tableHeadTile}>Action</div></td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map(({ name, category, value, quantity, price }) => {
                            return (<tr className={styles.tableBody}>
                                <td style={{ color: disableList.includes(name) ? '#070808' : '#5c5c5c'}}>{name}</td>
                                <td style={{ color: disableList.includes(name) ? '#070808' : '#5c5c5c'}}>{category}</td>
                                <td style={{ color: disableList.includes(name) ? '#070808' : '#5c5c5c'}}>{value}</td>
                                <td style={{ color: disableList.includes(name) ? '#070808' : '#5c5c5c'}}>{quantity}</td>
                                <td style={{ color: disableList.includes(name) ? '#070808' : '#5c5c5c'}}>{price}</td>
                                <td>
                                    <div className={styles.actionContainer}>
                                        <div style={{ color: disableList.includes(name) ? '#070808' : '#5c5c5c'}} onClick={() => { if (!disableList.includes(name)) handleEdit(name)}}>Edit</div>
                                        <div style={{ color: disableList.includes(name) ? '#070808' : '#5c5c5c'}} onClick={() => handleDisable(name)}>disable</div>
                                        <div style={{ color: disableList.includes(name) ? '#070808' : '#5c5c5c'}} onClick={() => {if (!disableList.includes(name)) handleDelete(name)}}>delete</div>
                                    </div>
                                </td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
            <EditModal selectedProductName={selectedProductName} handleCancel={handleCancel} isModalOpen={isModalOpen} />
        </div>
    )
}

export default ProductListView