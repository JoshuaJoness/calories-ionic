import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonButton, IonRow, IonCol, IonRange, IonIcon, IonCheckbox, IonSelect, IonSelectOption, IonList } from '@ionic/react';
import '../styles/global.css'
import axios from 'axios'


class Age extends React.Component {
	state = {
		user:{
			totalInches: 0,
			activityLevel: ''
		},
		height:{
			feet:[1,2,3,4,5,6,7,8],
			inches:[1,2,3,4,5,6,7,8,9,11]
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

	convertFeet = (e) => {
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

	setInches = (e) => {
		if (this.state.user.totalInches === 0) {
			alert("Please enter 'feet' first, if you make a mistake, refresh the page")
		} else {
		let user = this.state.user
		user.totalInches = user.totalInches + Number(e.target.value)
		this.setState({user})
		console.log(this.state.user);
		}
	}

	setGender = (e) => {
		console.log(e.target.value);
		let user = this.state.user
		if (e.target.value === 'male') {
			user.gender = 'male'
			this.setState({user})
			console.log(this.state.user.gender);
		} else {
			user.gender = 'female'
			this.setState({user})
			console.log(this.state.user.gender);
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

	test = (e) => {
		console.log('hello');
	}

	render(){
		const styles = {
			height: {
				width: '50%',
				display: 'inline'
			},
			input: {
				marginLeft:'5%'
			},
			gender: {
				padding: '10%',
				marginLeft: '7%'
			},
			radio: {
				marginLeft: '7%',
				padding: '10%'
			},
			checkbox:{
				paddingTop: '5%'
			},
			group: {
				display: 'grid',
				gridTemplateColumns: '50% 50%'
			},
			button: {
				marginLeft: '40%',
				marginTop: '8%'
			},
			title: {
				fontWeight: 'bold',
				marginTop: '7%'
			},
			boxes: {
				display: 'grid',
				gridTemplateColumns: '50% 50%',
				marginTop: '5%'
			},
			item: {
				marginTop: '10%'
			},
			img: {
				width: '100%',
				opacity: '0.5'
			}
		}
		return(
			<>
			<img style={styles.img} src="./questions.svg"/>
			<form>

<div style={styles.boxes}>
<div style={styles.title}>Please select a gender:</div>
				<IonItem lines="none">

					<IonLabel>Gender:</IonLabel>
					<IonSelect onIonChange={this.setGender}   interface="popover">
						<IonSelectOption value="male">Male</IonSelectOption>
						<IonSelectOption value="female">Female</IonSelectOption>
					</IonSelect>
				</IonItem>
				</div>


<div style={styles.boxes}>
<div style={styles.title}>Please enter your age:</div>
<IonItem lines='none'>

				<IonInput style={styles.input} placeholder="Your age here" onInput={(e)=>this.changeField(e, 'age')}></IonInput>
				</IonItem>
				</div>

<div style={styles.title}>Please enter your height:</div>
				<div style={styles.boxes}>

					<IonItem lines="none">

						<IonLabel>Feet</IonLabel>
						<IonSelect onIonChange={this.convertFeet}   interface="popover">
							{
								this.state.height.feet.map((number, i) => {
								return <IonSelectOption key={i} value={number}>{number}'</IonSelectOption>
							})
						}
						</IonSelect>
					</IonItem>
					<IonItem lines="none">
						<IonLabel>Inches</IonLabel>
						<IonSelect onIonChange={this.setInches}   interface="popover">
							{
								this.state.height.inches.map((number, i) => {
								return <IonSelectOption key={i} value={number}>{number}"</IonSelectOption>
							})
						}
						</IonSelect>
					</IonItem>

				</div>

<div style={styles.boxes}>
<div style={styles.title}>Please enter your weight:</div>
<IonItem style={styles.item} lines="none">

				<IonInput style={styles.input} placeholder="135lbs" onInput={(e)=>this.changeField(e, 'weight')}>
				</IonInput>
</IonItem>
</div>

<div style={styles.boxes}>
	<div style={styles.title}>Lastly...how active do you consider yourself?</div>
				<IonItem lines="none">
          <IonLabel>Activity Level</IonLabel>
          <IonSelect onIonChange={this.change}   interface="popover">
            <IonSelectOption value="low">Not Active</IonSelectOption>
            <IonSelectOption value="mid">Moderately Active</IonSelectOption>
            <IonSelectOption value="high">Highly Active</IonSelectOption>
          </IonSelect>
        </IonItem>
				</div>

				<IonButton style={styles.button} onClick={this.submit}>Submit</IonButton>
				</form>

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
