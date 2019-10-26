import React from 'react'
import { IonContent, IonButton, IonItem, IonLabel, IonRadio, IonRadioGroup, IonListHeader, IonList } from '@ionic/react';
import '../styles/global.css'

class Greeting extends React.Component {
	state = {
		goal: ''
	}

	click = () => {
		this.props.history.push({
		  pathname: '/questions',
		  goal: this.state.goal
		})}

	render(){
		const styles = {
			heading: {
				textAlign: 'center',
				color: '#0074D9'
			},
			p: {
				marginLeft: '5%'
			},
			button: {
				marginLeft: '40%'
			},
			img: {
				width: '100%'
			}
		}
		return(
			<>
				<img style={styles.img} src="./greeting.svg"/>
				<h1 style={styles.heading}>Welcome to 'Calorie Calculator!'</h1><br></br>
				<p style={styles.p}>If you'd like to lose weight, build muscle, or simply maintain we can help you!</p><br></br>
				<p style={styles.p}>Just answer a few questions and we'll let you know how much calories you should be consuming to achieve your goals!</p>
				<br></br>


				<div className='buttonPosition'></div>
				<IonButton className='buttonPosition' style={styles.button} onClick={this.click}>
				Let's go!
				</IonButton>
				<div className='buttonPosition'></div>
			</>
		)
	}
}

export default Greeting
