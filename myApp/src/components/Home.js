import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonButton  } from '@ionic/react';
import React from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class Home extends React.Component {

	state = {
		user: {
			gender: '',
			age: 0,
			inches: 0,
			totalInches: 0,
			weight: 0,
			activityLevel: ''
		},
		maintain: 0,
		loseWeight: 0,
		gainWeight: 0
	}

	changeField (e, field){
		console.log('hello');
		let user = this.state.user
		user[field] = e.target.value
		this.setState({user})
		console.log(this.state.user);
 	}

	convertFeet (e){
		let user = this.state.user
		if (user.totalInches === 0) {
			let feetConverted = Number(e.target.value * 12)
			user.totalInches = user.totalInches + feetConverted
			this.setState({user})
		} else {
			user.totalInches = 0
			let feetConverted = Number(e.target.value * 12)
			user.totalInches = user.totalInches + feetConverted
			this.setState({user})
		}
		console.log(this.state.user);
	}

//if I enter inches first, it doesn't count the inches when I enter feet because...

	setInches (e){
		let user = this.state.user
		if (user.inches === 0) {
			user.inches = e.target.value
			user.totalInches = user.totalInches + Number(user.inches)
			this.setState({user})
		} else {
			user.totalInches = user.totalInches - user.inches

			user.inches = e.target.value
			user.totalInches = user.totalInches + Number(user.inches)
			this.setState({user})
		}
		console.log(this.state.user);
	}

	setGenderMale = () => {
		let user = this.state.user
		user.gender = 'male'
		this.setState({user})
		console.log(this.state.user);
	}

	setGenderFemale = () => {
		let user = this.state.user
		user.gender = 'female'
		this.setState({user})
		console.log(this.state.user);
	}

	setActivityLevelLow = () => {
		let user = this.state.user
		user.activityLevel = 'low'
		this.setState({user})
		console.log(this.state.user);
	}

	setActivityLevelMid = () => {
		let user = this.state.user
		user.activityLevel = 'mid'
		this.setState({user})
		console.log(this.state.user);
	}

	setActivityLevelHigh = () => {
		let user = this.state.user
		user.activityLevel = 'high'
		this.setState({user})
		console.log(this.state.user);
	}

	submit = () => {
		let user = this.state.user
		axios.post('http://localhost:4000/calories',
		this.state.user
	).then(res => {
		let maintain = this.state.maintain
		maintain = res.data.maintain
		let loseWeight = this.state.loseWeight
		loseWeight = res.data.loseWeight
		let gainWeight = this.state.gainWeight
		gainWeight = res.data.gainWeight
		this.setState({maintain, loseWeight, gainWeight})
		this.props.history.push({
		  pathname: '/Calories',
		  maintain: this.state.maintain
		})
	}).catch(err => {
		console.log(err);
	})
	}


	render() {
		return (
			<IonPage>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Ionic Blank</IonTitle>
					</IonToolbar>
				</IonHeader>

				Are you a man or a woman?
				<IonRadioGroup>
					<IonListHeader>
						<IonLabel>Fruit</IonLabel>
					</IonListHeader>
					<IonItem>
						<IonLabel>Man</IonLabel>
						<IonRadio slot="start" color="success" value="apple" onClick={this.setGenderMale}></IonRadio>
					</IonItem>
					<IonItem>
						<IonLabel>Woman</IonLabel>
						<IonRadio slot="start" color="danger" value="cherry" onClick={this.setGenderFemale}></IonRadio>
					</IonItem>
				</IonRadioGroup>

				<IonContent className="ion-padding">
					Please enter your age:
					<IonInput placeholder="36" onInput={(e)=>this.changeField(e, 'age')}></IonInput>
					Please enter your height:
					<IonInput placeholder="5'" onIonChange={(e)=>this.convertFeet(e, 'feet')}></IonInput><IonInput placeholder='11"' onIonChange={(e)=>this.setInches(e, 'inches')}></IonInput>
					How much do you weight?
					<IonInput placeholder="135lbs" onInput={(e)=>this.changeField(e, 'weight')}></IonInput>
					How active do you consider yourself?
					<IonRadioGroup>
						<IonListHeader>
							<IonLabel>Fruit</IonLabel>
						</IonListHeader>
						<IonItem>
							<IonLabel>Not Active</IonLabel>
							<IonRadio slot="start" color="success" value="apple" onClick={this.setActivityLevelLow}></IonRadio>
						</IonItem>

						<IonItem>
							<IonLabel>Moderately Active</IonLabel>
							<IonRadio slot="start" color="tertiary" value="grape" checked onClick={this.setActivityLevelMid}></IonRadio>
						</IonItem>

						<IonItem>
							<IonLabel>Highly Active</IonLabel>
							<IonRadio slot="start" color="danger" value="cherry" onClick={this.setActivityLevelHigh}></IonRadio>
						</IonItem>
					</IonRadioGroup>

					 <IonButton size="large" color="medium" onClick={this.submit}>Submit</IonButton>

					<p>
						If you get lost, the{' '}
						<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
							docs
						</a>{' '}
						will be your guide.
					</p>
				</IonContent>
			</IonPage>
		);
	}
}

export default Home;
