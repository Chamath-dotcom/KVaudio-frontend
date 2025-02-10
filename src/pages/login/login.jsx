import { useState } from "react";
import LoginBtn from "../home/loginBtn/loginBtn";
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleOnSubmit(e) {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);

        // send login request to backend here
        axios.post("http://localhost:5000/api/users/login",
            {
             email: email ,
             password: password
            }).then((res)=>{
                console.log(res);
                toast.success("login successful");
            }).catch((err)=>{
                console.log(err);
                toast.error(err.response.data.error);
            });
        
    }
    return(
        <div className="relative overflow-hidden">
        <div className="login-bg flex relative ">
            <img src="../public/login/speaker.png" alt="speaker" className=" w-[50vw] h-fit absolute bottom-0" />
            <img src="../public/login/plant.png" alt="plant" className=" w-[40vw] h-fit absolute bottom-0 right-0" />
        </div>
            <div className=" w-[30vw] h-[100vw] absolute top-0 right-60 flex flex-col justify-center items-center  ">
                <img src="../public/login/lamp.png" alt="lamp" className=" h-fit absolute top-0 " />
                <div className="form  rounded-3xl flex items-center justify-center absolute top-40 backdrop-blur-sm  " >
                    <form onSubmit={handleOnSubmit}>
                    <div className=" w-[30vw] h-[60vh]   flex justify-center items-center flex-col gap-6  relative">
                        <img
                            src="/logo.svg"
                            alt="logo"
                            className="w-[20vw] h-auto object-cover m-10  absolute top-0 "
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="mt-6 w-[25vw] h-[5vh] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-[25vw] h-[5vh] mt-6 bg-transparent border-b-2 border-white text-white text-xl outline-none"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <div className="w-[15vw] h-[6vh]  flex justify-start absolute bottom-10">
                            <LoginBtn/>
                        </div>
                    </div>
                    </form>
                </div>
        </div>
        </div>
    )
}