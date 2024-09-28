import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { LiaQuoteLeftSolid } from "react-icons/lia";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useRef, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'



const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What our client say"
                heading="Testimonials"
            ></SectionTitle>
            {/* {reviews.length} */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
                        key={review.id}
                    >
                        <div className="flex flex-col items-center mx-24 mt-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <div className="text-6xl py-5"><LiaQuoteLeftSolid /></div>
                            <p className="py-8"> {review.comment}</p>
                            <h3 className="text-2xl text-orange-400">{review.reviewerName}</h3>
                        </div>
                    </SwiperSlide>)
                }
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 0 0" ref={progressCircle}>
                        {/* <circle cx="2" cy="2" r="2"></circle> */}
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    );
};

export default Testimonials;