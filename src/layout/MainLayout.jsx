import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

function MainLayout({ children }) {
	return (
		<div className='wrapper'>
			<Sidebar />
			<div className='container'>{children}</div>
			<Footer />
		</div>
	);
}

export default MainLayout;
