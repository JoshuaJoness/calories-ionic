import React from 'react'
import Stripe from './Stripe'
import { Elements, StripeProvider } from 'react-stripe-elements'

class Results extends React.Component {
	state={
		maintain: this.props.location.maintain,
		lose: Number(this.props.location.maintain - 500).toFixed(0),
		gain: Number(this.props.location.maintain + 500).toFixed(0)
	}
	render(){
		const styles={
			img: {
				width: '100%'
			}
		}
		return(
			<>
			<img style={styles.img} src="./results.svg"/>
			{console.log('maintain', this.props.location.maintain)}
			{console.log('lose',this.state.lose)}
			{console.log('gain',this.state.gain)}
				<h1>Here are your results: </h1>
				<h4>Your resting metabolic rate (mbr) is: {Math.round(this.props.location.maintain)} calories.</h4>
				<p>This is how much calories your body uses in a day to maintain basic functioning. If you eat below this number you will lose weight. If you eat above it, you will gain weight.</p>
				<h4>In order to lose weight you should consume: {Math.round(this.props.location.maintain - 500)} calories</h4>
				<h4>In order to gain weight you should consume: {Math.round(this.props.location.maintain + 500)} calories</h4>
				<StripeProvider apiKey='stripe'>
				  <Elements>
				    <Stripe />
				  </Elements>
				</StripeProvider>
			</>
		)
	}
}

export default Results
