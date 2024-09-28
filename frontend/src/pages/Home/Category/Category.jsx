
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import slide6 from '../../../assets/home/slide6.jpg';
// import img1 from '../../../assets/home/01.jpg';


const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper my-24 flex justify-center"
            >
                <SwiperSlide style={{ maxWidth: 410, minWidth: 300 }} >
                    <img src={slide1} className='text-center w-full' />
                </SwiperSlide>
                <SwiperSlide style={{ maxWidth: 410, minWidth: 300 }} >
                    <img src={slide2} className='text-center w-full' />
                </SwiperSlide>
                <SwiperSlide style={{ maxWidth: 410, minWidth: 300 }} >
                    <img src={slide3} className='text-center w-full' />
                </SwiperSlide>
                <SwiperSlide style={{ maxWidth: 410, minWidth: 300 }}>
                    <img src={slide4} className='text-center w-full' />
                </SwiperSlide>
                <SwiperSlide style={{ maxWidth: 410, minWidth: 300 }}>
                    <img src={slide5} className='text-center w-full' />
                </SwiperSlide>
                {/* <SwiperSlide>
                <img src={slide6} />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide> */}
            </Swiper>
        </section>
    );
};

export default Category;