import { Tooltip } from "react-tooltip";
import { Link, Route, Routes } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaSwatchbook, FaUsers } from "react-icons/fa";
import { BiSolidSpeaker } from "react-icons/bi";

export default function AdminPage() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[4vw] h-full border flex flex-col justify-start gap-6 items-center text-[20px]">
        <Link to="/admin/dashboard" className="mt-5 " data-tooltip-id="dashboard-tooltip">
          <MdDashboard />
        </Link>
        <Tooltip id="dashboard-tooltip" place="right" content="Go to Dashboard" />

        <Link to="/admin/bookings"  data-tooltip-id="bookings-tooltip">
          <FaSwatchbook />
        </Link>
        <Tooltip id="bookings-tooltip" place="right" content="View Bookings" />

        <Link to="/admin/items"  data-tooltip-id="items-tooltip">
          <BiSolidSpeaker />
        </Link>
        <Tooltip id="items-tooltip" place="right" content="Manage Items" />

        <Link to="/admin/users"  data-tooltip-id="users-tooltip">
          <FaUsers />
        </Link>
        <Tooltip id="users-tooltip" place="right" content="Manage Users" />
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
