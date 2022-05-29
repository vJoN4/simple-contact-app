import { useState } from 'react';
import { IonContent, IonButton, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import './MainScreen.css';
import { useFetchContacts } from '../hooks/Contact.hook';

const MainScreen = () => {
  const [contact, setContact] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [contacts, loading] = useFetchContacts();

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
              <IonTitle>{isEditing ? "Editar" : "Añadir"}</IonTitle>
              <IonButton
                onClick={() => {
                  setIsVisible(!isVisible);
                  setContact({});
                }}
                slot="end"
              >
                Cancelar
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <ContactForm
            oContact={contact}
            isEditing={isEditing}
          />
        </IonContent>
      </IonModal>
        <ContactList 
          items={contacts.length ? contacts : []}
          loading={loading}
          setIsVisible={setIsVisible}
          setContact={setContact}
          setIsEditing={setIsEditing}
        />
      </IonContent>
    </IonPage>
  );
};

export default MainScreen;
