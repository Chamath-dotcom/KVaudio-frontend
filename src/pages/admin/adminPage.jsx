import { Tooltip } from "react-tooltip";
import { Link, Route, Routes } from "react-router-dom";
import { MdDashboard, MdPowerSettingsNew } from "react-icons/md";
import { FaSwatchbook, FaUsers } from "react-icons/fa";
import { BiSolidSpeaker } from "react-icons/bi";


export default function AdminPage() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[4vw] h-full  flex flex-col justify-start  items-center text-[20px] gap-3 bg-gray-200">

        <Link to="/admin/dashboard" className="mt-6 " data-tooltip-id="dashboard-tooltip">
            <div className=" w-[3vw] h-[3vw] flex justify-center items-center bg-gray-200 text-black hover:bg-gray-600 hover:text-white text-[1.8vw] duration-500 rounded-2xl">
                <MdDashboard />
            </div>
        </Link>
        <Tooltip id="dashboard-tooltip" place="right" content="Go to Dashboard" />

        <Link to="/admin/bookings"  data-tooltip-id="bookings-tooltip">
            <div className=" w-[3vw] h-[3vw] flex justify-center items-center bg-gray-200 text-black hover:bg-gray-600 hover:text-white text-[1.8vw] duration-500 rounded-2xl">
                <FaSwatchbook />
            </div>
        </Link>
        <Tooltip id="bookings-tooltip" place="right" content="View Bookings" />

        <Link to="/admin/items"  data-tooltip-id="items-tooltip">
            <div className=" w-[3vw] h-[3vw] flex justify-center items-center bg-gray-200 text-black hover:bg-gray-600 hover:text-white text-[1.8vw] duration-500 rounded-2xl">
                <BiSolidSpeaker/>
            </div>
        </Link>
        <Tooltip id="items-tooltip" place="right" content="Manage Items" />

        <Link to="/admin/users"  data-tooltip-id="users-tooltip">
            <div className=" w-[3vw] h-[3vw] flex justify-center items-center bg-gray-200 text-black hover:bg-gray-600 hover:text-white text-[1.8vw] duration-500 rounded-2xl">
                <FaUsers/>
            </div>
        </Link>
        <Tooltip id="users-tooltip" place="right" content="Manage Users" />

        
        <Link to="/" className="absolute bottom-5">
            <div className="mt-5 w-[3vw] h-[3vw] flex justify-center items-center bg-gray-200 text-black hover:bg-gray-600 hover:text-white text-[1.8vw] duration-500 rounded-3xl  ">
                <MdPowerSettingsNew />
            </div>
        </Link>

      </div>

      {/* Main Content */}
      <div className="w-[calc(100vw-10vw)] ">
        <Routes>
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/bookings" element={<h1>Bookings</h1>} />
          <Route path="/items" element={<h1>Items</h1>} />
          <Route path="/items/add" element={<h1>Add Item</h1>} />
          <Route path="/items/edit" element={<h1>Edit Item</h1>} />
          <Route path="/users" element={<h1>Users</h1>} />
        </Routes>
      </div>
    </div>
  );
}
