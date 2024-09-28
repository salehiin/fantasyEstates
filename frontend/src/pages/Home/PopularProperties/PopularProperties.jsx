// import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { useState } from "react";
import PropertyItem from "../../Shared/PropertyItem/PropertyItem";
import useProperty from "../../../hooks/useProperty";



const PopularProperties = () => {
    const [property] = useProperty();
    const popular = property.filter(item => item.type === 'Apartment');

    // const [property, setProperty] = useState([]);

    // useEffect(() => {
    //     fetch('/properties.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.type === 'Apartment');
    //         setProperty(popularItems)})
    // }, [])

    return(
        <section className="md-12">
            <SectionTitle
                subHeading="Popular Category"
                heading="From Our Collection"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <PropertyItem
                        key={item.id}
                        item={item}
                    ></PropertyItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};

export default PopularProperties;