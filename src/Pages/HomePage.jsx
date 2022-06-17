import { useState } from 'react';
import OverViewComponent from '../components/OverViewComponent/OverViewComponent';
import TransActionsList from '../components/TransActions/TransActionsList';
import Layout from './../Layout/Layout';

const HomePage = () => {
	const [income, setIncome] = useState(0);
	const [expense, setExpense] = useState(0);
	const [transActions, setTransActions] = useState([]);

	const addTransActionHandler = (formValue) => {
		const transActionData = { ...formValue, id: Math.floor(Math.random() * 1000) };
		setTransActions([...transActions, transActionData]);
	};

	return (
		<Layout>
			<OverViewComponent income={income} expense={expense} />
			<TransActionsList
				transActions={transActions}
				addTransActionHandler={addTransActionHandler}
			/>
		</Layout>
	);
};

export default HomePage;
