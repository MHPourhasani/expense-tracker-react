import './Layout.css';
import Header from '../components/Header/Header';

const Layout = ({ children }) => {
	return (
		<section className='layout'>
			<Header />
			{children}
		</section>
	);
};

export default Layout;
