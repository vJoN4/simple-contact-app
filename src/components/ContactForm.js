import { useState, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';

const initialState = {
  name: '',
  last_name: '',
  nickname: '',
  phone_number: '',
  email: ''
};

const ContactForm = ({ oContact = {} }) => {
  const [contact, setContact] = useState(initialState);

  useEffect(() => {
    if (Object.keys(oContact).length) {
      setContact(oContact);
    }
  }, [oContact]);

  const getFormData = ({ detail:{value}, target:{ name:inputName } }) => {
    if (!!value && !!inputName) {
      setContact({
        ...contact,
        [inputName]:value,
      })
    }
  };

  const handleSubmit = () => {
    console.log(contact);
  };

  return (
    <div style={{ padding: '5%' }}>
      <p>Por favor rellene los siguientes campos</p>
      <form style={{ marginTop: '5%' }}>
        <IonItem>
          <IonLabel>Nombre(s)</IonLabel>
          <IonInput clearInput onIonChange={getFormData} required name="name" />
        </IonItem>
        <IonItem>
          <IonLabel>Apellido(s)</IonLabel>
          <IonInput clearInput onIonChange={getFormData} required name="last_name" />
        </IonItem>
        <IonItem>
          <IonLabel>Apodo / alias</IonLabel>
          <IonInput clearInput onIonChange={getFormData} name="nickname" />
        </IonItem>
        <IonItem>
          <IonLabel>Número</IonLabel>
          <IonInput type="number" clearInput onIonChange={getFormData} required name="phone_number" />
        </IonItem>
        <IonItem>
          <IonLabel>Correo</IonLabel>
          <IonInput type="email" clearInput onIonChange={getFormData}  name="email" />
        </IonItem>
      
        <IonRow style={{ marginTop: '5%' }}>
          <IonButton onClick={handleSubmit} style={{ width: '100%' }}>Guardar Contacto</IonButton>
        </IonRow>
      </form>
    </div>
  );
};

export default ContactForm