import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonButton  } from '@ionic/react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import '../styles/global.css'

class Gender extends React.Component {
	state = {
		gender: ''
	}

	componentWillMount () {
		console.log(this.props.location.goal);
	}

	setGender = (e) => {
		let gender = this.state.gender
		if (e.target.value === 'male') {
			gender = 'male'
			this.setState({gender})
			console.log(this.state.gender);
		} else {
			gender = 'female'
			this.setState({gender})
			console.log(this.state.gender);
		}
	}

	click = () => {
		this.props.history.push({
			pathname: '/age',
			goal: this.props.location.goal,
			gender: this.state.gender
		})
	}

	render () {
		const styles= {
			heading: {
				marginLeft: '2.5%'
			}
		}
		return(
		<>
			<h1 style={styles.heading}>Are you male or female?</h1>
			<IonRadioGroup>
				<IonItem>
					<IonLabel>Male</IonLabel>
					<IonRadio slot="start" color="success" value="male" onClick={this.setGender}></IonRadio>
				</IonItem>
				<IonItem>
					<IonLabel>Female</IonLabel>
					<IonRadio slot="start" color="danger" value="female" onClick={this.setGender}></IonRadio>
				</IonItem>
			</IonRadioGroup>
			<IonButton onClick={this.click}>Yeah!</IonButton>
		</>
		)
	}
}

export default Gender
