import React from 'react'


class NamesList extends React.Component {
	constructor () {
		super ()
		this.state = {names : ['Richard'], name: ' '}
		this.handleChange = this.handleChange.bind(this);
	}

	render () {
		return (
			<div>
			  <ul>
			    {_.map(this.state.names, (name) => {
			    	return <li>{name}</li>;
			    })}

			    <input id={'nameInput'} onChange={this.handleChange}></input>

			    <button onClick={() => this.addName()}>Add Name</button>


			  </ul>
			</div>
			)
	}

	handleChange (input) {
		this.setState({name : input.target.value});
		console.log(this.state.name);

	}

	addName () {
		this.setState({names : [...this.state.names , this.state.name]});
		document.getElementById('nameInput').value=' ';
	}
} 

export default NamesList
