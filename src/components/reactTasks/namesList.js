import React from 'react'


class NamesList extends React.Component {
	constructor () {
		super ()
		this.state = {names : ['Richard']}
	}

	render () {
		return (
			<div>
			  <ul>
			    {_.map(this.state.names, (name) => {
			    	return <li>{name}</li>;
			    })}

			    <input id={'nameInput'}></input>

			    <button onClick={() => this.addName()}>Add Name</button>


			  </ul>
			</div>
			)
	}

	addName () {
		this.setState({names : _.concat(this.state.names, [document.getElementById('nameInput').value])});
		document.getElementById('nameInput').value=' ';
	}
} 

export default NamesList
