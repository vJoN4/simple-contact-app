import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ContactForm from './ContactForm';
import './Tab2.css';

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Guardar nuevo contacto</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ContactForm />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
