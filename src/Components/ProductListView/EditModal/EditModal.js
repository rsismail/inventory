import React, { useState, useEffect } from 'react';
import { Button, Modal, InputNumber, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setProductList } from '../../../store/reducer';
import styles from '../ProductListView.module.css';
const App = (props) => {
    const { isModalOpen, handleCancel, selectedProductName } = props;
    const { productList } = useSelector(store => store.inventory);
    const [selectedProduct, setSelectedProduct] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const modalList = productList.find(({ name }) => name === selectedProductName);
        setSelectedProduct(modalList || {})
    }, [selectedProductName])

    const handleOk = () => {
        const updatedList = productList.map((el) => {
            if (el.name === selectedProductName) {
                return selectedProduct
            }
            return el
        })
        dispatch(setProductList(updatedList));
        handleCancel()
    }

    const handleInputChange = (type, value) => {
        console.log(type, value)
        const selectedProductCopy = { ...selectedProduct };
        if (type === 'price') {
            selectedProductCopy[type] = `$${value}`;
        } else selectedProductCopy[type] = value;
        setSelectedProduct(selectedProductCopy);
    }
    const { value = '', category = '', quantity = '', price = '' } = selectedProduct || {};

    return (
        <>
            <Modal
                centered
                title={
                    <div>
                        <h2>Edit Product</h2>
                        <div>{selectedProductName}</div>
                    </div>
                }
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        Save
                    </Button>
                ]}
            >
                <div>
                    <label>Category</label>
                    <Input onChange={(e) => handleInputChange('category', e.target.value)} value={category} />
                    <label>Price</label>
                    <InputNumber className={styles.inputNumber} onChange={(e) => handleInputChange('price', e)} value={Number((price || '').split('$')[1])} />
                    <label>Quantity</label>
                    <InputNumber className={styles.inputNumber} onChange={(e) => handleInputChange('quantity', e)} value={quantity} />
                    <label>Value</label>
                    <InputNumber className={styles.inputNumber} onChange={(e) => handleInputChange('value', e)} value={Number((value || ''))} />
                </div>

            </Modal>
        </>
    );
};
export default App;