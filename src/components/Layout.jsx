import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

const Layout = ({ children, theme, toggleTheme }) => {
    return (
        <div className="layout">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className={styles.mainContent}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
