import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useEffect} from 'react';
import UIContext from '../myContext';


const NotFound: React.FC = () => {
  const {setShowTabs} = React.useContext(UIContext)

  useEffect(() => {
    setShowTabs(false);

    return() => {
      setShowTabs(true)
    }
  })

  return (
    <IonPage>
      <IonContent fullscreen={false}>
        <h1>Trial halaman coba masuk ke "host/siyun"</h1>
      </IonContent>
    </IonPage>
  );
};

export default NotFound;
