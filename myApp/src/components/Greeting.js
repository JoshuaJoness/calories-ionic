import React from 'react'
import { IonContent, IonButton, IonItem, IonLabel, IonRadio, IonRadioGroup, IonListHeader, IonList } from '@ionic/react';
import '../styles/global.css'

class Greeting extends React.Component {
	state = {
		goal: ''
	}

	click = () => {
		this.props.history.push({
		  pathname: '/gender',
		  goal: this.state.goal
		})}

	setGoal = (e) => {
		if (e.target.value === 'lose') {
			let goal = this.state.goal
			goal = 'lose'
			this.setState({goal})
			console.log(this.state.goal);
		} else if (e.target.value === 'maintain'){
			let goal = this.state.goal
			goal = 'maintain'
			this.setState({goal})
			console.log(this.state);
		} else {
			let goal = this.state.goal
			goal = 'gain'
			this.setState({goal})
			console.log(this.state);
		}
	}

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
			}
		}
		return(
			<>
				<h1 style={styles.heading}>Welcome to 'Calorie Calculator!'</h1><br></br>
				<p style={styles.p}>Just answer a few questions and we'll let you know how much calories you should be consuming to achieve your goals!</p>
				<br></br>
				<p style={styles.p}>First of all are you trying to:</p>

				    <IonList style={styles.p}>
				      <IonRadioGroup>


				        <IonItem>
				          <IonLabel>Lose Weight</IonLabel>
				          <IonRadio onClick={this.setGoal} value="lose" />
				        </IonItem>

								<IonItem>
									<IonLabel>Maintain</IonLabel>
									<IonRadio onClick={this.setGoal} value="maintain" />
								</IonItem>

				        <IonItem>
				          <IonLabel>Gain Weight</IonLabel>
				          <IonRadio onClick={this.setGoal} value="gain" />
				        </IonItem>

				      </IonRadioGroup>
				    </IonList>



				<IonButton style={styles.button} onClick={this.click}>
				Okay!
				</IonButton>
			</>
		)
	}
}

export default Greeting
