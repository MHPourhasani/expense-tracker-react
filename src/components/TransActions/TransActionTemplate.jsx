import { BsTrash } from 'react-icons/bs';
import styles from './TransActionsList.module.css';

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

				<section className={styles.amount_btns_container}>
					<p className={styles.transAction_title}>$ {transAction.amount}</p>
					<button
						onClick={() => deleteTransActionHandler(transAction.id)}
						className={styles.trash_btn}>
						<BsTrash />
					</button>
				</section>
			</section>

			<p className={styles.transAction_desc}>{transAction.desc}</p>

		</section>
	);
};

export default TransActionTemplate;
