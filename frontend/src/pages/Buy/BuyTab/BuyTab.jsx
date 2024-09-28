import PropertyCard from "../../../components/PropertyCard/PropertyCard";



const BuyTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
            {
                items.map(item => <PropertyCard
                    key={item.id}
                    item={item}
                ></PropertyCard>)
            }
        </div>
    );
};

export default BuyTab;