import { IonAvatar, IonItem, IonLabel, IonList } from '@ionic/react';

const List = ({ items = [] }) => {
  return (
    <IonList>
      {items.length ? 
        (
          items.map(oItem => (
          <IonItem key={oItem.id}>
            <IonAvatar slot="start">
              <img alt="" src={require("../assets/img/contact.png")} height="52px" width="52px"/>
            </IonAvatar>
            <IonLabel>
              <h2>{oItem.name}</h2>
              <h3>Apodo: {oItem.nickname !== '' ? oItem.nickname : 'Sin asignar' }</h3>
            </IonLabel>
          </IonItem>
          ))
        ) : (<h1>No hay contactos aun</h1>)
      }
    </IonList>
  );
};

export default List;