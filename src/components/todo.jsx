import { useState } from "react"

function Todo() {

    const [list,setlist] = useState([{id:1,activity:"Apply"},{id:2,activity:"grape"}])
    const [newlist,setnewlist] = useState() // inputbox

    //inoutbox
    const handelnewlist = (eve)=>{
        setnewlist(eve.target.value)
    }
    
    // ADD btn function
    const handeladd = ()=>{
        setlist([...list,{id:list.length+1,activity:newlist}])
        setnewlist("")
    }

    // REMOVE btn
    const handelremove = (removeid)=>{
        console.log("del")
        var temparr = list.filter((item)=>{

            if(item.id == removeid){
                return false
            }
            else{
                return true
            }
        })
        setlist(temparr)
    }


    return (
        <div>
            <h1>Todo List</h1>
            <input onChange={handelnewlist} value={newlist} type="text" /> <button onClick={handeladd}>add</button>
            <ul>
                {
                    list.map((item)=>
                    {
                        return <li>{item.activity} <button onClick={()=>{handelremove(item.id)}} >Del</button></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo