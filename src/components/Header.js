import React from 'react';
import '../styles/header.scss';
import { RiFolderAddLine } from 'react-icons/ri';
//redux
import { connect } from 'react-redux';
import { startProject } from '../actions';
//
const Header = (props) => {
	const handleStartProject = () => {
		props.startProject();
	};

	if (props.working) {
		return (
			<div className="header">
				<div className="new-project-btn active" onClick={handleStartProject}>
					<p>New project</p>
					<RiFolderAddLine className="add-icon" />
				</div>
				<h2>The Box</h2>
			</div>
		);
	}
	return (
		<div className="header">
			<div className="new-project-btn" onClick={handleStartProject}>
				<p>New project</p>
				<RiFolderAddLine className="add-icon" />
			</div>
			<h2>The Box</h2>
		</div>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		working: state.working,
	};
};

export default connect(mapStateToProps, { startProject })(Header);
