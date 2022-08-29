import { IonAvatar, IonCol, IonContent, IonRow, IonSegment, IonText, IonThumbnail } from '@ionic/react';
import cowok from "../assets/img/cuwu.jpg"
import cewek from "../assets/img/ciwi.jpg"

const Mempelai: React.FC = () => {
  return (
    <IonSegment id='mempelai' className='bg-cover relative min-h-[25rem] py-24 bg-no-repeat bg-[#f3f3f3] text-[#323232]'>
      <div className="w-[85%] mx-auto text-center">

      <IonText>
        <h2 className="font-Dancingscript text-[1.5rem] leading-[1.5rem] mb-4">“Dua jiwa namun satu pikiran, <br /> dua hati namun satu perasaan”</h2>
      </IonText>
        <IonRow className="py-8 flex-nowrap">
          <IonCol>
            <div className="mx-auto mb-[2rem] img-wrapper-spouse">
            <div className="rounded-full overflow-hidden w-32 h-32">
              <img className="object-cover w-[100%] h-[100%]" src={cowok} alt='cewek' />
            </div>
            </div>
            <IonText >
              <h3 className='mb-5 font-Dancingscript text-2xl font-bold '>Riyadi Doe</h3>
              <h5 className="mb-2">Putra dari</h5>
              <h5 className="text-xs">Bpk. Edi Supardi</h5>
              <h5 className="text-xs">Ibu Sarwenda sip</h5>
            </IonText>
          </IonCol>
          <IonCol className="flex items-center">
            <h1 className='mx-auto font-Dancingscript text-3xl'>&</h1>
            </IonCol>
          <IonCol>
            <div className="img-wrapper-spouse mx-auto mb-[2rem]">
              <div className="rounded-full overflow-hidden w-32 h-32">
                <img className="object-cover w-[100%] h-[100%]" src={cewek} alt='cewek' />
              </div>
            </div>
            <IonText>
              <h3 className='mb-5 font-Dancingscript text-2xl font-bold'>Vilensia Doe</h3>
              <h5 className='mb-2'>Putri dari</h5>
              <h5 className="text-xs">Bpk. Jamal Suriono</h5>
              <h5 className="text-xs">Ibu Aminah sip</h5>
            </IonText>
          </IonCol>
        </IonRow>
      </div>
    </IonSegment>
  );
};

export default Mempelai;
