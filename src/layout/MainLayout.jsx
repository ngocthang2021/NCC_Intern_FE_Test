import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';

function MainLayout({ children }) {
	return (
		<div className='wrapper'>
			<Sidebar />
			<div className='container'>{children}</div>
		</div>
	);
}

export default MainLayout;
