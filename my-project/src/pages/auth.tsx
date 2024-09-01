import React, { useState } from 'react'
import { SimpleModal } from '../modal/simplModal'

const Auth:React.FC = () => {
  const[isLogin,setIsLogin]=useState(!false)
  const[activeModal,setActivModal]=useState(false)
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  return (
    <div className={'mt-40 flex flex-col justify-center items-center  text-white'}>
      <h1 className={' mb-10 text-center text-xl'} >
        {isLogin? 'LOGIN':'REGISTRATION'}
      </h1>
      <form className={'flex flex-col gap-5 w-1/3 mx-auto'}>
      <input type="text" className='input' placeholder='Emaile'
              onChange={(e)=>setEmail(e.target.value)}/>
      <input type='password' placeholder='password' className='input' 
              onChange={(e)=>setPassword(e.target.value)}/>
      <button className={'btn btn-green mx-auto'}>Submit</button>
      </form>
      {
        isLogin?(<button onClick={()=>setIsLogin(!isLogin)} className={'btn'}>Already have an account?</button>):
                (<button onClick={()=>setIsLogin(!isLogin)} className={'btn'}>You do not have an account</button>)
      }
    {/*modal window  start*/}
    <div> <button className={' text-red-700'}
                onClick={()=>setActivModal(true)}>
                <div >{!activeModal?'OPEN':''}</div>
            </button>
             <SimpleModal active={activeModal} 
             setActive={setActivModal}>

                <h2 className={'block-modal card'}>Modal Info</h2>
                <p className={'bg-slate-500'}>dadadaddaddadaddd</p>
             </SimpleModal>
        </div>
    {/* modal window end */}
    
    
    </div>
  )
}

export default Auth