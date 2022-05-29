import { useState } from 'react';
import { 
  IonContent,
  IonButton,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar ,
  IonToast
} from '@ionic/react';
import { add, closeCircle } from 'ionicons/icons';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import './MainScreen.css';
import { useFetchContacts } from '../hooks/Contact.hook';

const MainScreen = () => {
  const [contact, setContact] = useState({});
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [contacts, loading, updater] = useFetchContacts();

  const onFinish = msg => {
    setIsVisible(false);
    setMessage(msg);
    setShowToast(true);
    updater();
    setContact({});
    if (isEditing) setIsEditing(false);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contactos</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => setIsVisible(!isVisible)}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        <IonModal isOpen={isVisible}>
          <IonContent>
            <IonHeader>
              <IonToolbar>
                <IonTitle>{isEditing ? "Editar" : "Añadir"}</IonTitle>
                <IonButton
                  color='danger'
                  onClick={() => {
                    setIsVisible(!isVisible);
                    setContact({});
                    setTimeout(() => {
                      if (isEditing) setIsEditing(false);
                    }, 500);
                  }}
                  slot="end"
                  style={{ marginRight: '3%' }}
                >
                  <IonIcon icon={closeCircle} />
                </IonButton>
              </IonToolbar>
            </IonHeader>
            <ContactForm
              oContact={contact}
              isEditing={isEditing}
              onFinish={onFinish}
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

        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(!showToast)}
          message={message}
          duration={2000}
        />

      </IonContent>
    </IonPage>
  );
};

export default MainScreen;
