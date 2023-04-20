import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const id=JSON.parse(window.localStorage.getItem("st"))

export default function Update(){
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [sellingprice,setSellingprice]=useState("")
    const [salescount,setSalescount]=useState("")
    const [img,setImg]=useState("")
    


    useEffect(()=>{
        const id= JSON.parse(window.localStorage.getItem("st"));
        
        fetch('http://localhost:5000/products/'+id)
        .then((res)=>{
            return res.json()
        }).then((resp)=>{
            setName(resp.name);
            setPrice(resp.price);
            setSellingprice(resp.sellingprice);
            setSalescount(resp.salescount);  
            setImg(resp.img);
        })

    },[])

function Update(){
    let data={name,price,sellingprice,salescount,img}

   fetch(`http://localhost:5000/products/${id}`,{
    method:"PUT",
   headers:{
    "Accept":"Application/json",
    
        "Content-Type":"Application/json"
    },
    body:JSON.stringify(data)})
    .then((res)=>{
        res.json()
    }).then((resp)=>{
        console.log(resp)
        
    })

}
    return(
        <React.Fragment>
       <div id="outer">
       <div id="box1">
      
      <h1 style={{textAlign:"center"}}>Users Buy Products Here</h1>
      <form>
      Name:<br/><input type="text" placeholder="please enter Product name" class="a" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
      Price:<br/><input type="mobile"   placeholder="" class="a" value={price} onChange={(e)=>setPrice(e.target.value)}/><br/>
      Selling Price:<br/><input type="text"  placeholder="" class="a" value={sellingprice} onChange={(e)=>setSellingprice(e.target.value)}/><br/>
      Sales Count:<br/><input type="text" class="a" placeholder="" value={salescount} onChange={(e)=>setSalescount(e.target.value)}/><br/>
      Image:<br/><input type="text" class="a" placeholder="" value={img} onChange={(e)=>setImg(e.target.value)}/><br/>
       <Link to="/showuser"> <input type="button" onClick={Update}  id="btn1" value="Update"/><br/></Link>
        
      </form>
      </div></div>
       </React.Fragment>
    )
}