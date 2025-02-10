import { useNavigate } from 'react-router-dom'
import'./loginBtn.css'

export default function LoginBtn(){
    const navigate=useNavigate();
    const goLogin=()=>{
        navigate('/login')
    }
    return(
        <div >
        <button className='rounded-2xl ' onClick={goLogin} >
            <span>LOGIN</span>
            <div className="wave "></div>
        </button>
        </div>
    )
}