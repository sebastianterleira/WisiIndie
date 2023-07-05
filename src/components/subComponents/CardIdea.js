'use client';
import styles from '../../styles/CardIdea/card-idea.module.css';

const CardIdea = props => {
	const { description, created_at, autor } = props.idea;

	const MONTHS = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const date = new Date(created_at);
	const formatDate = `${date.getFullYear()} ${
		MONTHS[date.getMonth()]
	} ${date.getDate()}`;

	return (
		<div className={styles['card__container']}>
			<div className={styles['container__info']}>
				<p className={styles['info__autor']}>{`By ${autor}`}</p>
				<p className={styles['info__date']}>{formatDate}</p>
			</div>
			<div className={styles['container__description']}>
				<h2 className={styles['description__text']}>{description}</h2>
			</div>
		</div>
	);
};

export default CardIdea;
