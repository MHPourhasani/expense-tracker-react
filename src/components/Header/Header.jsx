import './Header.css';
import myPhoto from '../../assets/images/myPhoto.jpg';

const Header = () => {
	return (
		<header>
			<h2 className='header-title'>Expence Tracker</h2>

			<a
				href='https://github.com/MHPourhasani'
				target='_blank'
				rel='noreferrer'
				className='image-container'>
				<img src={myPhoto} alt='my photo' aria-hidden />
			</a>
		</header>
	);
};

export default Header;
