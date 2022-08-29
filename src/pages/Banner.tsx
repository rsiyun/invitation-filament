import { IonButton, IonSegment, IonText } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';


const Banner: React.FC = () => {
  const [title, setTitle] = useState("");
  const {id} = useParams<{ id: string }>()
  const navigate = useHistory();

useEffect(() => {
  getTamubySlug();
}, []);

const getTamubySlug = async() => {
  const response = await fetch(`http://localhost:8080/TamuUndangan/${id}`);
  if (response.status == 404) {
    navigate.push("/n/n404")
  }else{
    const data = await response.json();
    
    setTitle(data.NamaTamu)
  }
}
const gotoMempelai = (namaTab: string) => {
  if (namaTab == "mempelai") {
    document.getElementById('mempelai')?.scrollIntoView({behavior: "smooth"})
  }
}
  return (
    <IonSegment id='home' className='bg-cover bg-no-repeat min-h-screen bg-center text-white font-archivo flex flex-col'>
    <IonText className="w-[85%] mx-auto text-center">
      <h6 className="font-Dancingscript text-[4rem] leading-[4rem] mb-4">Riady <br /> & <br /> Vilensia</h6>
      <h5 className='mb-5 text-sm'>Kepada Bapak/Ibu/Saudara/i</h5>
      <h5 className='mb-5 font-bold text-lg'>{title}</h5>
      <h5 className="text-sm">Kami mengundang Anda ke Acara Pernikahan kami</h5>
    </IonText>
      <IonButton color={"vibrant"} expand="block" className='mt-10 w-[70%] mx-auto' onClick={() => gotoMempelai("mempelai")}>Buka Undangan</IonButton>
  </IonSegment>
  );
};

export default Banner;
