import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonButton  } from '@ionic/react';

class ActivityLevel extends React.Component {
	render() {
		return(
			<>
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
			</>
		)
	}
}

export default ActivityLevel
