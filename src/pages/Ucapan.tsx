import { IonButton, IonCard, IonCol,IonItem, IonLabel, IonList, IonRow, IonText, IonTextarea } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";


const Ucapan: React.FC = () => {
  const [dataList, setDataList] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [kataUcapan, setKataUcapan] = useState("");
  const {id} = useParams<{ id: string }>()
  const navigate = useHistory();

useEffect(() => {
  getUcapan();
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

const getUcapan = async() => {
  const response = await fetch(`http://localhost:8080/PerkataUcapan`);
    const data = await response.json();
    setDataList(data);
}
const addUcapan = async(e: any) => {
  e.preventDefault();
  const ktcapan = {Tamu: title,Ucapan: kataUcapan}
  await fetch("http://localhost:8080/PerkataUcapan",{
    method: "POST",
    body: JSON.stringify(ktcapan),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  window.location.reload();
}
  return (
    <div id="ucapan" className='bg-cover relative min-h-[25rem] py-16 bg-no-repeat text-black'>
      <IonRow className="mb-5">
        <IonCol className="text-center">
          <h1 className="font-Dancingscript text-4xl mb-2">Ucapan Dan Doa</h1>
          <p>{title}</p>
        </IonCol>
      </IonRow>
      <IonRow className="mx-5">
        <IonCol>
        <form className="ion-padding bg-white rounded shadow" onSubmit={addUcapan}>
          <IonItem lines="none" shape="round" color={"none"}>
            <IonLabel position="stacked">Ucapan dan Doa Anda</IonLabel>
            <IonTextarea id="message" onIonInput={(e: any) => setKataUcapan(e.target.value)} cols={3} rows={8} className="bg-[#f5f5f5] text-sm rounded px-2" placeholder="Tulis ucapan dan doa anda untuk mempelai pengantin ..."></IonTextarea>
          </IonItem>
        <IonButton color={"vibrant"} className="ion-margin-top" type="submit" expand="block">
          Kirim Ucapan
        </IonButton>
      </form>
        </IonCol>
      </IonRow>
      <IonRow className="mx-5">
        <IonCol>
          <IonList className="max-h-48 overflow-y-auto overflow-hidden shadow rounded">
            {dataList.map((ucapan)=> (
            <IonItem className="block">
            <IonLabel className="ion-text-wrap">
              <IonText color="primary">
                <h3>{ucapan.Tamu}</h3>
              </IonText>
              <p>{ucapan.Ucapan}</p>
            </IonLabel>
            </IonItem>
            ))}
          </IonList>
        </IonCol>
      </IonRow>

    </div>
  );
};

export default Ucapan;
