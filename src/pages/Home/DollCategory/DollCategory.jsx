import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SubCategory from '../SubCategory/SubCategory';

const DollCategory = () => {
    const [dolls, setDolls] = useState([]);
    const [activeTab, setActiveTab] = useState("math");


    useEffect(() => {
        fetch('https://educational-toy-server-site.vercel.app/dolls')
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])

    const result = dolls.filter((doll) => doll.category == activeTab);
    // console.log(result);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className='mt-10 mb-6'>
            <h2 className='text-4xl font-bold mb-8 text-center text-gray-600'>Toy Category</h2>

            <p className=' font-semibold mb-8 text-center text-gray-500'>High fashion themed toys are included in this category.</p>


            {/* <div>
                {
                    dolls?.map(subDolls => <SubCategory
                        key={subDolls._id}
                        subDolls={subDolls}
                    ></SubCategory>)
                }
            </div> */}


            <Tabs className="text-center">

                <TabList>
                    <Tab onClick={() => handleTabClick("math")}>Math Learning</Tab>
                    <Tab onClick={() => handleTabClick("science")}>Science Dolls</Tab>
                    <Tab onClick={() => handleTabClick("engineering")}>Engineering Dolls</Tab>
                    {/* <Tab >Bady Dolls</Tab> */}
                    {/* <Tab >Barbie Dolls</Tab>
                    <Tab >American Dolls</Tab> */}
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {
                            result?.map(subDolls => <SubCategory
                                key={subDolls._id}
                                subDolls={subDolls}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {
                            result?.map(subDolls => <SubCategory
                                key={subDolls._id}
                                subDolls={subDolls}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3'>
                        {
                            result?.map(subDolls => <SubCategory
                                key={subDolls._id}
                                subDolls={subDolls}
                            ></SubCategory>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default DollCategory;