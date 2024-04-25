import React, { useEffect, useState } from 'react';
import styles from './DashboardView.module.css';
import DashboardTile from './DashboardTile';
import { useSelector } from 'react-redux';
import cart from '../../assets/cart-shopping-solid.svg';

const DashboardView = () => {
  const { productList, disableList } = useSelector(store => store.inventory);
  const [listWithoutDisabledProduct, setListWithoutDisabledProduct] = useState(productList);
  const [dashboardValues, setDachboardValues] = useState({
    totalProduct: 0,
    totalPrice: 0,
    outOfStocks: 0,
    noOfcategory: 0,
  });

  useEffect(() => {
    const updatedList = productList.filter(({ name }) => !disableList.includes(name) )
    setListWithoutDisabledProduct(updatedList);
  }, [productList, disableList]);

  useEffect(() => {
    const totalProduct = listWithoutDisabledProduct.length;

    const totalPrice = listWithoutDisabledProduct.reduce((acc, currentValue) => {
      const price = currentValue.price.split('$')[1];
      return acc + Number(price)
    }, 0);

    const outOfStocks = listWithoutDisabledProduct.reduce((acc, currentValue) => {
      if (currentValue.quantity === 0) return acc + 1;
      return acc
    }, 0);

    const noOfcategory = [];
    listWithoutDisabledProduct.forEach(({ category }) => {
      if (!noOfcategory.includes(category)) noOfcategory.push(category)
    });

    setDachboardValues({
      totalProduct,
      totalPrice,
      outOfStocks,
      noOfcategory: noOfcategory.length,
    });

  }, [productList, disableList, listWithoutDisabledProduct]);



  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.header}>Inventory Stats</h1>
      <div className={styles.dashboard}>
        <DashboardTile icon={cart} label="Total Product" value={dashboardValues.totalProduct} />
        <DashboardTile icon={cart} label="Total store value" value={dashboardValues.totalPrice} />
        <DashboardTile icon={cart} label="Out of stocks" value={dashboardValues.outOfStocks} />
        <DashboardTile icon={cart} label="No of category" value={dashboardValues.noOfcategory} />
      </div>
    </div>
  )
}

export default DashboardView;
