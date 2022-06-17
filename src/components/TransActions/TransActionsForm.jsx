import styles from './TransActionsForm.module.css';

const TransActionsForm = () => {
	return (
		<section className={styles.transActionsForm_container}>
			<h4 className={styles.transActionsForm_title}>
				Add TransActions
			</h4>

			<form className={styles.form_container}>
				<section className={styles.information_container}>
					<input type='text' name='title' placeholder='Title ...' />
					<input type='number' name='amount' placeholder='Amount ...' />
					<input type='text' name='desc' placeholder='Description ...' />
				</section>

				<section className={styles.radio_container}>
					<div className={styles.radio_box}>
						<input type='radio' value='income' name='type' />
						<label htmlFor='income'>InCome</label>
					</div>

					<div className={styles.radio_box}>
						<input type='radio' value='expense' name='type' />
						<label htmlFor='expense'>Expense</label>
					</div>
				</section>

				<button className={styles.add_btn}>Add TransAction</button>
			</form>
		</section>
	);
};

export default TransActionsForm;
