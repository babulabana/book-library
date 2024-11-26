import { useState } from "react"

export default function Counter(){
    const [count,setcount] = useState(0)
    var d =0;
    let increment=()=>{
        d=count;
        d++;
        setcount(d);
    }
    let decrement=()=>{
        d=count;
        d--;
        setcount(d);
    }
    let u = <div className="flex  justify-center items-center gap-5 ">
    {count>0?<input type="button" value="-" className="px-2 m-2 bg-red-400 text-2xl text-white " onClick={()=>decrement()} />:<input type="button" value="-" className="px-2 m-2 bg-red-600 text-2xl text-white " disabled />}
          <div className="text-3xl"> {count}</div>
    {count<5?<input type="button" value="+" className="px-2 m-2 bg-red-400 text-2xl text-white " onClick={()=>increment()} />:<input type="button" value="+" className="px-2 m-2  bg-red-600 text-2xl text-white " disabled />}
    
    </div>
    return(

        <div className="" >
              {count == 0 ? <input type="button" value="Add to card"  className="bg-red-400  rounded-2xl p-3" onClick={increment}></input> : u}
        </div>
        
    )
}