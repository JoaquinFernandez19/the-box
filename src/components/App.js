import React from 'react';

//style
import '../styles/App.scss';
//Components
import Header from './Header';
import Content from './Content';
import Tools from './Tools';

const App = () => {
	return (
		<div className="app-container">
			<Header />
			
			<Content />
			<Tools />
		</div>
	);
};

export default App;
