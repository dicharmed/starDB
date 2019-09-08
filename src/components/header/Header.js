import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <nav className={styles.navBar}>

            <div className={styles.navBar__left}>
                <a className={styles.logoName} href="#">Star DB</a>
            </div>

            <nav className={styles.navBar__right}>
                <div className={styles.ulList}>
                    <div className={styles.ulList__item}>
                        <a className={styles.ulList__name} href="#">People</a>
                    </div>
                    <div className={styles.ulList__item}>
                        <a className={styles.ulList__name} href="#">Planets</a>
                    </div>
                    <div className={styles.ulList__item}>
                        <a className={styles.ulList__name} href="#">Starships</a>
                    </div>
                </div>
            </nav>

        </nav>
    )
}

export default Header;