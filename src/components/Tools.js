import React, { useRef, useEffect } from 'react';
import '../styles/tools.scss';
import { connect } from 'react-redux';
import icon from '../media/bg-icon-1.png';
import icon2 from '../media/bg-icon-2.png';
import icon3 from '../media/bg-icon-3.png';
import icon4 from '../media/bg-icon-4.png';
import bg1 from '../media/bg1.svg';
import bg2 from '../media/bg2.svg';
import bg3 from '../media/bg3.svg';
import bg4 from '../media/bg4.svg';

//icons
import { FaSkullCrossbones, FaImage } from 'react-icons/fa';
import { GoTextSize } from 'react-icons/go';
import { IoIosColorPalette } from 'react-icons/io';
import {
	resetProject,
	cancelCreatingTodo,
	changeBackground,
	changeFont,
	changeColor,
} from '../actions';

const anime = 'animated fadeIn';

const Tools = (props) => {
	//bg img changer btn
	const bgModal = useRef(null);
	//font modal
	const fModal = useRef(null);
	//color modal
	const cModal = useRef(null);
	//tools
	const tools = useRef(null);

	const resetProject = () => {
		let content = document.querySelector('.content');
		let header = document.querySelector('.header');
		if (
			window.confirm('Are you sure you want to restart the current project?')
		) {
			props.resetProject();
			props.cancelCreatingTodo();
			props.changeBackground('default');
			props.changeColor('default');
			content.style.backgroundColor = '#06afaf';
			header.style.backgroundColor = '#168d8d';
			tools.current.style.backgroundColor = '#b4f1f1';
		}
	};
	const openChangeImgModal = () => {
		fModal.current.style.display = 'none';
		cModal.current.style.display = 'none';
		if (bgModal.current.style.display === 'flex') {
			bgModal.current.style.display = 'none';
		} else {
			bgModal.current.style.display = 'flex';
		}
	};
	const openChangeFontModal = () => {
		bgModal.current.style.display = 'none';
		cModal.current.style.display = 'none';
		if (fModal.current.style.display === 'flex') {
			fModal.current.style.display = 'none';
		} else {
			fModal.current.style.display = 'flex';
		}
	};
	const openChangeColorModal = () => {
		bgModal.current.style.display = 'none';
		fModal.current.style.display = 'none';
		if (cModal.current.style.display === 'flex') {
			cModal.current.style.display = 'none';
		} else {
			cModal.current.style.display = 'flex';
		}
	};
	//set img bg at start
	useEffect(() => {
		if (props.working) {
			let content = document.querySelector('.content');
			let header = document.querySelector('.header');
			content.style.fontFamily = props.font;
			if (props.color === 'default') {
				content.style.backgroundColor = '#06afaf';
				header.style.backgroundColor = '#168d8d';
				tools.current.style.backgroundColor = '#b4f1f1';
			}
			if (props.color === 'red') {
				header.style.backgroundColor = '#a03232';
				tools.current.style.backgroundColor = '#e6c073';
			}

			if (props.background !== 'default') {
				switch (props.background) {
					case 'bg1':
						content.style.background = `url(${bg1})`;
						break;
					case 'bg2':
						content.style.background = `url(${bg2})`;
						break;
					case 'bg3':
						content.style.background = `url(${bg3})`;
						break;
					case 'bg4':
						content.style.background = `url(${bg4})`;
						break;
					default:
						return null;
				}
			}
			if (props.background === 'default') {
				if (props.color === 'red') {
					content.style.backgroundColor = '#c86f5e';
				}
				if (props.color === 'default') {
					content.style.backgroundColor = '#06afaf';
				}
			}
		}
	}, []);
	//change background
	const changeBg = (e) => {
		let content = document.querySelector('.content');
		switch (e.target.classList.value) {
			case 'bg-1':
				props.changeBackground('bg1');
				content.style.background = `url(${bg1})`;
				break;
			case 'bg-2':
				props.changeBackground('bg2');
				content.style.background = `url(${bg2})`;
				break;
			case 'bg-3':
				props.changeBackground('bg3');
				content.style.background = `url(${bg3})`;
				break;
			case 'bg-4':
				props.changeBackground('bg4');
				content.style.background = `url(${bg4})`;
				break;
			case 'default':
				props.changeBackground('default');

				if (props.color === 'default') {
					content.style.background = '#06afaf';
				}
				if (props.color === 'red') {
					content.style.background = '#c86f5e';
				}

				break;
			default:
				return null;
		}
		bgModal.current.style.display = 'none';
	};
	//change font
	const changeFont = (e) => {
		let content = document.querySelector('.content');
		fModal.current.style.display = 'none';
		content.style.fontFamily = e.target.classList.value;
		props.changeFont(e.target.classList.value);
	};
	//change color
	const changeColor = (e) => {
		cModal.current.style.display = 'none';
		let content = document.querySelector('.content');
		let header = document.querySelector('.header');
		if (e.target.classList[0] === 'default') {
			props.changeColor('default');
			content.style.backgroundColor = '#06afaf';
			header.style.backgroundColor = '#168d8d';
			tools.current.style.backgroundColor = '#b4f1f1';
		}
		if (e.target.classList[0] === 'red') {
			props.changeColor('red');
			content.style.backgroundColor = '#c86f5e';
			header.style.backgroundColor = '#a03232';
			tools.current.style.backgroundColor = '#e6c073';
		}
	};

	if (props.working) {
		return (
			<div className="tools" ref={tools}>
				<div className="modal-parent">
					<div className="modal" ref={bgModal}>
						<h4>
							Change background image{' '}
							<span className="default" onClick={changeBg}>
								Default
							</span>
						</h4>
						<div className="modal-icons-container">
							<div className="modal-icon" onClick={changeBg}>
								<img src={icon} alt="img 1 icon" className="bg-1" />
							</div>
							<div className="modal-icon" onClick={changeBg}>
								<img src={icon2} alt="img 2 icon" className="bg-2" />
							</div>

							<div className="modal-icon" onClick={changeBg}>
								<img src={icon3} alt="img 3 icon" className="bg-3" />
							</div>
							<div className="modal-icon" onClick={changeBg}>
								<img src={icon4} alt="img 4 icon" className="bg-4" />
							</div>
						</div>
					</div>
					<FaImage
						className={`tools-icon ${anime}`}
						onClick={openChangeImgModal}
					/>
				</div>

				<div className="modal-parent">
					<div className="modal modal-font" ref={fModal}>
						<p className="Roboto" onClick={changeFont}>
							Roboto
						</p>
						<p className="Raleway" onClick={changeFont}>
							Raleway
						</p>
					</div>
					<GoTextSize
						className={`tools-icon ${anime}`}
						onClick={openChangeFontModal}
					/>
				</div>
				<div className="modal-parent">
					<div
						className="modal color-modal-outter"
						ref={cModal}
						style={{ height: '50px', width: '120px', left: '-129px' }}>
						<div className="color-modal">
							<div className="default color" onClick={changeColor}></div>
							<div className="red color" onClick={changeColor}></div>
						</div>
					</div>
					<IoIosColorPalette
						className={`tools-icon ${anime}`}
						onClick={openChangeColorModal}
					/>
				</div>

				<FaSkullCrossbones
					className={`tools-icon ${anime}`}
					onClick={resetProject}
				/>
			</div>
		);
	}
	return null;
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		working: state.working,
		background: state.background,
		font: state.font,
		color: state.color,
	};
};

export default connect(mapStateToProps, {
	resetProject,
	cancelCreatingTodo,
	changeBackground,
	changeFont,
	changeColor,
})(Tools);
