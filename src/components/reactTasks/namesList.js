import React from 'react'


class NamesList extends React.Component {
	constructor () {
		super ()
		this.state = {names : ['Richard'], currentInput: ' '}
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	render () {
		return (
			<div>
			  <ul>
			    {_.map(this.state.names, (name) => {
			    	return <li>{name}</li>;
			    })}

			    <input id={'nameInput'} onKeyUp={this.handleKeyUp}></input>

			    <button onClick={() => this.addName()}>Add Name</button>


			  </ul>
			</div>
			)
	}

	handleKeyUp (input) {
		this.setState({currentInput : input.target.value});
		console.log(this.state.currentInput);

	}

	addName () {
		this.setState({names : _.concat(this.state.names, [this.state.currentInput])});
		document.getElementById('nameInput').value=' ';
	}
} 

export default NamesList
