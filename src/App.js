import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { pageRoutes } from './config/routes';
import MainLayout from './layout/MainLayout';

import './App.scss';

function App() {
	return (
		<Router>
			<Routes>
				{pageRoutes.map((route, index) => {
					const Layout = MainLayout;
					const Page = route.page;

					return (
						<Route
							key={index}
							path={route.path}
							element={
								<Layout>
									<Page />
								</Layout>
							}
						/>
					);
				})}
			</Routes>
		</Router>
	);
}

export default App;
