import React from 'react'


class NamesList extends React.Component {
	constructor () {
		super ()
		this.state = {names : ['Richard'], name: ' ', input : ' '}
	}

	render () {
		return (
			<div>
			  <ul>
			    {_.map(this.state.names, (name) => {
			    	return <li>{name}</li>;
			    })}

			    <input id={'nameInput'} onChange={(value) => this.handleChange(value)}></input>

			    <button onClick={() => this.addName()}>Add Name</button>


			  </ul>
			</div>
			)
	}

	handleChange (input) {

		input.persist();
		this.setState({name : input.target.value});
		this.setState({input : input});

	}

	addName () {
		this.setState({names : [...this.state.names , this.state.name]});
		(this.state.input).target.value = ' ';
		// document.getElementById('nameInput').value=' ';

	}
} 

export default NamesList
