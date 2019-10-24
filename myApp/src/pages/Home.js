import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonButton  } from '@ionic/react';
import React from 'react';
import axios from 'axios'

import { connect } from 'react-redux'
import { SET_GENDER } from '../actions/genderActions'
import setGender from '../actions/genderActions'


class Home extends React.Component {

	componentWillMount () {
		this.props.setGender()
	}

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
		const styles = {
			boxes:{
				marginBottom: '30px'
			},
			boxes:{
				marginTop: '30px',
				marginBottom: '30px'
			}
		}
		return (
			<IonPage>
			<IonContent>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Calorie Calculator</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonItem style={styles.boxes}>
				<IonHeader>Are you:</IonHeader>
				<IonRadioGroup style={styles.boxes}>
					<IonItem>
						<IonLabel>Male</IonLabel>
						<IonRadio slot="start" color="success" value="apple" onClick={this.setGenderMale}></IonRadio>
					</IonItem>
					<IonItem>
						<IonLabel>Female</IonLabel>
						<IonRadio slot="start" color="danger" value="cherry" onClick={this.setGenderFemale}></IonRadio>
					</IonItem>
				</IonRadioGroup>
				</IonItem>


<IonItem style={styles.boxes}>
				<IonHeader>	Please enter your age: </IonHeader>


					<IonInput placeholder="36" onInput={(e)=>this.changeField(e, 'age')}></IonInput>
</IonItem>
<IonItem style={styles.boxes}>
					Please enter your height:


					<IonInput placeholder="5'" onIonChange={(e)=>this.convertFeet(e, 'feet')}></IonInput><IonInput placeholder='11"' onIonChange={(e)=>this.setInches(e, 'inches')}></IonInput>
					</IonItem>
					<IonItem>
					How much do you weight?
					<IonInput placeholder="135lbs" onInput={(e)=>this.changeField(e, 'weight')}></IonInput>
					</IonItem>


					<IonItem style={styles.boxes}>
					How active do you consider yourself?
					<IonRadioGroup>

						<IonItem>
							<IonLabel>Not Active</IonLabel>
							<IonRadio slot="start" color="success" value="apple" onClick={this.setActivityLevelLow}></IonRadio>
						</IonItem>

						<IonItem>
							<IonLabel>Moderately Active</IonLabel>
							<IonRadio slot="start" color="tertiary" value="grape" checked onClick={this.setActivityLevelMid}></IonRadio>
						</IonItem>

						<IonItem>
							<IonLabel class="ion-text-center">Highly Active</IonLabel>
							<IonRadio slot="start" color="danger" value="cherry" onClick={this.setActivityLevelHigh}></IonRadio>
						</IonItem>
					</IonRadioGroup>
					</IonItem>

					 <IonButton size="large" color="medium" onClick={this.submit}>Submit</IonButton>

			</IonContent>
			</IonPage>
		);
	}
}

export default connect(null, {setGender})(Home);
