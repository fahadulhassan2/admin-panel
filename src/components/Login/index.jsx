import React from 'react'
import '../../App.css'
import logo from '../../image/logo3.png'
import {Link } from "react-router-dom";
const index = () => {
  return (
    <>
         <div class="loginContainer container ">
        <form class="my-3 py-5 p-3 form-bg w-50 rounded-3 ">
            <div class="text-center">
                <img class="img-fluid " style={{width: "15rem"}} src={logo} alt=""/>
            </div>
            <div class="mb-2 m-0 ">
              <label for="exampleInputEmail1" class=" m-0 mb-1  form-label">Email address</label>
              <input type="email" placeholder="Enter Email" class="m-0 form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-1 m-0">
              <label for="exampleInputPassword1" class="form-label m-0 mb-1">Password</label>
              <input type="password" placeholder="Enter Password" class="m-0  form-control" id="exampleInputPassword1"/>
            </div>
            <div class="text-center mt-3">
                <Link to="/Main" type="submit" class="px-5 py-2 rounded-pill fw-bold btn btn-success">Login</Link>
            </div>
          </form>
    </div>
    </>
  )
}

export default index