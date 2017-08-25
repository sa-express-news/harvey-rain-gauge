// @flow

import React, { Component } from 'react';

import './RainLevel.css';

export default class RainLevel extends Component {
	props: {
		percentageHeight: number
	};

	static defaultProps = {
    	percentageHeight: 0
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
			height: `${this.props.percentageHeight}%`
		};
		
		return(
			<div className='RainLevel' style={style}></div>
		)
	}
}