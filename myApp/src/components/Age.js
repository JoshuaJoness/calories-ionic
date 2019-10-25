import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonButton, IonRow, IonCol, IonRange, IonIcon } from '@ionic/react';
import '../styles/global.css'

class Age extends React.Component {
	state={
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

	change (e) {
		if (e.target.value < 3) {
			let user = this.state.user
			user.activityLevel = 'low'
		} else if (e.target.value === 3) {
				let user = this.state.user
				user.activityLevel = 'mid'
		} else {
			let user = this.state.user
			user.activityLevel = 'high'
		}
		console.log(this.state.user);
	}

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

				<IonItem>
					<IonRange onIonChange={this.change} min="0" max="5" step="1" value="1" snaps color="danger">
						<IonIcon slot="start" size="small" color="danger" name="thermometer"></IonIcon>
						<IonIcon slot="end" color="danger" name="thermometer"></IonIcon>
					</IonRange>
				</IonItem>




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
						<IonLabel>Highly Active</IonLabel>
						<IonRadio slot="start" color="danger" value="cherry" onClick={this.setActivityLevelHigh}></IonRadio>
					</IonItem>
				</IonRadioGroup>
			</>
		)
	}

}

export default Age