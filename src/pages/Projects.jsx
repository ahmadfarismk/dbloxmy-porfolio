import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import styles from '../styles/Projects.module.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Tycoon', 'Simulator', 'Roleplay', 'Mini-game'];

    const projects = [
        {
            id: 1,
            title: 'Neon City Tycoon',
            category: 'Tycoon',
            image: 'https://placehold.co/600x400/1e293b/06b6d4?text=Neon+City'
        },
        {
            id: 2,
            title: 'Space Explorers',
            category: 'Simulator',
            image: 'https://placehold.co/600x400/1e293b/2563eb?text=Space+Explorers'
        },
        {
            id: 3,
            title: 'Fashion Runway',
            category: 'Roleplay',
            image: 'https://placehold.co/600x400/1e293b/ec4899?text=Fashion+Runway'
        },
        {
            id: 4,
            title: 'Zombie Survival',
            category: 'Mini-game',
            image: 'https://placehold.co/600x400/1e293b/ef4444?text=Zombie+Survival'
        },
        {
            id: 5,
            title: 'Pet Kingdom',
            category: 'Simulator',
            image: 'https://placehold.co/600x400/1e293b/f59e0b?text=Pet+Kingdom'
        },
        {
            id: 6,
            title: 'Mega Obby',
            category: 'Mini-game',
            image: 'https://placehold.co/600x400/1e293b/10b981?text=Mega+Obby'
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <div className="container section">
            <Reveal>
                <div className={styles.header}>
                    <h1 className="text-gradient">Our Projects</h1>
                    <p>Explore our portfolio of immersive Roblox experiences.</p>
                </div>
            </Reveal>

            {/* Filter Tabs */}
            <Reveal delay={0.1}>
                <div className={styles.filters}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </Reveal>

            {/* Projects Grid */}
            <div className={styles.grid}>
                {filteredProjects.map((project, index) => (
                    <Reveal key={project.id} delay={index * 0.1}>
                        <ProjectCard {...project} />
                    </Reveal>
                ))}
            </div>
        </div>
    );
};

export default Projects;
