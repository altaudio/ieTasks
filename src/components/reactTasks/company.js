import React from 'react'

class Company extends React.Component {
	render () {
		return (
			<div>
			  <p>Company: {this.props.name}</p>

			  {_.map(this.props.employees, (value) => {
			  	return (
			  	       <div>
			  	         <p>Name: {value.name}</p> 
			  	         <p>Age: {value.age}</p>
			  	       </div>
			  	       )
			  })}
			</div>

			)
	}
} 

export default Company