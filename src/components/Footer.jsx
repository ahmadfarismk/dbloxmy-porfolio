import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <h3 className={styles.logo}>D'Blox Studios <span className={styles.my}>MY</span></h3>
                    <p className={styles.description}>
                        Crafting immersive Roblox experiences with next-gen design and gameplay.
                    </p>
                </div>

                <div className={styles.column}>
                    <h4>Quick Links</h4>
                    <ul className={styles.links}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Connect</h4>
                    <div className={styles.socials}>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Github"><Github size={20} /></a>
                        <a href="mailto:hello@dblox.my" aria-label="Email"><Mail size={20} /></a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} D'Blox Studios MY. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
