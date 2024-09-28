
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';
// import img2 from '../../assets/images/02.jpg';
// import img3 from '../../assets/images/03.jpg';
// import img2 from '../../../assets/home/02.jpg'
// import img3 from '../../../assets/home/03.jpg'
// import img4 from '../../../assets/home/04.jpg'




const Slider = () => {

    const [sliderRef] = useKeenSlider({
        loop: false,
        mode: "snap",
        rtl: false,
        slides: { perView: "auto" },
      })

    return (
        <div ref={sliderRef} className="keen-slider" style={{ maxWidth: 1280 }}>
      <div
        className="keen-slider__slide number-slide1 min-h-[1000]"
        style={{ maxWidth: 600, minWidth: 400 }}
      >
        <img className='w-full min-h-[500px]' src={img1} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide2 min-h-[1000]"
        style={{ maxWidth: 400, minWidth: 200 }}
      >
        <img className='w-full min-h-[500px]' src={img4} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide3"
        style={{ maxWidth: 800, minWidth: 300 }}
      >
        <img className='w-full min-h-[500px]' src={img3} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide4"
        style={{ maxWidth: 1000, minWidth: 400 }}
      >
        <img className='w-full min-h-[500px]' src={img6} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide5"
        style={{ maxWidth: 600, minWidth: 300 }}
      >
        <img className='w-full min-h-[500px]' src={img5} alt="" />
      </div>
      <div
        className="keen-slider__slide number-slide6"
        style={{ maxWidth: 300, minWidth: 500 }}
      >
        <img className='w-full min-h-[500px]' src={img2} alt="" />
      </div>
    </div>
    );
};

export default Slider;