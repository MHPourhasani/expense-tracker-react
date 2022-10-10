import { useEffect, useState } from 'react';

// components
import OverViewComponent from '../components/OverViewComponent/OverViewComponent';
import TransActionsList from '../components/TransActions/TransActionsList/TransActionsList';
import Layout from './../Layout/Layout';

// css
import styles from './HomePage.module.css';

const HomePage = () => {
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [transActions, setTransActions] = useState([]);
	// const [filterTransActions, setFilterTransActions] = useState(transActions);

	useEffect(() => {
		const saveData = JSON.parse(localStorage.getItem('TransActions'));
		if (saveData) setTransActions(saveData);
	}, []);

	useEffect(() => {
		localStorage.setItem('TransActions', JSON.stringify(transActions));
	}, [transActions]);

	useEffect(() => {
		let inc = 0;
		let exp = 0;

		transActions.forEach((transAction) =>
			transAction.type === 'expense'
				? (exp += parseFloat(transAction.amount))
				: (inc += parseFloat(transAction.amount))
		);

		setExpense(exp);
		setIncome(inc);
	}, [transActions]);

	const addTransActionHandler = (formValue) => {
		const transActionData = { ...formValue, id: Math.floor(Math.random() * 1000) };
		setTransActions([...transActions, transActionData]);
	};

	const deleteTransActionHandler = (id) => {
		const filteredTransActions = transActions.filter((transAction) => transAction.id !== id);
		setTransActions(filteredTransActions);
	};

	return (
		<Layout>
			<section className={styles.homePage}>
				<OverViewComponent income={income} expense={expense} />
				<TransActionsList
					transActions={transActions}
					addTransActionHandler={addTransActionHandler}
					deleteTransActionHandler={deleteTransActionHandler}
				/>
			</section>
		</Layout>
	);
};

export default HomePage;
