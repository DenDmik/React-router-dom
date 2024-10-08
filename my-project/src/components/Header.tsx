import React ,{ FC } from 'react'
import { Link, NavLink } from 'react-router-dom';
import{ FaBtc, FaSignOutAlt} from 'react-icons/fa'

const Header:FC = () => {

    const isAuth=false;
  return (<header className={
    ' flex flex-col  sm:flex-row sm:items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm'}>
       <Link to={'/'}>
        <FaBtc size={20} className={''}/></Link>
        {/* menu */}
        {isAuth&&(
            <nav className='ml-auto mr-10'>
                <ul className={'flex  gap-5 '}>
                    <li>
                        <NavLink to={'/'}
                         className={({isActive})=>
                            isActive?'text-white':'text-white/50'}
                            >Home</NavLink>
                    </li> 
                    <li>
                        <NavLink to={'/transactions'}
                        className={({isActive})=>
                            isActive?'text-white':'text-white/50'}
                        >Transactions</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/categories'}
                        className={({isActive})=>
                            isActive?'text-white':'text-white/50'}
                        >Categories</NavLink>
                    </li>   
                </ul>
            </nav>
        )}
        {/* menu */}
        {/* actions */}
        {isAuth?(
            <button className={'btn btn-red '}>
                <span>Log Out</span>
                <FaSignOutAlt/>
            </button>
        ):(
            <Link to={'auth'} className={' py-2 text-white/50 hover:text-white ml-auto'}>
            Log In/Sign In</Link>
        )
        }
        {/* actions */}
       
  </header>
  
)}

export default Header