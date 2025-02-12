import { HiH1 } from "react-icons/hi2"
import { Link, Route, Routes, useNavigate } from "react-router-dom"
import AddItem from "./additem"
import { CiCirclePlus } from "react-icons/ci"
import { IoAddCircle } from "react-icons/io5"


export default function AdminItem(){

    return(
    <div>
        <Link to="/admin/items/add" className="fixed bottom-6 right-6">
            <IoAddCircle className=" text-black bg-transparent rounded-2xl text-[60px]  hover:text-white hover:bg-[#808080]  transition duration-600 cursor-pointer" />
        </Link>
    </div>
    )
}