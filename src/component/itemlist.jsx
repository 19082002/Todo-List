import Item from './item.jsx'
import InputField from './input.jsx'
import { useEffect, useState } from 'react'

let dummylist=[];
let cnt=0,j=0;
if(localStorage.length!=0) {
        
        for(let i=0;i<localStorage.length;i++){
            while(localStorage.getItem(j)==null)j++;          
          let test =JSON.parse(localStorage.getItem(j));
        let newitem={id:j,text:test[0],check:test[1]};
        dummylist.push(newitem);
            j++;
        }
        cnt=j;
}
// else{ dummylist.push( {id:cnt,text:"Dummy Text",check:false,});cnt=1;}


function ItemList(){
    const [list,setList]=useState(dummylist);
    const [id,setId]=useState(cnt);
    const updatelist=(newitem)=>{
        let p=id+1;
        setId(p);
        setList([...list,newitem]);
    }
    const deletelist=(did)=>{
        console.log(did);
        localStorage.removeItem(did);
        const newlist=list.filter((item)=>item.id!=did);
        setList(newlist);
        // window.location.reload();
    }
    useEffect(()=>{

    },[list])
    return(
        <div className='main'>
        <InputField id={id}updatefunction={updatelist}/>
        {list.map(elem => (<Item lst={elem} dltfun={deletelist} id={elem.id}/>))}
        
        </div>
    );
}
export default ItemList