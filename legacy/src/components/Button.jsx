import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Button.module.css';

const Button = ({
    children,
    to,
    onClick,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
