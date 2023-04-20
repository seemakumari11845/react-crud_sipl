import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Product(){
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [sellingprice,setSellingprice]=useState("")
    const [salescount,setSalescount]=useState("")
    const [img,setImg]=useState("")
    
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
      
      <Link to="/showuser"> <input type="button"  id="btn1" onClick={saveUser} value="Save"/><br/></Link>
        
      </form>
      </div></div>
      
         </React.Fragment>
    )


    function saveUser(){
        
        let data={name,price,sellingprice,salescount,img}
        // console.log(data)
        fetch(" http://localhost:5000/products",{
            method:"POST",
           headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify(data)})
            .then((res)=>{
                res.json()
            }).then((data)=>{
                console.log(data)
            })
        }
    }
