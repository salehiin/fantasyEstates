import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './Featured.css';


const Featured = () => {
    return(
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading="Check it out"
                heading="Featured Item"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-20 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Octtober 01, 2024</p>
                    <p className="uppercase">Where can I get one?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam voluptatibus commodi ratione eaque? Corporis accusantium, nisi voluptates cum, recusandae hic, voluptatem ipsa iusto dolore error cupiditate praesentium quas consequuntur facilis.</p>
                     <button className="btn btn-outline border-0 border-b-4 mt-4">Book Now</button> 
                </div>
            </div>
        </div>
    );
};

export default Featured;