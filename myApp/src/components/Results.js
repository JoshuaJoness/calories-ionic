import React from 'react'

class Results extends React.Component {
	state={
		maintain: this.props.location.maintain,
		lose: Number(this.props.location.maintain - 500).toFixed(0),
		gain: Number(this.props.location.maintain + 500).toFixed(0)
	}
	render(){
		return(
			<>
			{console.log('maintain', this.props.location.maintain)}
			{console.log('lose',this.state.lose)}
			{console.log('gain',this.state.gain)}
				<h1>Here are your results: </h1>
				<p>Your resting metabolic rate (mbr) is: {this.props.location.maintain}. This is how much calories your body uses in a day to maintain basic functioning. If you eat below this number you will lose weight. If you eat above it, you will gain weight.</p>
				<p>In order to lose weight you should consume: {this.props.location.loseWeight}</p>
				<p>In order to gain weight you should consume: {this.props.location.gainWeight}</p>
			</>
		)
	}
}

export default Results
