


const PropertyItem = ({item}) => {
    const {title, image, price, amenities} = item;
    return(
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'} }className="w-[100px]" src={image} alt="Image" />
            <div>
                <h3 className="uppercase">{title}-----------</h3>
                <p>{amenities}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default PropertyItem;