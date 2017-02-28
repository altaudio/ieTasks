
import React from 'react'

class EvenNumbers extends React.Component {
	render () {
		return (
			<div>
			  <ul>
			    {_.map(this.props.numbers, (number) => {
			    	if((number % 2) == 0) {
			    		return <li>{number}</li>
			    	}
			    })}
			  </ul>
			</div>

			)
	}
}

export default EvenNumbers