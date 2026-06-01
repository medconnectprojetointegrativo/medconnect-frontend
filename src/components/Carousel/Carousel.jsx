import React, { useRef } from 'react';
import styles from './Carousel.module.css';
import IMAGE_1 from '../../assets/images/photos/CAROUSEL_1.jpg'
import IMAGE_2 from '../../assets/images/photos/CAROUSEL_2.png';
import IMAGE_3 from '../../assets/images/photos/CAROUSEL_3.jpg';
import IMAGE_4 from '../../assets/images/photos/CAROUSEL_4.jpeg';
import IMAGE_5 from '../../assets/images/photos/CAROUSEL_5.jpg';

// Array fictício de imagens para o teste
const imagensFicticias = [
	{ id: 1, url: IMAGE_1 },
	{ id: 2, url: IMAGE_2 },
	{ id: 3, url: IMAGE_3 },
	{ id: 4, url: IMAGE_4 },
	{ id: 5, url: IMAGE_5 },
];

export function Carousel() {
	const carouselRef = useRef(null);

	const handleScroll = (direction) => {
		if (carouselRef.current) {
			// Tamanho da foto (200) + gap (12) = 212px por clique
			const scrollAmount = 212;

			carouselRef.current.scrollBy({
				left: direction === 'left' ? -scrollAmount : scrollAmount,
				behavior: 'smooth',
			});
		}
	};

	return (
		<div className={styles.carouselWrapper}>
			{/* Botão Esquerdo Fixo */}
			<button
				className={`${styles.navBtn} ${styles.left}`}
				onClick={() => handleScroll('left')}
				aria-label="Voltar foto"
			>
				‹
			</button>

			{/* Container Adaptável */}
			<div className={styles.carouselContainer} ref={carouselRef}>
				{imagensFicticias.map((item) => (
					<div key={item.id} className={styles.carouselItem}>
						<img
							src={item.url}
							alt={`Foto profissional ${item.id}`}
						/>
					</div>
				))}
			</div>

			{/* Botão Direito Fixo */}
			<button
				className={`${styles.navBtn} ${styles.right}`}
				onClick={() => handleScroll('right')}
				aria-label="Avançar foto"
			>
				›
			</button>
		</div>
	);
}
