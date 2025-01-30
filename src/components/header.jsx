export default function Header(){
    return(
        <header className=" rounded-[30px] border-2 w-[calc(100vw-20vw)] h-[8.2vh] flex justify-between items-center m-2">
            <div className=" w-[40vw] h-[8.2vh] flex items-center object-cover">
                <img src="./logo.svg" alt="logo" className="object-cover ml-[20px] "/>
            </div>
            <div className="w-[40vw] h-[8.2vh] flex justify-end gap-5 items-center">
                <img src="cart.svg" alt="" className=" size-10 " />
                <img src="./user-profile-icon.svg" alt="profile"  className="mr-2"/>       
            </div>
         </header>
    )
}