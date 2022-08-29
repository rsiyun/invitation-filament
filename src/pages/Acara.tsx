import { IonButton, IonCol, IonContent, IonRow, IonSegment, IonText, IonGrid } from '@ionic/react';

const Acara: React.FC = () => {
  return (
    <IonSegment id='acara' className='bg-cover relative min-h-[25rem] py-16 bg-no-repeat bg-[#f3f3f3] text-[#323232]'>
      <div className="w-[85%] mx-auto text-center">
        <IonGrid>
          <IonRow className='flex flex-col ion-text-center mb-4'>
            <IonText>
              <h6 className='font-lato text-sm tracking-[.2rem] uppercase font-light mb-4'>Jadwal Pernikahan</h6>
              <h4 className="font-Dancingscript text-4xl mb-4">Assalamualaikum wr.wb</h4>
              <h5 className='font-light font-lato'>Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud menyelenggarakan Pernikahan putra-putri kami yang Insya Allah akan diselenggarakan pada :</h5>
            </IonText>
          </IonRow>
          <IonRow className='mb-4 mt-4'>
            <IonCol size='12' className='mb-2'>
              <h2 className='font-Dancingscript text-3xl'>Akad Nikah</h2>
            </IonCol>
            <IonCol className="flex flex-col justify-center">
              <div className="border-t-2 border-b-2 pt-3 pb-3 border-slate-600">
              <IonText>
                <h5>Sabtu</h5>
              </IonText>
              </div>
            </IonCol>
            <IonCol size="3" className="flex flex-col items-center text-center">
                  <h6 className='mx-auto'>Nov</h6>
                  <h6 className='mx-auto text-3xl text-[#a18b68]'>17</h6>
                  <h6 className='mx-auto'>2022</h6>
            </IonCol>
            <IonCol className="flex flex-col justify-center">
              <div className="border-t-2 border-b-2 pt-3 pb-3 border-slate-600">
                <IonText>
                  <h5>09.00 WIB</h5>
                </IonText>
              </div>
            </IonCol>
            
            <IonCol size='12' className='mb-2'>
              <IonText className="text-sm">
                <h6 className='mb-1'>Perum. Gading Fajar 2</h6>
                <h6 className='mb-1'>blok D10 no.05</h6>
                <h6 className='mb-1'>Kabupaten Sidoarjo, Jawa Timur</h6>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className='mb-4 mt-4'>
            <IonCol>
              <div className='h-[2px] w-full bg-[#8a6a3d]'></div>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='12' className='mb-2'>
              <h2 className='font-Dancingscript text-3xl'>Resepsi</h2>
            </IonCol>
            <IonCol className="flex flex-col justify-center">
              <div className="border-t-2 border-b-2 pt-3 pb-3 border-slate-600">
              <IonText>
                <h5>Selasa</h5>
              </IonText>
              </div>
            </IonCol>
            <IonCol size="3" className="flex flex-col items-center text-center">
                  <h6 className='mx-auto'>Nov</h6>
                  <h6 className='mx-auto text-3xl text-[#a18b68]'>20</h6>
                  <h6 className='mx-auto'>2022</h6>
            </IonCol>
            <IonCol className="flex flex-col justify-center">
              <div className="border-t-2 border-b-2 pt-3 pb-3 border-slate-600">
                <IonText>
                  <h5>14.30 WIB</h5>
                </IonText>
              </div>
            </IonCol>
            
            <IonCol size='12' className='mb-2'>
              <IonText className="text-sm">
                <h6 className='mb-1'>Perum. Gading Fajar 2</h6>
                <h6 className='mb-1'>blok D10 no.05</h6>
                <h6 className='mb-1'>Kabupaten Sidoarjo, Jawa Timur</h6>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size='12' className='mt-2'>
              <IonButton color={"vibrant"} className='text-sm' size='large'>Lihat Lokasi</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonSegment>
  );
};

export default Acara;
