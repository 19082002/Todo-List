import { useEffect, useState } from 'react'
import '../css/input.css'
import LocalStorage from './localstorage';
function InputField(props){
    const[flag,setFlag]=useState(false);
    const[value,setValue]=useState("");
    // const[newitem,setNewItem]=useState({});
    const update=()=>{
        if(value.length!=0){
            console.log(props.id);
            const newitem={
                id:props.id,
                text:value,
                check:false,
                }
                setFlag(true);
                props.updatefunction(newitem);
        }   
    }
    useEffect(()=>{
        if(flag){setValue("");setFlag(false);}
    },[flag])
return(
    <>
    <div className="inputboard">
        <input placeholder="Add new task" type="text" value={value}className="inputfield" 
        onChange={(event)=>{setValue(event.target.value)}}/>
        <button className="addbtn" onClick={update}>Add</button>
        {(flag && value.length!=0 )&& <LocalStorage obj={[value,false]} id={props.id-1}/>}

    </div>
    </>
   
)
}
export default InputField