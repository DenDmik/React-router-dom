import React from "react";
import'./simplModal.css';



interface IModalProps{
    active:boolean;
    setActive(str:boolean):void;
    children?:JSX.Element[];
}

export const SimpleModal:React.FC<IModalProps >=({active,setActive,children})=>{

    return(
        <div className={!active?'modal':'modal opacity-100 pointer-events-auto'}>
        <div className={!active?'modal-content':'modal-content scale-100'}>
           <button className={'block-modal'}
                   onClick={()=>setActive(false)}>
            <div >
                <div >Close</div>
            </div>
            </button>
           {children}
        </div>

    
  </div>

    )
}
    

    
        

        
