import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonButton, IonRow, IonCol, IonRange, IonIcon } from '@ionic/react';
import '../styles/global.css'
import axios from 'axios'

class Age extends React.Component {
	state = {
		activityLevel:'',
		user:{
			totalInches: 0,
			activityLevel: ''
		}
	}

	componentWillMount () {
		let user = this.state.user
		user.goal = this.props.location.goal
		user.gender = this.props.location.gender
		console.log(this.state.user)
	}

	changeField (e, field){
		console.log('hello');
		let user = this.state.user
		user[field] = Number(e.target.value)
		this.setState({user})
		console.log(this.state.user);
	}

	convertFeet (e) {
		let user = this.state.user
		user.totalInches = Number(e.target.value * 12)
		this.setState({user})
		console.log(this.state.user);
	}

	// convertFeet (e){
	// 	let user = this.state.user
	// 	if (user.totalInches === 0) {
	// 		let feetConverted = Number(e.target.value * 12)
	// 		user.totalInches = user.totalInches + feetConverted
	// 		this.setState({user})
	// 	} else {
	// 		user.totalInches = 0
	// 		let feetConverted = Number(e.target.value * 12)
	// 		user.totalInches = user.totalInches + feetConverted
	// 		this.setState({user})
	// 	}
	// 	console.log(this.state.user);
	// }

	setInches (e) {
		if (this.state.user.totalInches === 0) {
			alert("Please enter 'feet' first, if you make a mistake, refresh the page")
		} else {
		let user = this.state.user
		user.totalInches = user.totalInches + Number(e.target.value)
		this.setState({user})
		console.log(this.state.user);
		}
	}

	change = (e) => {
		console.log(e.target.value);
		let user = this.state.user
		if (e.target.value === 'low') {
			user.activityLevel = 'low'
			this.setState({user})
		} else if (e.target.value === 'mid') {
			user.activityLevel = 'mid'
			this.setState({user})
		} else {
			user.activityLevel = 'high'
			this.setState({user})
		}
		console.log(this.state.user);
	}

	// change = (e) => {
	// 	console.log(e.target.value);
	// 	let user = this.state.user
	// 	if (e.target.value < 3) {
	// 		user.activityLevel = 'low'
	// 		this.setState({user})
	// 	} else if (e.target.value === 3) {
	// 		user.activityLevel = 'mid'
	// 		this.setState({user})
	// 	} else {
	// 		user.activityLevel = 'high'
	// 		this.setState({user})
	// 	}
	// 	console.log(this.state.user);
	// }

	// setInches (e){
	// 	let user = this.state.user
	// 	if (user.inches === 0) {
	// 		user.inches = e.target.value
	// 		user.totalInches = user.totalInches + Number(user.inches)
	// 		this.setState({user})
	// 	} else {
	// 		user.totalInches = user.totalInches - user.inches
	//
	// 		user.inches = e.target.value
	// 		user.totalInches = user.totalInches + Number(user.inches)
	// 		this.setState({user})
	// 	}
	// 	console.log(this.state.user);
	// }

	submit = () => {
		console.log('hello');
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
			pathname: '/results',
			maintain: this.state.maintain
		})
	}).catch(err => {
		console.log(err);
	})
	}

	render(){
		const styles = {
			height: {
				width: '50%',
				display: 'inline'
			},
			title:{
				marginLeft: '5%',
				marginTop: '5%'
			},
			titleOne:{
				marginLeft:'5%',
				marginTop: '10%'
			},
			input: {
				marginLeft:'5%'
			}
		}
		return(
			<>
				<div style={styles.titleOne}>Please enter your age:</div>
				<IonInput style={styles.input} placeholder="Your age here" onInput={(e)=>this.changeField(e, 'age')}></IonInput>
				<div style={styles.title}>Please enter your height:</div>
				<IonRow>
					<IonCol>
					<IonInput style={styles.input} placeholder="5'" onInput={(e)=>this.convertFeet(e, 'feet')}>
					</IonInput>
					</IonCol>
					<IonCol>
					<IonInput style={styles.input} placeholder='11"' onInput={(e)=>this.setInches(e, 'inches')}>
					</IonInput>
					</IonCol>
				</IonRow>
				<div style={styles.title}>Please enter your weight:</div>
				<IonInput style={styles.input} placeholder="135lbs" onInput={(e)=>this.changeField(e, 'weight')}>
				</IonInput>
				<h3 style={styles.title}>Lastly...How active do you consider yourself?</h3>






				<IonRadioGroup>
					<IonItem>
						<IonLabel>Not Active</IonLabel>
						<IonRadio slot="start" color="success" value="low"  onClick={this.change}></IonRadio>
					</IonItem>

					<IonItem>
						<IonLabel>Moderately Active</IonLabel>
						<IonRadio slot="start" color="tertiary" value="mid"  onClick={this.change}></IonRadio>
					</IonItem>

					<IonItem>
						<IonLabel>Highly Active</IonLabel>
						<IonRadio slot="start" color="danger" value="high" onClick={this.change}></IonRadio>
					</IonItem>
				</IonRadioGroup>

				<IonButton onClick={this.submit}>Submit</IonButton>
			</>
		)
	}

}
// <IonItem>
// 	<IonRange IonChange={this.change} min="0" max="5" step="1" value="1" snaps color="danger">
// 		<IonIcon slot="start" size="small" color="danger" name="thermometer"></IonIcon>
// 		<IonIcon slot="end" color="danger" name="thermometer"></IonIcon>
// 	</IonRange>
// </IonItem>

export default Age
