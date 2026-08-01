import React from 'react';
import { Gamepad2, Code, Layers, Globe, Cpu, BarChart } from 'lucide-react';
import Reveal from '../components/Reveal';
import styles from '../styles/Services.module.css';

const Services = () => {
    const services = [
        {
            icon: Gamepad2,
            title: 'Full Game Development',
            description: 'From concept to launch, we handle every aspect of game creation. Our team builds immersive worlds, engaging mechanics, and polished user experiences tailored for the Roblox platform.',
            features: ['Game Design Document', 'Level Design', 'Programming', 'QA Testing']
        },
        {
            icon: Code,
            title: 'Scripting & Systems',
            description: 'We write clean, optimized, and secure Luau code. Whether you need complex game mechanics, data store systems, or anti-cheat solutions, our scripters deliver robust performance.',
            features: ['Custom Mechanics', 'DataStores', 'UI Programming', 'Server Optimization']
        },
        {
            icon: Layers,
            title: 'UI/UX Design',
            description: 'User interface is key to retention. We design intuitive, responsive, and visually stunning interfaces that enhance the player experience and drive monetization.',
            features: ['Wireframing', 'Interactive UI', 'Mobile Optimization', 'Iconography']
        },
        {
            icon: Globe,
            title: 'World Building',
            description: 'We create breathtaking environments that tell a story. Our builders use advanced techniques to optimize part counts while maximizing visual fidelity.',
            features: ['Map Design', 'Lighting & Atmosphere', '3D Modeling', 'Performance Tuning']
        },
        {
            icon: Cpu,
            title: 'Asset Creation',
            description: 'High-quality 3D models, animations, and VFX. We create custom assets that fit your game\'s art style perfectly.',
            features: ['3D Modeling (Blender)', 'Animation', 'VFX / Particles', 'Sound Design']
        },
        {
            icon: BarChart,
            title: 'Game Analytics & Live Ops',
            description: 'Launch is just the beginning. We help you track player behavior, optimize monetization, and plan content updates to keep your game growing.',
            features: ['Analytics Setup', 'Monetization Strategy', 'Update Planning', 'Community Management']
        }
    ];

    const process = [
        { step: '01', title: 'Discovery', desc: 'We discuss your vision, goals, and requirements.' },
        { step: '02', title: 'Planning', desc: 'We create a detailed roadmap and design document.' },
        { step: '03', title: 'Development', desc: 'Our team builds the game with regular updates.' },
        { step: '04', title: 'Testing', desc: 'Rigorous QA to ensure a bug-free experience.' },
        { step: '05', title: 'Launch', desc: 'We help you release and market your game.' },
    ];

    return (
        <div className="container section">
            <Reveal>
                <div className={styles.header}>
                    <h1 className="text-gradient">Our Services</h1>
                    <p>End-to-end solutions for creating the next big Roblox hit.</p>
                </div>
            </Reveal>

            {/* Services Grid */}
            <div className={styles.grid}>
                {services.map((service, index) => (
                    <Reveal key={index} delay={index * 0.1}>
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <service.icon size={32} />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <ul className={styles.features}>
                                {service.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Process Section */}
            <section className={styles.process}>
                <Reveal>
                    <h2>Development Process</h2>
                </Reveal>
                <div className={styles.timeline}>
                    {process.map((item, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className={styles.timelineItem}>
                                <div className={styles.stepNumber}>{item.step}</div>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Industries */}
            <section className={styles.industries}>
                <Reveal>
                    <h2>Industries We Serve</h2>
                    <div className={styles.industryTags}>
                        <span>Gaming & Entertainment</span>
                        <span>Education & Learning</span>
                        <span>Brand Experiences</span>
                        <span>Virtual Events</span>
                        <span>Music & Concerts</span>
                        <span>Fashion & Retail</span>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

export default Services;
