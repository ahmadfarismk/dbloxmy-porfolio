import React from 'react';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';
import Reveal from '../components/Reveal';
import styles from '../styles/About.module.css';

const About = () => {
    const team = [
        { name: 'Danial Iman', role: 'Founder', image: 'https://placehold.co/400x400/1e293b/06b6d4?text=Danial' },
        { name: 'Ahmad Faris', role: 'Lead Developer', image: 'https://placehold.co/400x400/1e293b/ec4899?text=Faris' },
        { name: 'Luqman Hazim', role: 'Developer', image: 'https://placehold.co/400x400/1e293b/2563eb?text=Luqman' },
    ];

    return (
        <div className="container section">
            <Reveal>
                <div className={styles.header}>
                    <h1 className="text-gradient">About D'Blox Studios MY</h1>
                    <p>Pioneering the future of interactive entertainment on Roblox.</p>
                </div>
            </Reveal>

            {/* Company Background */}
            <section className={styles.story}>
                <Reveal>
                    <div className={styles.storyContent}>
                        <h2>Our Story</h2>
                        <p>
                            Founded in Kuala Lumpur, D'Blox Studios MY started with a simple mission: to create Roblox experiences that push the boundaries of what's possible on the platform.
                            What began as a small team of passionate gamers has grown into a full-service development studio working with brands and creators globally.
                        </p>
                        <p>
                            We combine technical expertise with creative storytelling to build worlds that players love to return to.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className={styles.storyImage}>
                        <img src="https://placehold.co/600x400/1e293b/06b6d4?text=Studio+Office" alt="Our Studio" />
                    </div>
                </Reveal>
            </section>

            {/* Vision, Mission, Values */}
            <section className={styles.values}>
                <Reveal delay={0.1}>
                    <div className={styles.valueCard}>
                        <Eye className={styles.icon} size={40} />
                        <h3>Vision</h3>
                        <p>To be the leading Roblox development studio in Southeast Asia, setting the standard for quality and innovation.</p>
                    </div>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className={styles.valueCard}>
                        <Target className={styles.icon} size={40} />
                        <h3>Mission</h3>
                        <p>To craft immersive, high-performance games that connect people and create unforgettable digital memories.</p>
                    </div>
                </Reveal>
                <Reveal delay={0.3}>
                    <div className={styles.valueCard}>
                        <Heart className={styles.icon} size={40} />
                        <h3>Core Values</h3>
                        <p>Creativity, Integrity, Community, and Excellence in every line of code and pixel we place.</p>
                    </div>
                </Reveal>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whyUs}>
                <Reveal>
                    <h2>Why Choose Us?</h2>
                    <div className={styles.reasons}>
                        <div className={styles.reasonItem}>
                            <CheckCircle className={styles.checkIcon} />
                            <span>Proven track record with millions of visits</span>
                        </div>
                        <div className={styles.reasonItem}>
                            <CheckCircle className={styles.checkIcon} />
                            <span>End-to-end development services</span>
                        </div>
                        <div className={styles.reasonItem}>
                            <CheckCircle className={styles.checkIcon} />
                            <span>Dedicated support and updates</span>
                        </div>
                        <div className={styles.reasonItem}>
                            <CheckCircle className={styles.checkIcon} />
                            <span>Deep understanding of Roblox monetization</span>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* Team Section */}
            <section className={styles.team}>
                <Reveal>
                    <h2>Meet the Team</h2>
                </Reveal>
                <div className={styles.teamGrid}>
                    {team.map((member, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className={styles.teamCard}>
                                <img src={member.image} alt={member.name} className={styles.teamImage} />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
