import React from 'react'

class BoxGrower extends React.Component {
	constructor () {
		super ()
		this.state = {divHeight : '100px'}
	}

	render () {
		return (
			<div>
			  <div style={{width: 100, height: this.state.divHeight, backgroundColor: 'powderblue'}}>
			  </div>

			  <button onClick={() => this.growBox()}>Grow</button>
			</div>
			)
	}

	growBox () {
		this.setState({divHeight : '120px'});
	}

} 



export default BoxGrower
