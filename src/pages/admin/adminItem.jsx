const sampleArr = [
    {
        prod_key: "P001",
       name: "Wireless Headphones",
        price: 99.99,
       category: "audio",
        dimensions: "20x15x5 cm",
        description: "High-quality wireless headphones with noise cancellation.",
        availability: true,
        image: ["https://example.com/headphones.jpg"]
    },
  
];


import { Link, Route, Routes, useNavigate } from "react-router-dom"
import { IoAddCircle } from "react-icons/io5"
import { useEffect, useState } from "react";
import axios from "axios";



export default function AdminItem(){
    const [items,setItems] = useState(sampleArr)
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:5000/api/product/getproducts", {
            headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            console.log(res.data.message);
            // Check if res.data.message is an array
            if (Array.isArray(res.data.message)) {
                setItems(res.data.message); // Use res.data.message instead of res.data
            } else {
                console.error("Expected an array but got:", res.data);
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    
    return(
    <div className="w-[96vw] h-[100vh] flex flex-col justify-start items-center">

           <div className="  w-[90vw] h-[100vh] flex flex-col justify-start items-center relative right-10">
            {/* Header Section */}
            <div className=" border w-[85vw] h-[6vh] flex justify-center items-center mt-3 mb-4 backdrop-blur-2xl p-4 rounded-lg ">
                <h2 className="text-2xl font-semibold text-white">Admin Item List</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto overflow-y-auto backdrop-blur-2xl p-4 rounded-lg shadow-md text-black">
                <table className="w-[85vw] border-collapse border border-gray-900">
                    <thead className="bg-gray-800">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">Key</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Category</th>
                            <th className="border border-gray-300 px-4 py-2">Dimensions</th>
                            <th className="border border-gray-300 px-4 py-2">Availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((product) => {
                 
                            return(
                            <tr key={product.prod_key} className="text-center hover:bg-gray-400 transition">
                                <td className="border border-gray-300 px-4 py-2">{product.prod_key}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                                <td className="border border-gray-300 px-4 py-2">{product.dimensions}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product.availability? "Available" : "Not Available"}
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

        <Link to="/admin/items/add" className="fixed bottom-6 right-6">
            <IoAddCircle className=" text-black bg-transparent rounded-2xl text-[60px]  hover:text-white hover:bg-[#808080]  transition duration-600 cursor-pointer" />
        </Link>
    </div>
    )
}