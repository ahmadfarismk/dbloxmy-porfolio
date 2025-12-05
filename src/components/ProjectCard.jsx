import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ title, category, image, id }) => {
    return (
        <Link to={`/projects`} className={styles.card}>
            <div className={styles.imageWrapper}>
                <img src={image} alt={title} className={styles.image} />
                <div className={styles.overlay}>
                    <span className={styles.viewBtn}>View Project</span>
                </div>
            </div>
            <div className={styles.content}>
                <span className={styles.category}>{category}</span>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </Link>
    );
};

export default ProjectCard;
