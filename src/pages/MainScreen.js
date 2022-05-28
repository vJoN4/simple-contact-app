import { useState } from 'react';
import { IonContent, IonButton, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import List from './List';
import ContactForm from './ContactForm';
import './MainScreen.css';

const contactJSON = [{"id":"9a712372-75c3-4cac-ba38-81024f8219e4","name":"Wise Calhoun","nickname":"genericNickname"},{"id":"fa6d5d9f-5f91-4602-9c5f-d893442a09b9","name":"Ortega Davidson","nickname":""},{"id":"cc1e5189-3958-4e1e-9fbb-f8898abb069e","name":"Clare Rowland","nickname":""},{"id":"c06ba97f-224f-4470-8188-5fcc08df223d","name":"Lori Sims","nickname":"genericNickname"},{"id":"fa7e31da-7516-4628-a190-abeaa7888439","name":"Mccarthy Mays","nickname":""},{"id":"90445dea-44d9-425e-9946-cac205a11da9","name":"Araceli Bush","nickname":"genericNickname"},{"id":"5e3dfd64-6d77-4b2f-9fb7-9d56249ada7c","name":"Bradshaw Wilkerson","nickname":"genericNickname"},{"id":"21529d56-b1da-484f-ac1a-bf02fed57ec7","name":"Joyce Head","nickname":"genericNickname"},{"id":"61fe5eb3-3da3-4f2b-9acc-e025bcfba562","name":"Eileen Becker","nickname":""},{"id":"48828d41-22bd-4c57-8bef-3a958672b19b","name":"Eve Blackburn","nickname":""},{"id":"ca51dc3e-05b4-47a1-8c15-ae152744c77a","name":"Leigh Harrison","nickname":""},{"id":"576635b6-4f5a-456d-9768-1f8e769a28b5","name":"Twila Mcdowell","nickname":"genericNickname"},{"id":"f3e5dcea-1916-45ea-b8c3-3a7ddb6750fe","name":"Millicent Salas","nickname":"genericNickname"},{"id":"83c1411f-8ca4-4e1a-a6b7-d0dc4520f3b8","name":"Corinne Holman","nickname":""},{"id":"31dded49-172d-4a23-ac9e-ec7efdbe9433","name":"Clemons Delaney","nickname":"genericNickname"},{"id":"050d6e39-74e2-41e2-acca-cfbca708ac1b","name":"Randi Bray","nickname":"genericNickname"},{"id":"5f060603-faf6-4f66-9b59-5d7063000e62","name":"Lela Downs","nickname":""},{"id":"82d6dda4-2d82-4635-a52a-fc50be16584d","name":"Kramer Craft","nickname":"genericNickname"},{"id":"ecdf74ac-7ab0-409f-b079-74b2372acff7","name":"Reeves Preston","nickname":"genericNickname"},{"id":"a55dd868-9644-426b-892d-309cc9064c64","name":"Rosario Bass","nickname":""}];

const MainScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contactos</IonTitle>
          <IonButton slot="end" onClick={() => setIsVisible(!isVisible)}>Agregar</IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonModal isOpen={isVisible}>
        <IonContent>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Añadir</IonTitle>
              <IonButton onClick={() => setIsVisible(!isVisible)} slot="end">Cancelar</IonButton>
            </IonToolbar>
          </IonHeader>
          <ContactForm />
        </IonContent>
      </IonModal>
        <List items={contactJSON}/>
      </IonContent>
    </IonPage>
  );
};

export default MainScreen;
