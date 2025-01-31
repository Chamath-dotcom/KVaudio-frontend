import Header from "../../components/header";
import './hero.css';

export default function Hero(){
    return(
        <div className=" flex flex-col justify-center items-center  ">
        <Header/>
        <div className="main w-[96vw] h-[59vh]  flex justify-center rounded-[20px] bg-[#0B080A] ">
            <div className='img-div rounded-[20px] flex items-center justify-between '>
                <div className='main-title p-[20px] w-[45vw] h-[54.5vh] flex-col justify-center text-start text-[#C7C7C7] '>
                    <h1>Perfect Sound</h1>
                    <h1>Every Time</h1>   
                </div>
            <div className='discription  w-[54vw] h-[59vh] flex text-end items-end text-[#ffffff] bg-[#00000059] pr-[15px] pb-[3%]'>
               <h1>Our wide range of audio equipment ensures perfect sound for any event. No matter the size, we have the right solutions to make your experience seamless.</h1>
            </div>
            </div>


        </div>
        </div>
    )
}