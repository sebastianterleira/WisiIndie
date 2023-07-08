'use client';
import styles from '../styles/List-Ideas/list-idea.module.css';
import CardIdea from './subComponents/CardIdea';
import CardAdd from './subComponents/CardAdd';
import { useEffect, useState } from 'react';
import { useIdea } from '../context/AppContext';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ListIdeas = () => {
	const { getDataIdea, dataIdea } = useIdea();
	const [page, setPage] = useState(1);

	const pageNumber = Math.ceil(dataIdea.length / 5);

	function handleDecresePage() {
		if (page === 1) return;

		const newPage = page - 1;
		setPage(newPage);
	}

	function handleIncresePage() {
		if (page === pageNumber) return;
		const newPage = page + 1;
		setPage(newPage);
	}

	useEffect(() => {
		getDataIdea();
	}, []);

	let category = 0;
	const groupByCategory = dataIdea.reduce((accu, product, index) => {
		if (index % 5 === 0) {
			category++;
		}
		accu[category] = accu[category] ?? [];
		accu[category].push(product);
		return accu;
	}, {});

	return (
		<div id='connect-listideas' className={styles.center}>
			<div className={styles.pov}>
				<h2 className={styles['pov__title']}>
					Find the project that you like the most and make it happen
				</h2>
				<div className={styles['pov__subtitle']}>Discover new ideas daily</div>
			</div>
			<div className={styles.background}>
				<div className={styles['background__container']}>
					{groupByCategory[`${page}`]?.map(idea => {
						return <CardIdea key={idea.id} idea={idea} />;
					})}
					<CardAdd />
				</div>
				<div className={styles.pagination}>
					<FaArrowLeft
						onClick={handleDecresePage}
						style={{ cursor: 'pointer' }}
					/>
					{[...Array(pageNumber)].map((x, index) => (
						<p
							key={index}
							current={page}
							className={styles['pagination__pageindex']}
						>
							{index + 1}
						</p>
					))}
					<FaArrowRight
						onClick={handleIncresePage}
						style={{ cursor: 'pointer' }}
					/>
				</div>
			</div>
		</div>
	);
};

export default ListIdeas;
