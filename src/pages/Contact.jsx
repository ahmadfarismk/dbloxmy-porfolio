import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send } from 'lucide-react';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import styles from '../styles/Contact.module.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        company: '',
        service: 'Game Development',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will get back to you shortly.');
        setFormData({
            name: '',
            phone: '',
            email: '',
            company: '',
            service: 'Game Development',
            message: ''
        });
    };

    return (
        <div className="container section">
            <Reveal>
                <div className={styles.header}>
                    <h1 className="text-gradient">Get in Touch</h1>
                    <p>Ready to start your project? Fill out the form or contact us directly.</p>
                </div>
            </Reveal>

            <div className={styles.grid}>
                {/* Contact Info & Map */}
                <div className={styles.infoColumn}>
                    <Reveal delay={0.1}>
                        <div className={styles.infoCard}>
                            <h3>Contact Information</h3>
                            <div className={styles.infoItem}>
                                <MapPin className={styles.icon} />
                                <div>
                                    <p className={styles.label}>Office Address</p>
                                    <p>Level 15, Menara D'Blox, Kuala Lumpur City Centre, 50088 Kuala Lumpur, Malaysia</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <Phone className={styles.icon} />
                                <div>
                                    <p className={styles.label}>Phone</p>
                                    <p>+60 3-1234 5678</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <Mail className={styles.icon} />
                                <div>
                                    <p className={styles.label}>Email</p>
                                    <p>hello@dblox.my</p>
                                </div>
                            </div>

                            <div className={styles.whatsapp}>
                                <Button
                                    variant="primary"
                                    onClick={() => window.open('https://wa.me/60123456789', '_blank')}
                                    style={{ width: '100%', gap: '0.5rem' }}
                                >
                                    <MessageCircle size={20} /> Chat on WhatsApp
                                </Button>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className={styles.map}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.793365947366!2d101.7117!3d3.1579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0x9e3aaf971f7839bb!2sPetronas%20Twin%20Towers!5e0!3m2!1sen!2smy!4v1625641234567!5m2!1sen!2smy"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Office Location"
                            ></iframe>
                        </div>
                    </Reveal>
                </div>

                {/* Contact Form */}
                <div className={styles.formColumn}>
                    <Reveal delay={0.3}>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="+60 12-345 6789"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="company">Company / Organization</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="D'Blox Inc."
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="service">Service Interest</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="Game Development">Full Game Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                    <option value="Scripting">Scripting & Systems</option>
                                    <option value="World Building">World Building</option>
                                    <option value="Consultation">Consultation</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <Button type="submit" variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                            </Button>
                        </form>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;
