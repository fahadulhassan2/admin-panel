import React from 'react'
import user from '../../image/user.svg'
import post from '../../image/post.svg'
import manage from '../../image/Manage.svg'
import {Link } from "react-router-dom";
import approve from '../../image/approve.svg'
import unapprove from '../../image/pending_approval.svg'
import suggestion from '../../image/suggestion.svg'
const index = () => {
  return (
    <>
        {/* Results  */}
        <div class=" mx-3 row g-4 my-2 animate__animated animate__fadeInDown" id="total-view">
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-12">
                <div class=" p-4 shadow rounded-3 backcolor">
                    <div class="d-flex justify-content-between ">
                        <h4 class='text-white' >User</h4>
                        <img  alt="not found" style={{width: "2rem" ,height: "2rem"}} src="https://img.icons8.com/material-sharp/24/ffffff/user.png"/>
                    </div>
                    <p class="text-white fs-5 ms-1">500</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class=" p-4 shadow rounded-3 backcolor">
                    <div class="d-flex justify-content-between ">
                        <h4 class='text-white' >Complains</h4>
                        <img alt="not found" style={{width: "2rem" ,height: "2rem"}} src="https://img.icons8.com/material/24/ffffff/complaint.png"/>
                    </div>
                    <p class="text-white fs-5 ms-1">52K</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class=" p-4 shadow rounded-3 backcolor">
                    <div class="d-flex justify-content-between ">
                        <h4 class='text-white' >Post</h4>
                        <img alt="not found" style={{width: "2rem" ,height: "2rem"}} src="https://img.icons8.com/material/24/ffffff/mailbox-opened-flag-down--v1.png"/>
                    </div>
                    <p class="text-white fs-5 ms-1">52K</p>
                </div>
            </div>
            <div class="col-xl-3  col-lg-3 col-md-6 col-sm-12">
                <div class=" p-4 shadow rounded-3 backcolor">
                    <div class="d-flex justify-content-between ">
                        <h4 class='text-white' >Pending complain</h4>
                        <img alt="not found" style={{width: "2rem" ,height: "2rem"}} src="https://img.icons8.com/material/24/ffffff/product--v1.png"/>
                    </div>
                    <p class="text-white fs-5 ms-1">52K</p>
                </div>
            </div>    
        </div> 


     
    <div class="mx-3 p-0 m-0 row gy-4 mb-5 animate__animated animate__fadeInUpBig">
    
          <div class="col-xl-4 col-md-6 col-sm-12">
            <div class="suggestion-box shadow p-2 ">
              <div class=" mx-auto text-center">
                <img class="img-fluid desk" src={user} alt=""/>
              </div>
              
            </div>
            <div class="d-grid mx-auto text-center">
              <Link to="/Userlist" class="btn border border-none btn-success text-center">User List</Link>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 col-sm-12">
            <div class="suggestion-box shadow p-2">
              <div class=" mx-auto text-center">
                <img class="img-fluid desk" src={post} alt=""/>
              </div>
           
            </div>
            <div class="d-grid mx-auto text-center">
              <Link to="/Post" class="btn btn-success text-center">Post</Link>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 col-sm-12">
            <div class="suggestion-box shadow p-2">
              <div class=" mx-auto text-center">
                <img class="img-fluid desk" src={manage} alt=""/>
              </div>
      
            </div>
            <div class="d-grid mx-auto text-center">
              <Link to="/Complain" class="btn btn-success text-center">complain</Link>
            </div>
          </div>

          <div class="col-xl-4 col-md-6 col-sm-12">
            <div class="suggestion-box shadow p-2">
              <div class=" mx-auto text-center">
                <img class="img-fluid desk" src={approve} alt=""/>
              </div>
              </div>
          <div class="d-grid mx-auto text-center">
          <Link to="/Approves" class="btn btn-success text-center">Approve</Link>
              </div>
            
            </div>

          <div class="col-xl-4 col-md-6 col-sm-12">
            <div class="suggestion-box shadow p-2">
              <div class=" mx-auto text-center">
                <img class="img-fluid desk" src={unapprove} alt=""/>
              </div>
              </div>
          <div class="d-grid mx-auto text-center">
                <Link to="/Unapprove" class="btn btn-success text-center">Unaprove</Link>
              </div>
            
            </div>

          <div class="col-xl-4 col-md-6 col-sm-12">
            <div class="suggestion-box shadow p-2">
              <div class=" mx-auto text-center">
                <img class="img-fluid desk" src={suggestion} alt=""/>
              </div>
              </div>
          <div class="d-grid mx-auto text-center">
                <Link to="/Suggestion" class="btn btn-success text-center">Suggestion</Link>
              </div>
            
            </div>

          

      </div> 
    </>
  )
}

export default index