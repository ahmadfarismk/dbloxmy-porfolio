import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, theme, toggleTheme }) => {
    return (
        <div className="layout">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
