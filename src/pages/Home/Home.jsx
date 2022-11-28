import React from 'react';

import './Home.scss';

import nccLogo from '../../assets/logoNCC-1.png';
import { postsData } from '../../data/postsData';

function Home() {
	return (
		<div className='home'>
			<div className='home__logo'>
				<img src={nccLogo} alt='ncc logo' />
			</div>
			<div className='home__banner'>
				<h2 className='home__banner-heading'>Lorem ipsum dolor sit amet?</h2>
				<p className='home__banner-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor
					pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in
					mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
					mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus
					vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed
					semper turpis pellentesque a.
				</p>
			</div>
			<div className='home__container'>
				{postsData.map((post, index) => (
					<div key={index} className='home__post'>
						<h2 className='home__post-title'>{post.title}</h2>
						<div className='home__post-content'>
							<div className='home__post-img'>
								<img src={post.img} alt='logo' />
							</div>
							<p className='home__post-text'>{post.content}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Home;
