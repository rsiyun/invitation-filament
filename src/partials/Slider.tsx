import { IonContent, IonImg, IonSlide, IonSlides } from "@ionic/react";
import galeri1 from '../assets/img/Galeri/2.jpg'
import galeri2 from '../assets/img/Galeri/1.jpg'
import galeri3 from '../assets/img/Galeri/3.jpg'
const slideOpts = {
    initialSlide: 1,
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    speed: 400
  };
const items = [
    `${galeri2}`,
    `${galeri1}`,
    `${galeri3}`,
]
const Slider: React.FC = () => {

  return (
    <h1>halod</h1>
  );
};

export default Slider;
