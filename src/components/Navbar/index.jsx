import React from 'react'
import '../../App.css';
import logo from '../../image/logo3.png'
import {Link } from "react-router-dom";

const index = () => {
  return (
    <>
    <div class="container-fluid-fluid" >
  
{/*  nav  */}
<nav class="sticky-top navbar navbar-expand-lg navbar-dark ">
  <div class="container-fluid mx-3">
    <Link class="navbar-brand" to="/Main">
    <img style={{width: "10rem", height: "3rem"}} class="logo" src={logo} alt=""/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mt-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Main">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/userlist">Users</Link>
        </li>

        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/ManagePost" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Post
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/Post">Post</Link></li>
            <li><Link class="dropdown-item" to="/Approves">Approve Post</Link></li>
            <li><Link class="dropdown-item" to="/Unapprove">Unapprove Post</Link></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle " to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Post Category
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/AddCategories">Add Category</Link></li>
            <li><Link class="dropdown-item" to="/RemoveCategories">Remove post</Link></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="/Complain" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Complain
          </Link>
          <ul class="dropdown-menu rounded-3" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/Complain">Complain</Link></li>
            <li><Link class="dropdown-item" to="/ResolveComplain">Resolve Complain</Link></li>
            <li><Link class="dropdown-item" to="/PendingComplain">Pending Complain</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Suggestion">
            <img style={{width: "1.5rem" ,height: "1.5rem"}} alt="not found" src="https://img.icons8.com/ios-filled/50/ffffff/feedback.png"/>  
          </Link>
        </li>
      </ul>
      <form class="d-flex">
        <Link to="/" class="p-1 btn btn-success" type="submit"><img alt="not found" src="https://img.icons8.com/ios-glyphs/30/ffffff/exit.png"/></Link>
      </form>
    </div>
  </div>
</nav>

    
 
</div>
    </>
  )
}

export default index