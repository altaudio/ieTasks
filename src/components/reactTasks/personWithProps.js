import React from 'react'


class PersonWithProps extends React.Component {
	render () {
		return (
			<div>
			  <p>Name: {this.props.name}</p>
			  <p>Age: {this.props.age}</p>
			</div>

			)
	}
} 


export default PersonWithProps 
