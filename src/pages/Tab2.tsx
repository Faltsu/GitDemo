import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonLabel, IonBadge, IonItem } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="List page" />
        <IonList>
          <IonBadge slot="start">1</IonBadge>
          <IonLabel>Lorem ipsum dolor sit amet consectetur.</IonLabel>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
