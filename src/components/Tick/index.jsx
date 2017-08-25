// @flow

import React, { Component } from 'react';

import './Tick.css';

export default class Tick extends Component {
	props: {
		height: number
		// link: string
	};

	static defaultProps = {
    	height: 4
  	};
  	
  	state = {
		// activeIndex : 0,
		// loadedPhotos: [],
		// touchStartX: null,
		// touchStartY: null,
		// lastChange: new Date()
	};

	// constructor(){
		// super();
	 // 	this.moveForward = this.moveForward.bind(this);
	 // 	this.moveBackward = this.moveBackward.bind(this);
	// }

	// moveForward = () =>{
	// 		let maxIndex = this.props.photos.length - 1;
	// 		let currentIndex = this.state.activeIndex;

	// 		let newIndex = currentIndex === maxIndex ? 0 : currentIndex + 1;

 //    		this.setState(prevState => ({
 //      			activeIndex: newIndex,
 //      			lastChange: new Date()
 //   			}));
	// }

	// moveBackward = () =>{
	// 	let currentIndex = this.state.activeIndex;

	// 	let newIndex = currentIndex === 0 ? this.props.photos.length -1 : currentIndex -1;

	// 	this.setState(prevState => ({
 //      		activeIndex: newIndex,
 //      		lastChange: new Date()
 //   		}));
	// }

	render(){
		const style = {
			height: `calc(${this.props.height}% - 1px)`
		};
		return(
			<div className='Tick' style={style}>
			</div>
		)
	}
}