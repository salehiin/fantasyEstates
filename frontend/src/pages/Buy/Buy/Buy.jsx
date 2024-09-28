import { useState } from 'react';
import buyCover from '../../../assets/home/buy.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProperty from '../../../hooks/useProperty';
import BuyTab from '../BuyTab/BuyTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Buy = () => {
    const types = ['villas', 'houses', 'condos', 'penthouses', 'lofts']
    const {type} = useParams();
    const initialIndex = types.indexOf(type);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [property] = useProperty();
    const villas = property.filter(item => item.type === 'Villa');
    const condos = property.filter(item => item.type === 'Condo');
    const penthouses = property.filter(item => item.type === 'Penthouse');
    const houses = property.filter(item => item.type === 'House');
    const lofts = property.filter(item => item.type === 'Loft');

    return (
        <div>
            <Helmet>
                <title>Fantasy Estates | Buy Now</title>
            </Helmet>
            <Cover img={buyCover} title="Buy Now" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda perspiciatis tenetur nulla quidem unde alias cum deserunt dolorum iusto ex."></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Villa</Tab>
                    <Tab>House</Tab>
                    <Tab>Condo</Tab>
                    <Tab>Penthouse</Tab>
                    <Tab>Loft</Tab>
                </TabList>
                <TabPanel>
                    <BuyTab items={villas}></BuyTab>
                </TabPanel>
                <TabPanel>
                    <BuyTab items={houses}></BuyTab>
                </TabPanel>
                <TabPanel>
                    <BuyTab items={condos}></BuyTab>
                </TabPanel>
                <TabPanel>
                    <BuyTab items={penthouses}></BuyTab>
                </TabPanel>
                <TabPanel>
                    <BuyTab items={lofts}></BuyTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Buy;