import './OverViewComponent.css';

const OverViewComponent = ({income, expense}) => {
	return (
		<section className='overView-container'>
			<section className='income-container'>
				<h4>InCome</h4>
                <h5>$ {income}</h5>
			</section>

			<section className='expense-container'>
				<h4>Expense</h4>
                <h5>$ {expense}</h5>
			</section>
		</section>
	);
};

export default OverViewComponent;
