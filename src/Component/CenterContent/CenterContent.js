import React from 'react';
import { Card } from 'antd';
import styles from './CenterContent.module.css';
import SvgImage from '../../assets/SvgImage';
import wallet from '../../assets/wallet-solid.svg';
import ellipsis from '../../assets/ellipsis-vertical-solid.svg'
import pie from '../../assets/chart-pie-solid.svg';
import userCheck from '../../assets/user-check-solid.svg';
import currency from '../../assets/money-bill-1-regular.svg';
import ApexChart from './Pie';
import Donut from './Donut';
import useWindowDimensions from '../useWindowDimension';

const CenterContent = () => {
    const { height, width } = useWindowDimensions();
    console.log(height, width);
    return (
        <div className='centerContent'>
            <div className={styles.topCardContainer}>
                <Card bordered={false} className={styles.topCard}>
                    <div className={styles.topCardIconContainer}>
                        <SvgImage url={wallet} className='' />
                        <SvgImage url={ellipsis} className='' />
                    </div>
                    <p className={styles.topCurrency}>$143,432</p>
                    <p className={styles.topCurrency}>Your bank balance</p>
                </Card>
                <Card bordered={false} className={styles.topCard}>
                    <div className={styles.topCardIconContainer}>
                        <SvgImage url={pie} className='' />
                        <SvgImage url={ellipsis} className='' />
                    </div>
                    <p className={styles.topCurrency}>Revenue generated</p>
                    <p className={styles.topCurrency}>This week's profits</p>
                </Card>
                <Card bordered={false} className={styles.topCard}>
                    <div className={styles.topCardIconContainer}>
                        <SvgImage url={userCheck} className='' />
                        <SvgImage url={ellipsis} className='' />
                    </div>
                    <p className={styles.topCurrency}>7</p>
                    <p className={styles.topCurrency}>Employees working today</p>
                </Card>
                <Card bordered={false} className={styles.topCard}>
                    <div className={styles.topCardIconContainer}>
                        <SvgImage url={currency} className='' />
                        <SvgImage url={ellipsis} className='' />
                    </div>
                    <p className={styles.topCurrency}>$3286.00</p>
                    <p className={styles.topCurrency}>This week's card spending</p>
                </Card>
            </div>
            <div className={styles.middleCardContainer}>
                <div className={styles.middleLeftContainer}>
                    <Card bordered={false} className={styles.middleLeft}>
                        <p>New clients</p>
                        <div className={styles.clientContainer}><p>54</p><div className={styles.greenTile}>+18.7%</div></div>
                    </Card>
                    <Card bordered={false} className={styles.middleLeft}>
                        <p>Invoices overdue</p>
                        <div className={styles.clientContainer}><p>6</p><div className={styles.orangeTile}>+2.7%</div></div>
                    </Card>
                </div>
                <Card bordered={false} className={styles.middleRight}>
                    {/* <div><ApexChart /></div> */}
                    <div><Donut width={width} /></div>
                </Card>
            </div>
            <Card bordered={false} className={styles.bottomCardContainer}>
            <p className={styles.recentEmails}>Recent emails</p>
            <div className={styles.tableContainer}>
                <div className={styles.tableContent}>
                    <div className={styles.tableUserIcon}></div>
                    <div className={styles.nameActionTime}>Hannah Morgan</div>
                    <div className={styles.nameActionTime}>Meeting Scheduled</div>
                    <div className={styles.nameActionTime}>1:24 PM</div>
                </div>
                <div className={styles.tableContent}>
                    <div className={styles.tableUserIcon}></div>
                    <div className={styles.nameActionTime}>Megan Clark</div>
                    <div className={styles.nameActionTime}>Updated Marketing Campaign</div>
                    <div className={styles.nameActionTime}>11:48 PM</div>
                </div>
                <div className={styles.tableContent}>
                    <div className={styles.tableUserIcon}></div>
                    <div className={styles.nameActionTime}>Ally James</div>
                    <div className={styles.nameActionTime}>Updated Marketing Campaign</div>
                    <div className={styles.nameActionTime}>10:19 PM</div>
                </div>
            </div>
            </Card>
        </div>
    )
}

export default CenterContent