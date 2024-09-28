import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularProperties from "../PopularProperties/PopularProperties";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return(
        <div>
            <Helmet>
                <title>Fantasy Estates | Home</title>
            </Helmet>
            <Slider></Slider>
            <Category></Category>
            <PopularProperties></PopularProperties>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;