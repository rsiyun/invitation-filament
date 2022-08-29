import { IonContent, IonPage,} from '@ionic/react';
import Acara from './Acara'
import Banner from './Banner'
import Mempelai from './Mempelai';
import './Home.css';
import Galeri from './Galeri';
import Ucapan from './Ucapan';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen={false}>
        <Banner/>
        <Mempelai/>
        <Acara/>
        <Galeri />
        <Ucapan />
      </IonContent>
    </IonPage>
  );
};

export default Home;
