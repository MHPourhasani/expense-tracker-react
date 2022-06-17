import { useEffect, useState } from 'react';
import OverViewComponent from '../components/OverViewComponent/OverViewComponent';
import TransActionsList from '../components/TransActions/TransActionsList';
import Layout from './../Layout/Layout';

const HomePage = () => {
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [transActions, setTransActions] = useState([]);

	useEffect(() => {
		let inc = 0;
		let exp = 0;

		transActions.forEach((transAction) =>
			transAction.type === 'expense'
				? (exp += parseFloat(transAction.amount))
				: (inc += parseFloat(transAction.amount))
		);

		setExpense(exp)
		setIncome(inc)
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
			<OverViewComponent income={income} expense={expense} />
			<TransActionsList
				transActions={transActions}
				addTransActionHandler={addTransActionHandler}
				deleteTransActionHandler={deleteTransActionHandler}
			/>
		</Layout>
	);
};

export default HomePage;
