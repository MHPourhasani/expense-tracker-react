import { useState } from 'react';
import styles from './TransActionsForm.module.css';

const TransActionsForm = ({ addTransActionHandler }) => {
	const [formValue, setFormValue] = useState({ type: 'expense', title: '', amount: 0, desc: '' });

	const changeHandler = (e) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		addTransActionHandler(formValue);
		setFormValue({ type: 'expense', title: '', amount: 0, desc: '' });
	};

	return (
		<section className={styles.transActionsForm_container}>
			<h4 className={styles.transActionsForm_title}>Add TransActions</h4>

			<form onSubmit={submitHandler} className={styles.form_container}>
				{/* title, amount and description inputs */}
				<section className={styles.information_container}>
					<input
						type='text'
						name='title'
						value={formValue.title}
						placeholder='Title ...'
						onChange={changeHandler}
						required
					/>
					<input
						type='number'
						name='amount'
						value={formValue.amount}
						placeholder='Amount ...'
						onChange={changeHandler}
					/>
					<input
						type='text'
						name='desc'
						value={formValue.desc}
						placeholder='Description ...'
						onChange={changeHandler}
					/>
				</section>

				{/* expense and income radio button */}
				<section className={styles.radio_container}>
					<div className={styles.radio_box}>
						<input
							id='expense'
							type='radio'
							value='expense'
							name='type'
							checked={formValue.type === 'expense'}
							onChange={changeHandler}
						/>
						<label htmlFor='expense'>Expense</label>
					</div>

					<div className={styles.radio_box}>
						<input
							id='income'
							type='radio'
							value='income'
							name='type'
							checked={formValue.type === 'income'}
							onChange={changeHandler}
						/>
						<label htmlFor='income'>InCome</label>
					</div>
				</section>

				<button type='submit' className={styles.add_btn}>
					Add TransAction
				</button>
			</form>
		</section>
	);
};

export default TransActionsForm;
