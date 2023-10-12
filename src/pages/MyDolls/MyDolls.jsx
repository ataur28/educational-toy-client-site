import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import AllMyDolls from "../AllMyDolls/AllMyDolls";
import useTitle from "../../hook/useTitle";


const MyDolls = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const emails = user?.email
    // console.log(emails)

    const [dolls, setDolls] = useState([]);

    // const {sellerEmail} = dolls;

    useEffect(() => {
        fetch('https://educational-toy-server-site.vercel.app/dolls')
            .then(res => res.json())
            .then(data => setDolls(data))
    }, [])


    // console.log(dolls)

    const result = dolls.filter((doll) => doll.sellerEmail == emails);
    // console.log(result)

    const handleDelete = id => {
        // console.log(id);
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`https://educational-toy-server-site.vercel.app/dolls/${id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount>0){
                        alert('Deleted Successful')
                        const remaining = dolls.filter(doll => doll._id !== id)
                        setDolls(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h2 className="text-4xl font-bold pt-8 pb-8 text-center text-gray-600">My Toys</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Doll Picture and Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Detail Description</th>
                            <th>Delete Button</th>
                            <th>Update Button</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result?.map(myDolls => <AllMyDolls
                                key={myDolls._id}
                                myDolls={myDolls}
                                handleDelete={handleDelete}
                            ></AllMyDolls>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyDolls;