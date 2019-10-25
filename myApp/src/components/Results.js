import React from 'react'

class Results extends React.Component {
	render(){
		return(
			<>
				<h1>In order to reach your fitness goals, you should consume </h1>
				{console.log(this.props.location.maintain)}
				{console.log(this.props.location.loseWeight)}
				{console.log(this.props.location.gainWeight)}
			</>
		)
	}
}

export default Results
