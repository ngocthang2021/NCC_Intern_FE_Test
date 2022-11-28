import React from 'react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function MainLayout({ children }) {
	return (
		<div className='wrapper'>
			<Navbar />
			<div className='container'>{children}</div>
			<Footer />
		</div>
	);
}

export default MainLayout;
