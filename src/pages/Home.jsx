import React from 'react';
import { Gamepad2, Code, Layers, Users, Zap, Globe } from 'lucide-react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import styles from '../styles/Home.module.css';

const Home = () => {
    const services = [
        {
            icon: Gamepad2,
            title: 'Game Development',
            description: 'Full-cycle Roblox game development from concept to launch, ensuring immersive gameplay and high retention.'
        },
        {
            icon: Code,
            title: 'Scripting & Systems',
            description: 'Advanced Luau scripting for complex mechanics, data stores, and secure game systems.'
        },
        {
            icon: Layers,
            title: 'UI/UX Design',
            description: 'Intuitive and stunning user interfaces designed specifically for the Roblox platform.'
        },
        {
            icon: Globe,
            title: 'World Building',
            description: 'Detailed and optimized map design that brings your vision to life with atmosphere and depth.'
        }
    ];

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
        }
    ];

    return (
        <div className="home">
            <Hero />

            {/* Services Section */}
            <section className="section container">
                <Reveal>
                    <div className={styles.sectionHeader}>
                        <h2 className="text-gradient">Our Expertise</h2>
                        <p>Comprehensive solutions for your Roblox success.</p>
                    </div>
                </Reveal>
                <div className={styles.grid4}>
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <ServiceCard {...service} />
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Projects Section */}
            <section className="section" style={{ background: 'var(--surface-light)' }}>
                <div className="container">
                    <Reveal>
                        <div className={styles.sectionHeader}>
                            <h2>Featured Projects</h2>
                            <Button to="/projects" variant="outline">View All</Button>
                        </div>
                    </Reveal>
                    <div className={styles.grid3}>
                        {projects.map((project, index) => (
                            <Reveal key={project.id} delay={index * 0.1}>
                                <ProjectCard {...project} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strengths Section */}
            <section className="section container">
                <Reveal>
                    <div className={styles.strengths}>
                        <div className={styles.strengthItem}>
                            <Users size={40} className={styles.strengthIcon} />
                            <h3>Expert Team</h3>
                            <p>Veterans in Roblox development.</p>
                        </div>
                        <div className={styles.strengthItem}>
                            <Zap size={40} className={styles.strengthIcon} />
                            <h3>Fast Delivery</h3>
                            <p>Optimized workflows for speed.</p>
                        </div>
                        <div className={styles.strengthItem}>
                            <Layers size={40} className={styles.strengthIcon} />
                            <h3>Scalable Code</h3>
                            <p>Built for millions of players.</p>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Contact CTA */}
            <section className="section container">
                <Reveal>
                    <div className={styles.cta}>
                        <h2>Ready to Build Your World?</h2>
                        <p>Let's turn your idea into the next big Roblox hit.</p>
                        <Button to="/contact" variant="primary">Start a Project</Button>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default Home;
