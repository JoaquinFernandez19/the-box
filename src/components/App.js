import React from 'react';

//style
import '../styles/App.scss';
//Components
import Header from './Header';
import TodoList from './TodoList';
import Tools from './Tools';

const App = () => {
	return (
		<div className="app-container">
			<Header />

			<TodoList />
			<Tools />
		</div>
	);
};

export default App;
