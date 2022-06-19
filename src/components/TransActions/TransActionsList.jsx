import { useCallback, useEffect, useState } from 'react';
import TransActionsForm from './TransActionsForm';
import styles from './TransActionsList.module.css';

import TransActionTemplate from './TransActionTemplate';

const TransActionsList = ({ addTransActionHandler, setTransActions,transActions,deleteTransActionHandler }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [filterTransActions, setFilterTransActions] = useState(transActions);

	// useEffect(() => {
	// 	const saveData = JSON.parse(localStorage.getItem('TransActions'));
	// 	if (saveData) setTransActions(saveData);
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem('TransActions', JSON.stringify(filterTransActions));
	// }, [filterTransActions, transActions]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const filteredSearchTransActions = useCallback((searchItem) => {
		if (!searchItem) {
			setFilterTransActions(transActions);
			return;
		}

		const filtered = transActions.filter((t) =>
			t.title.toLowerCase().includes(searchItem.toLowerCase())
		);

		setFilterTransActions(filtered);
	});

	const changeHandler = (e) => {
		setSearchValue(e.target.value);
		filteredSearchTransActions(e.target.value);
	};

	useEffect(() => {
		filteredSearchTransActions(searchValue);
	}, [filteredSearchTransActions, searchValue, transActions]);

	if (!transActions.length) {
		return (
			<section className={styles.empty_transActionsList_container}>
				<section className={styles.title_addBtn_container}>
					<span>Expense List</span>
					<button
						onClick={() => setIsOpen((prevState) => !prevState)}
						className={`${styles.btn} ${isOpen ? styles.cancelBtn : ''}`}>
						{isOpen ? 'Cancel' : 'Add'}
					</button>
				</section>

				{isOpen ? <TransActionsForm addTransActionHandler={addTransActionHandler} /> : ''}

				<p>Add Some TransActions...</p>
			</section>
		);
	}

	return (
		<section className={styles.transActionsList_container}>
			<section className={styles.title_addBtn_container}>
				<span>Expense List</span>
				<button
					onClick={() => setIsOpen((prevState) => !prevState)}
					className={`${styles.btn} ${isOpen ? styles.cancelBtn : ''}`}>
					{isOpen ? 'Cancel' : 'Add'}
				</button>
			</section>

			{isOpen ? <TransActionsForm addTransActionHandler={addTransActionHandler} /> : ''}

			<input
				type='text'
				placeholder='Search your transActions ...'
				value={searchValue}
				onChange={changeHandler}
				className={styles.searchInput}
			/>

			<section>
				{filterTransActions.length ? (
					filterTransActions.map((transAction) => {
						return (
							<TransActionTemplate
								key={transAction.id}
								transAction={transAction}
								deleteTransActionHandler={deleteTransActionHandler}
							/>
						);
					})
				) : (
					<p className={styles.notMatchs_item}>no item matchs !</p>
				)}
			</section>
		</section>
	);
};

export default TransActionsList;
