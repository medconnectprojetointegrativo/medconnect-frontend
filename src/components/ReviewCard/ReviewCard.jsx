import React from 'react';
import styles from './ReviewCard.module.css';
import FilledStar from '../../assets/icons/FilledStar';

export function ReviewCard({commentData = {}}) {
	return (
		<div className={styles.cardContainer}>
			<img
				src={commentData.imageUrl}
				alt={`Foto de perfil de ${commentData.name}`}
				className={styles.avatar}
			/>

			<div className={styles.content}>

				<div className={styles.header}>
					<h4 className='text-regular kanit-bold text-primary'>{commentData.name}</h4>
					<span className='text-light text-tiny text-gray'>{commentData.date}</span>
				</div>

				<div className={styles.starsContainer}>
					{Array.from({ length: commentData.rating }).map(
						(_, index) => (
								<FilledStar style={{color: 	'var(--yellow)'}}/>
						),
					)}
				</div>

				<p className='text-standard kanit-regular' style={{textAlign: 'justify'}}>{commentData.comment}</p>
			</div>
		</div>
	);
}
