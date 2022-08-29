import React from "react";
import './Galeri.css';
import { IonRow, IonSegment, IonCol, IonText, IonGrid, IonSlides, IonSlide, IonCard } from "@ionic/react";
import galeri1 from '../assets/img/Galeri/2.jpg'
import galeri3 from '../assets/img/Galeri/3.jpg'
import galeri4 from '../assets/img/Galeri/4.jpg'
const slideOpts = {
    
    initialSlide: 1,
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    speed: 400
  };
const items = [
    `${galeri1}`,
    `${galeri3}`,
    `${galeri4}`,

]

const Galeri: React.FC = () => {
    
  return (
    <IonSegment id='galeri' className='bg-cover relative min-h-[25rem] py-16 bg-no-repeat text-white'>
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText>
                        <h1 className="font-Dancingscript text-4xl">our wedding gallery</h1>
                    </IonText>
                </IonCol>
            </IonRow>
            <IonRow className="mt-5">
                <div className="max-w-sm mx-auto">
                <IonSlides pager={true} options={slideOpts}>
                    {items.map((gbr, i) => (

                    <IonSlide>
                        <IonCard className="card-custom">
                            <img src={gbr}/>
                        </IonCard>
                    </IonSlide>
                    ))}
                </IonSlides>

                </div>
            </IonRow>
        </IonGrid>

    </IonSegment>
  );
};

export default Galeri;
