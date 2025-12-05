import React from 'react';
import Button from './Button';
import styles from '../styles/Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.grid}></div>
                <div className={styles.block1}></div>
                <div className={styles.block2}></div>
                <div className={styles.block3}></div>
            </div>

            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Crafting <span className="text-gradient">Next-Gen</span> <br />
                    Roblox Experiences
                </h1>
                <p className={styles.subtitle}>
                    We are D’Blox Studios MY. A premier game development studio building immersive worlds and engaging gameplay on Roblox.
                </p>
                <div className={styles.actions}>
                    <Button to="/contact" variant="primary">Enquire Now</Button>
                    <Button to="/projects" variant="outline">View Projects</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
