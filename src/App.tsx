import { IonApp, setupIonicReact,IonRouterOutlet, IonTabs,IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react'
import { home, images, heartCircle, wine, paperPlane } from 'ionicons/icons';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UIContext from './myContext'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
// import './theme/tailwind.css';
import './theme/variables.css';
import Ucapan from './pages/Ucapan';


setupIonicReact();

const App: React.FC = () => {
  const {showTabs} = React.useContext(UIContext);

  const gotoMempelai = (namaTab: string) => {
    if (namaTab == "acara") {
      document.getElementById('acara')?.scrollIntoView({behavior: "smooth"})
    }else if (namaTab == "mempelai"){
      document.getElementById('mempelai')?.scrollIntoView({behavior: "smooth"})
    }
    else if (namaTab == "home"){
      document.getElementById('home')?.scrollIntoView({behavior: "smooth"})
    }
    else if (namaTab == "galeri"){
      document.getElementById('galeri')?.scrollIntoView({behavior: "smooth"})
    }
    else if (namaTab == "ucapan"){
      document.getElementById('ucapan')?.scrollIntoView({behavior: "smooth"})
    }
}

 let tabStyle = showTabs? undefined: {display: "none"};
  return(
    
    <IonApp >
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
        <Route path="/:id" render={() => <Home />} exact={true} />
        <Route path="/home/:id" render={() => <Home />} exact={true} />
        <Route path="/" render={() => <Home />} exact={true}/>
        <Route path="/n/n404" >
          <NotFound/>
        </Route>
      </IonRouterOutlet>
              <IonTabBar slot='bottom' style={tabStyle}>
              <IonTabButton tab="home" onClick={() => gotoMempelai("home")}>
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="mempelai" onClick={() => gotoMempelai("mempelai")}>
                <IonIcon icon={heartCircle} />
                <IonLabel>Mempelai</IonLabel>
              </IonTabButton>
              <IonTabButton tab="undangan" onClick={() => gotoMempelai("acara")}>
                <IonIcon icon={wine} />
                <IonLabel>Acara</IonLabel>
              </IonTabButton>
              <IonTabButton tab="galeri" onClick={() => gotoMempelai("galeri")}>
                <IonIcon icon={images} />
                <IonLabel>Galeri</IonLabel>
              </IonTabButton>
              <IonTabButton tab="ucapan" onClick={() => gotoMempelai("ucapan")}>
                <IonIcon icon={paperPlane} />
                <IonLabel>Ucapan</IonLabel>
              </IonTabButton>
            </IonTabBar>
        </IonTabs>
    </IonReactRouter>
  </IonApp>
)};


export default App;
