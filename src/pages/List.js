import { IonAvatar, IonItem, IonLabel, IonList } from '@ionic/react';

const List = ({ items = [] }) => {
  return (
    <IonList>
      {
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
      }
    </IonList>
  );
};

export default List;