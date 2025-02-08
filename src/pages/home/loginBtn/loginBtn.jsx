import'./loginBtn.css'

export default function LoginBtn(){
    return(
        <div className='absolute bottom-25 left-15 w-[20vw] h-[10vh]'>
        <a className='rounded-2xl' >
            <span>LOGIN</span>
            <div className="wave "></div>
        </a>
        </div>
    )
}