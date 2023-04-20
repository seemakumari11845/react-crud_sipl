import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
 function Header(){
   
    return(
      
<React.Fragment>

       <div className="row header">
<div className="col-sm-12 menu">

<nav className="navbar navbar-expand-lg bg-black  mt-3 text-font">

<div className="container-fluid">
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent" style={{textAlign:"center",color:"white"}}>
<ul className="navbar-nav  py-1  mb-lg-0" >

<li className="nav-item">
 <a className="nav-link active text-font" aria-current="page" href="/user">Product </a>
</li>
<li className="nav-item ">
 <a className="nav-link active text-font" aria-current="page" href="/showuser">Show Product</a>
</li>
<li className="nav-item">
 <a className="nav-link active text-font" aria-current="page" href="/edituser"></a>
</li>
</ul>
</div>
</div>
</nav>

</div>
</div>
       </React.Fragment>
    )
   
} 
export default Header;