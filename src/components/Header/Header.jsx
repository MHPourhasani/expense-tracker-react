import './Header.css';
import myPhoto from '../../assets/images/myPhoto.jpg';

const Header = () => {
	return (
		<header>
			<h2 className='header-title'>Expense Tracker</h2>

			<a
				href='https://github.com/MHPourhasani/expense-tracker-react'
				target='_blank'
				rel='noreferrer'
				className='image-container'>
				<img src={myPhoto} alt='mhp photo' aria-hidden />
			</a>
		</header>
	);
};

export default Header;
