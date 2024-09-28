import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/home/01.jpg'
import houseImg from '../../../assets/home/02.jpg'
import condoImg from '../../../assets/home/03.png'
import penthouseImg from '../../../assets/home/04.jpg'
import loftImg from '../../../assets/home/05.png'
// import villaImg from '../../../assets/home/06.png'
import useProperty from '../../../hooks/useProperty';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import PropertyType from '../PropertyType/PropertyType';
// import PopularProperties from '../../Home/PopularProperties/PopularProperties';

const Menu = () => {
    const [property] = useProperty();
    const villas = property.filter(item => item.type === 'Villa');
    const condos = property.filter(item => item.type === 'Condo');
    const penthouses = property.filter(item => item.type === 'Penthouse');
    const houses = property.filter(item => item.type === 'House');
    const lofts = property.filter(item => item.type === 'Loft');
    return (
        <div>
            <Helmet>
                <title>Fantasy Estates | Property</title>
            </Helmet>
            <Cover img={menuImg} title="Our Property" description="Explore a wide range of properties designed for your needs."></Cover>
            {/* <PopularProperties></PopularProperties> */}
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Month's Offer"
            ></SectionTitle>
            {/* offered menu items */}
            <PropertyType items={villas}></PropertyType>
            {/* house */}
            <PropertyType items={houses} title={"houses"} img={houseImg} description="Find the perfect house for your family." ></PropertyType>
            <PropertyType items={condos} title="condos" img={condoImg} description="Modern condos in the heart of the city." ></PropertyType>
            <PropertyType items={penthouses} title="penthouses" img={penthouseImg} description="Experience luxury living in our penthouses."  ></PropertyType>
            <PropertyType items={lofts} title="lofts" img={loftImg} description="Unique loft spaces with a contemporary feel." ></PropertyType>
            
        </div>
    );
};

export default Menu;