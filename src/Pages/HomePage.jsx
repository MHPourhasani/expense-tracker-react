import { useState } from 'react';
import OverViewComponent from '../components/OverViewComponent/OverViewComponent';
import Layout from './../Layout/Layout';

const HomePage = () => {
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)

	return (
		<Layout>
			<OverViewComponent income={income} expense={expense}/>
		</Layout>
	);
};

export default HomePage;
