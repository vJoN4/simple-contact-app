import { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel, IonRow, IonSpinner } from '@ionic/react';
import { deleteContact, saveContact } from '../environments/api';

import { Formik } from "formik";
import * as yup from "yup";

const initialState = {
  name: '',
  last_name: '',
  nickname: '',
  email: '',
  phone_number: ''
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(10, 'El nombre debe tener al menos 10 caracteres')
    .required('Nombre(s) es requerido'),
  last_name: yup
    .string()
    .min(10, 'Los apellidos debe tener al menos 10 caracteres')
    .required('Apellido(s) es requerido'),
  nickname: yup
    .string()
    .min(4, 'El apodo debe tener al menos 4 caracteres'),
  email: yup
    .string()
    .email("Ingresa un email valido"),
  phone_number: yup
    .string()
    .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'El número debe tener 10 digitos')
    .min(10, 'El número debe tener 10 digitos')
    .required('El Número es requerido'),
});

const ContactForm = ({ 
  oContact = {},
  isEditing = Boolean,
  onFinish
}) => {
  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const generalCallBack = async (fn, data = undefined, msg="") => {
    setLoading(true);
    await fn(data);
    setLoading(false);
    onFinish(msg);
  };

  const onSubmit = async values => {
    generalCallBack(saveContact, values, "Contacto guardado");
  };

  const handleDelete = () => {
    if (oContact?.id) {
      setDeleting(true);
      generalCallBack(deleteContact, oContact.id, "Contacto eliminado");
      setDeleting(false);
    }
  }

  return (
    <div style={{ padding: '5%' }}>
      <p>Por favor rellene los siguientes campos</p>
      <Formik 
        style={{ marginTop: '5%' }}
        initialValues={isEditing && Object.keys(oContact).length ? oContact : initialState}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <IonItem>
              <IonLabel>Nombre(s)</IonLabel>
                <IonInput 
                  name="name"
                  onIonChange={handleChange}
                  value={values?.name}
                  clearInput
                  required
                />
              </IonItem>
              <p className="error">
                {touched.name && errors.name}
              </p>
              <IonItem>
                <IonLabel>Apellido(s)</IonLabel>
                  <IonInput           
                    required name="last_name"

                    onIonChange={handleChange}
                    value={values?.last_name} 
                    clearInput
                  />
              </IonItem>
              <p className="error">
                {touched.last_name && errors.last_name}
              </p>
              <IonItem>
                <IonLabel>Apodo / alias</IonLabel>
                  <IonInput
                    name="nickname"

                    onIonChange={handleChange}
                    value={values?.nickname}
                    clearInput
                  />
              </IonItem>
              <p className="error">
                {touched.nickname && errors.nickname}
              </p>
              <IonItem>
                <IonLabel>Número</IonLabel>
                  <IonInput
                    type="number"
                    name="phone_number" 
                    onIonChange={handleChange}
                    value={values?.phone_number}
                    clearInput
                    required
                  />
              </IonItem>
              <p className="error">
                {touched.phone_number && errors.phone_number}
              </p>
              <IonItem>
                <IonLabel>Correo</IonLabel>
                  <IonInput
                    type="email"
                    name="email" 

                    onIonChange={handleChange}
                    value={values?.email}
                    clearInput
                  />
              </IonItem>
              <p className="error">
                {touched.email && errors.email}
              </p>
              
              <IonRow style={{ marginTop: '5%' }}>
                <IonButton
                  onClick={handleSubmit} 
                  style={{ width: '100%' }}
                >
                  {loading && deleting ? <IonSpinner name="crescent" /> : "Guardar Contacto" }
                </IonButton>
              </IonRow>
              {isEditing ? (
                <IonRow style={{ marginTop: '5%' }}>
                  <IonButton
                    color='danger'
                    onClick={handleDelete} 
                    style={{ width: '100%' }}
                  >
                    {deleting ? <IonSpinner name="crescent" /> : "Eliminar Contacto" }
                  </IonButton>
                </IonRow>
              ): null}
            </>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
