import { MdDashboard } from "react-icons/md";
import { FaSwatchbook } from "react-icons/fa";
import { BiSolidSpeaker } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";



export default function AdminPage(){
    return(
        <div className="w-full h-screen flex">
            <div className="w-[10vw] h-full border-2 flex flex-col">
                <Link className="">
                    <MdDashboard/>
                    Dashboard
                </Link>
                <Link to="/admin/bookings" className="">
                    <FaSwatchbook/>
                    Bookings
                </Link>
                <Link to="/admin/items" className="">
                    <BiSolidSpeaker/>
                    Items
                </Link>
                <Link className="">
                    <FaUsers/>
                    Users
                </Link>
            </div>
        <div className="w-[calc(100vw-200px)] ">
            <Routes path="/*">
            <Route path="/bookings" element={<h1>Booking</h1>}/>
            <Route path="/items" element={<h1>item</h1>}/> 
            <Route path="/items/add" element={<h1>add item</h1>}/>
            <Route path="/items/edit" element={<h1>Booking</h1>}/>
            </Routes>
        </div>
    </div>
    )
}