import { useNavigate } from 'react-router-dom'
import'./loginBtn.css'

export default function LoginBtn({text = "LOGIN"}){
    const navigate=useNavigate();
    const goLogin=()=>{
        navigate('/login')
    }
    return(
        <div  >
        <button className='rounded-2xl  ' onClick={goLogin} >
            <span>{text}</span>
            <div className="wave "></div>
        </button>
        </div>
    )
}