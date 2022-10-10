// icons
import { BsTrash } from 'react-icons/bs';

// css
import styles from './TransActionTemplate.module.css';

const TransActionTemplate = ({ transAction, deleteTransActionHandler }) => {
	return (
		<section
			className={`${styles.transAction_template} ${
				transAction.type === 'income'
					? styles.income_transAction
					: styles.expense_transAction
			}`}>
			<section className={styles.transAction_template_section1}>
				<p className={styles.transAction_title}>{transAction.title}</p>

				<div className={styles.amount_btns_container}>
					<p className={styles.transAction_amount}>$ {transAction.amount}</p>
					<button
						onClick={() => deleteTransActionHandler(transAction.id)}
						className={styles.trash_btn}>
						<BsTrash />
					</button>
				</div>
			</section>

			<p className={styles.transAction_desc}>{transAction.desc}</p>

		</section>
	);
};

export default TransActionTemplate;
