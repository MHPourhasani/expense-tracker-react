import './Header.css';
import myPhoto from '../../assets/images/myPhoto.jpg';

const Header = () => {
	return (
		<header>
			<div className='header-title'>Expence Tracker</div>

			<div className='image-container'>
				<img src={myPhoto} alt='my photo' aria-hidden />
			</div>
		</header>
	);
};

export default Header;
