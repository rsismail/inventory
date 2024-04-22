import React from 'react';
import styles from './Leftnav.module.css';
import Box from '../../assets/box-solid.svg';
import chartLine from '../../assets/chart-line-solid.svg';
import usersCheck from '../../assets/user-check-solid.svg';
import note from '../../assets/note-sticky-solid.svg';
import settings from '../../assets/gear-solid.svg';
import SvgImage from '../../assets/SvgImage';

const LeftNav = () => {
    return (
        <div className={`${styles.leftnavContainer} leftnav`}>
            <div className={styles.leftIconContainer}>
                <div className={styles.selectedLine}></div>
                <SvgImage url={Box} className='imageSvg' />
            </div>
            <div className={styles.leftIconContainer}>
                <div></div>
                <SvgImage url={chartLine} className='imageSvg' />
            </div>
            <div className={styles.leftIconContainer}>
                <div></div>
                <SvgImage url={usersCheck} className='imageSvg' />
            </div>
            <div className={styles.leftIconContainer}>
                <div></div>
                <SvgImage url={note} className='imageSvg' />
            </div>
            <div className={styles.leftIconContainer}>
                <div></div>
                <SvgImage url={settings} className='imageSvg' />
            </div>
        </div>
    )
}

export default LeftNav