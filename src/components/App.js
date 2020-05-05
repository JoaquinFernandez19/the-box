import React from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

//style
import '../styles/App.scss';
//Components
import Header from './Header';
import Content from './Content';
import Tools from './Tools';

const App = () => {
	return (
		<DndProvider backend={Backend}>
			<div className="app-container">
				<Header />

				<Content />
				<Tools />
			</div>
		</DndProvider>
	);
};

export default App;
