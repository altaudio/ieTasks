import React from 'react'

class RandomNumberGenerator extends React.Component {
	constructor () {
		super ()
		this.state = {randNum : 0}
	}

	render () {
		return (
			<div>
			  <p>{this.state.randNum}</p>
			  <button onClick={this.generateNumber.bind(this)}>Generate</button>
			</div>
			)
	}

	generateNumber (e) {
		e.preventDefault;
		this.setState({randNum : _.random(0, 10000)});

	}

} 

export default RandomNumberGenerator
