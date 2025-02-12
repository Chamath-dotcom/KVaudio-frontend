import { useState } from "react"
import LoginBtn from "../home/loginBtn/loginBtn";
import './admin.css'
export default function AddItem(){
    const [prod_key,setProd_key] = useState("");
    const [prod_name,setProd_name] = useState("");
    const [prod_price,setProd_price] = useState(0);
    const [prod_category,setProd_category] = useState("lights");
    const [prod_dimension,setProd_dimension] = useState("");
    const [prod_description,setProd_description] = useState("");
    const [prod_availability,setProd_availability] = useState("");
    return(
        <div className="  w-[96vw] h-[100vh] flex  justify-center items-center overflow-hidden  relative">
            <div className=" w-[80vw] h-[90vh] relative rounded-3xl right-10 backdrop-blur-2xl" >
            <form >
                <div className="  flex w-[40vw] h-[60vh] flex-col justify-center gap-8 items-center"> 
                <input 
                    type="text" 
                    placeholder="key"
                    value={prod_key}
                    onChange={(e)=>setProd_key(e.target.value)}
                    className="w-[25vw] h-[3.4vh] border  rounded-md pl-3"
                />
                <input 
                    type="text" 
                    placeholder="name"
                    value={prod_name}
                    onChange={(e)=>setProd_name(e.target.value)}
                    className="w-[25vw] h-[3.4vh] border rounded-md pl-3"
                />
                <input 
                    type="number" 
                    placeholder="price"
                    value={prod_price}
                    onChange={(e)=>setProd_price(e.target.value)}
                    className="w-[25vw] h-[3.4vh] border rounded-md pl-3"
                />
                <select
                    value={prod_category}
                    onChange={(e)=>setProd_category(e.target.value)}
                    >
                    <option key="audio">Audio</option>
                    <option key="lights">Lights</option>
                </select>
                <input 
                    type="text" 
                    placeholder="dimension"
                    value={prod_dimension}
                    onChange={(e)=>setProd_dimension(e.target.value)}
                    className="w-[25vw] h-[3.4vh] border rounded-md pl-3"
                />
                </div>
                <div className="  flex w-[40vw] h-[60vh]  justify-center  items-center absolute top-0 right-0"> 
                <textarea 
                    placeholder="  description"
                    value={prod_description}
                    onChange={(e)=>setProd_description(e.target.value)}
                    className="w-[30vw] h-[50vh] pl-3 pt-3 border rounded-2xl"
                />
                </div>
                <div className=" w-[80vw] h-[30vh] flex justify-center">
                    <div className="relative right-20 top-10">
                    <LoginBtn text="ADD"/>
                    </div>
                </div>
            
            </form>
            </div>
        </div>
    )
}