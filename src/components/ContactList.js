import { IonAvatar, IonButton, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import { create } from 'ionicons/icons';

const ContactList = ({ 
  items = [],
  setContact,
  setIsVisible,
  setIsEditing
}) => {

  const handleContact = contact => {
    setContact(contact);
    setIsVisible(true);
  }

  return (
    <IonList>
      {items.length ? 
        (
          items.map(oItem => (
          <IonItem key={oItem.id} button="true">
            <IonAvatar slot="start">
              <img alt="" src={require("../assets/img/contact.png")} height="52px" width="52px"/>
            </IonAvatar>
            <IonLabel>
              <h2>{oItem.name}</h2>
              <h3>Apodo: {oItem.nickname !== '' ? oItem.nickname : 'Sin asignar' }</h3>
            </IonLabel>
            <IonButton item={oItem} onClick={({ target: { item } }) => {
              handleContact(item);
              setIsEditing(true);
            }}>
              <IonIcon icon={create}></IonIcon>
            </IonButton>
          </IonItem>
          ))
        ) : (<h1>No hay contactos aun</h1>)
      }
    </IonList>
  );
};

export default ContactList;