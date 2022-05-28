import { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

const initialState = {
  name: '',
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
    <div>
      <p>Por favor rellene los siguientes campos</p>
      <form style={{ marginTop: '5%' }}>
        <IonItem>
          <IonLabel>Nombre completo</IonLabel>
          <IonInput clearInput onIonChange={getFormData} name="name"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Apodo / alias</IonLabel>
          <IonInput clearInput onIonChange={getFormData} name="nickname"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Número</IonLabel>
          <IonInput type="number" clearInput onIonChange={getFormData} name="phone_number"></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Correo</IonLabel>
          <IonInput type="email" clearInput onIonChange={getFormData} name="email"></IonInput>
        </IonItem>
      
        <IonButton onClick={handleSubmit}>Guardar</IonButton>
      </form>
    </div>
  );
};

export default ContactForm