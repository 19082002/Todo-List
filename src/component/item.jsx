import { useState,useEffect } from 'react'
import LocalStorage from './localstorage';
import '../css/item.css'

function Item(props){
    const [check,setCheck] = useState(props.lst.check);
    const [checkcls,setCheckcls] = useState("board");
    const chngcheck=()=>{setCheck(!check);
    }
 
    useEffect(()=>{
      localStorage.setItem(props.id,JSON.stringify([props.lst.text,check]));
      return (
        check ?setCheckcls("board active"):setCheckcls("board"))
    },[check]);
   const dlt=()=>{
    props.dltfun(props.id);
   }
    return (
      <>
      <div className='container'>
        <div className={check &&(localStorage.getItem(props.id)&&JSON.parse(localStorage.getItem(props.id))[1])?"board active":"board"}>
        <input type="checkbox" checked={check &&(localStorage.getItem(props.id)&&JSON.parse(localStorage.getItem(props.id))[1]) } className="checkbx" onChange={chngcheck}/>
        <div className='title-box'>
          <p> {props.lst.text}</p>
        </div>
        <div className='btns'>  
           <button className='btn' onClick={dlt}>Delete</button>
        </div>
        </div>
      </div>
      </>
    );
}
export default Item