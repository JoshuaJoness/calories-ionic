import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'

class Stripe extends React.Component {
	render() {
			return(
				<>
					<CardElement />
					<button>Press</button>
				</>
			)
		}
	}

export default injectStripe(Stripe)
