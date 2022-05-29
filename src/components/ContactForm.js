import { useState, useEffect } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';

const initialState = {
  name: '',
  last_name: '',
  nickname: '',
  phone_number: '',
  email: ''
};

const ContactForm = ({ 
  oContact = {},
  isEditing = Boolean
}) => {
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

  const handleDelete = () => {
    console.log('delete');
  }

  return (
    <div style={{ padding: '5%' }}>
      <p>Por favor rellene los siguientes campos</p>
      <form style={{ marginTop: '5%' }}>
        <IonItem>
          <IonLabel>Nombre(s)</IonLabel>
          <IonInput 
            name="name"
            onIonChange={getFormData}
            value={contact?.name}
            clearInput
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel>Apellido(s)</IonLabel>
          <IonInput           
            required name="last_name"
            onIonChange={getFormData}
            value={contact?.last_name} 
            clearInput
          />
        </IonItem>
        <IonItem>
          <IonLabel>Apodo / alias</IonLabel>
          <IonInput
            name="nickname"
            onIonChange={getFormData}
            value={contact?.nickname}
            clearInput
          />
        </IonItem>
        <IonItem>
          <IonLabel>Número</IonLabel>
          <IonInput
            type="number"
            name="phone_number" 
            onIonChange={getFormData}
            value={contact?.phone_number}
            clearInput
            required
          />
        </IonItem>
        <IonItem>
          <IonLabel>Correo</IonLabel>
          <IonInput
            type="email"
            name="email" 
            onIonChange={getFormData}
            value={contact?.email}
            clearInput
          />
        </IonItem>
      
        <IonRow style={{ marginTop: '5%' }}>
          <IonButton
            onClick={handleSubmit} 
            style={{ width: '100%' }}
          >
            Guardar Contacto
          </IonButton>
        </IonRow>
        {isEditing ? (
          <IonRow style={{ marginTop: '5%' }}>
            <IonButton
              color='danger'
              onClick={handleDelete} 
              style={{ width: '100%' }}
            >
              Eliminar Contacto
            </IonButton>
        </IonRow>
        ): null}
      </form>
    </div>
  );
};

export default ContactForm