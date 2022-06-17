import { useState } from 'react';
import TransActionsForm from './TransActionsForm';
import styles from './TransActionsList.module.css';

import { BsTrash } from 'react-icons/bs';

const TransActionsList = ({ addTransActionHandler, transActions }) => {
	const [isOpen, setIsOpen] = useState(false);

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

			<section>
				{transActions.map((transAction) => {
					return (
						<section
							className={`${styles.transActionList} ${
								transAction.type === 'income'
									? styles.income_transAction
									: styles.expense_transAction
							}`}>
							<p className={styles.transAction_title}>{transAction.title}</p>

							<section className={styles.amount_btns_container}>
								<p className={styles.transAction_title}>$ {transAction.amount}</p>
								<button className={styles.trash_btn}>
									<BsTrash />
								</button>
							</section>
						</section>
					);
				})}
			</section>
		</section>
	);
};

export default TransActionsList;
