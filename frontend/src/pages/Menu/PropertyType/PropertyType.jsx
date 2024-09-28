import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import PropertyItem from "../../Shared/PropertyItem/PropertyItem";


const PropertyType = ({ items, title, img, description }) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title} description={description}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-16">
                {
                    items.map(item => <PropertyItem
                        key={item.id}
                        item={item}
                    ></PropertyItem>)
                }
            </div>
            <Link to={`/buy/${title}`}>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Book Now</button>
            </Link>
        </div>
    );
};

export default PropertyType;