import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import News from '../pages/News/News';
import Blog from '../pages/Blog/Blog';
import Contact from '../pages/Contact/Contact';

export const pageRoutes = [
	{ path: '/', element: 'Home', page: Home },
	{ path: '/services', element: 'Services', page: Services },
	{ path: '/news', element: 'News', page: News },
	{ path: '/blog', element: 'Blog', page: Blog },
	{ path: '/contact', element: 'Contact', page: Contact },
];
