import './OverViewComponent.css';

const OverViewComponent = ({ income, expense }) => {
	return (
		<section className='overView-container'>
			<div className='income-container'>
				<h4>InCome</h4>
				<h5>$ {income}</h5>
			</div>

			<div className='balance-container'>
				<h4>Balance</h4>
				<h5>$ {income - expense}</h5>
			</div>

			<div className='expense-container'>
				<h4>Expense</h4>
				<h5>$ {expense}</h5>
			</div>
		</section>
	);
};

export default OverViewComponent;
