import React from 'react'
import { IonTabs, IonTab, IonHeader, IonContent, IonTitle, IonToolbar, IonInput, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonButton  } from '@ionic/react';

class Nav extends React.Component {
	render(){
		return(
			<IonTabs>

	<IonTab tab="music">
		<IonHeader translucent>
			<IonToolbar>
				<IonTitle>Music</IonTitle>
			</IonToolbar>
		</IonHeader>

		<IonContent fullscreen class="ion-padding">
			<h1>Music</h1>
		</IonContent>
	</IonTab>

</IonTabs>

		)
	}
}

export default Nav
