import React from 'react'
import { IonContent, IonInput } from '@ionic/react';

class HeightAndWeight extends React.Component {
	render(){
		return(
			<>
				<div className='title'>Please enter your height:</div>
				<IonInput placeholder="5'" onIonChange={(e)=>this.convertFeet(e, 'feet')}>
				</IonInput>
				<IonInput placeholder='11"' onIonChange={(e)=>this.setInches(e, 'inches')}>
				</IonInput>
				<div className='title'>How much do you weight?</div>
				<IonInput placeholder="135lbs" onInput={(e)=>this.changeField(e, 'weight')}>
				</IonInput>
			</>
		)
	}
}

export default HeightAndWeight
