// @flow

import React, { Component } from 'react';

import Tick from '../Tick';
import RainLevel from '../RainLevel';

import './RainGauge.css';

export default class RainGauge extends Component {
	props: {
		maxInch: number;
	};

	static defaultProps = {
    	maxInch: 25
  	};
  	
  	state = {
		// activeIndex : 0,
		// loadedPhotos: [],
		// touchStartX: null,
		// touchStartY: null,
		// lastChange: new Date()
	};

	calculateRainLevel = (precipitation: number) =>{
		return (precipitation / this.props.maxInch) * 100;


	}

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

		const arrayLength = this.props.maxInch;

		const ticks = Array(arrayLength).fill(1).map((el, index)=>{
			return <Tick key={index} height={(100 / this.props.maxInch)}/>
		});


		return(
			<div className='RainGauge'>
				{ticks}
				<RainLevel percentageHeight={this.calculateRainLevel(4)}/>
			</div>
		)
	}
}