import React, { useState } from 'react';
import { X } from 'lucide-react';
import Reveal from '../components/Reveal';
import styles from '../styles/Gallery.module.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        'https://placehold.co/800x600/1e293b/06b6d4?text=Game+Screenshot+1',
        'https://placehold.co/600x800/1e293b/2563eb?text=Character+Design',
        'https://placehold.co/800x600/1e293b/ec4899?text=Map+Overview',
        'https://placehold.co/800x600/1e293b/10b981?text=UI+Showcase',
        'https://placehold.co/600x800/1e293b/f59e0b?text=Asset+Pack',
        'https://placehold.co/800x600/1e293b/ef4444?text=Action+Shot',
        'https://placehold.co/800x600/1e293b/8b5cf6?text=Lobby+Design',
        'https://placehold.co/600x800/1e293b/06b6d4?text=Concept+Art',
    ];

    return (
        <div className="container section">
            <Reveal>
                <div className={styles.header}>
                    <h1 className="text-gradient">Gallery</h1>
                    <p>A visual journey through our creations.</p>
                </div>
            </Reveal>

            <div className={styles.grid}>
                {images.map((src, index) => (
                    <Reveal key={index} delay={index * 0.05}>
                        <div
                            className={styles.item}
                            onClick={() => setSelectedImage(src)}
                        >
                            <img src={src} alt={`Gallery item ${index + 1}`} loading="lazy" />
                            <div className={styles.overlay}>
                                <span>View</span>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
                    <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
                        <X size={32} />
                    </button>
                    <img src={selectedImage} alt="Full size" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
};

export default Gallery;
