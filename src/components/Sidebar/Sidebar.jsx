import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { pageRoutes } from '../../config/routes';

import './Sidebar.scss';

function Sidebar() {
	const { pathname } = useLocation();

	const active = pageRoutes.findIndex((route) => route.path === pathname);

	return (
		<header className='header'>
			<nav className='nav'>
				<ul className='nav__menu'>
					{pageRoutes.map((route, index) => {
						return (
							<li key={index} className={`nav__item ${index === active ? 'active' : ''}`}>
								<NavLink to={route.path}>{route.element}</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

export default Sidebar;
