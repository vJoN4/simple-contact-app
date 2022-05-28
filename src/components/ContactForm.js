import { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';

const initialState = {
  name: '',
  last_name: '',
  nickname: '',
  phone_number: '',
  email: ''
};

const ContactForm = () => {
  const [contact, setContact] = useState(initialState);

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
          <IonInput clearInput onIonChange={getFormData} required name="name"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Apellido(s)</IonLabel>
          <IonInput clearInput onIonChange={getFormData} required name="last_name"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Apodo / alias</IonLabel>
          <IonInput clearInput onIonChange={getFormData} name="nickname"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Número</IonLabel>
          <IonInput type="number" clearInput onIonChange={getFormData} required name="phone_number"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Correo</IonLabel>
          <IonInput type="email" clearInput onIonChange={getFormData}  name="email"></IonInput>
        </IonItem>
      
        <IonRow style={{ marginTop: '5%' }}>
          <IonButton onClick={handleSubmit} style={{ width: '100%' }}>Guardar Contacto</IonButton>
        </IonRow>
      </form>
    </div>
  );
};

export default ContactForm