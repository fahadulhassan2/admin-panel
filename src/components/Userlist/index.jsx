import React from 'react'
const index = () => {
  return (
    <>
          <div class="mx-5  ">
        
        <form class="d-grid gap-2 offset-md-8 col-xl-4 my-3">
            <div class="d-flex">
                <input class="border border-none form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-success" type="submit">Search</button>
            </div>
          </form>
       
        <table class="rounded-3 table table-responsive" id="userList">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Contact no</th>
                <th scope="col">Location</th>
                <th scope="col">Block/Unblock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hassan123</td>
                <td>hassan12@gmail.com</td>
                <td>0300-5482456</td>
                <td>Gujrat</td>
                <td>
                    <button class="m-0 px-3 btn btn-sm btn-success rounded-pill">
                        Block
                    </button>
                </td>
              </tr>
              <tr>
                <td>raheel785</td>
                <td>hassan12@gmail.com</td>
                <td>0300-5482456</td>
                <td>Gujrat</td>
                <td>
                    <button class="m-0 px-3 btn btn-sm btn-success rounded-pill">
                        Block
                    </button>
                </td>
              </tr>
              
              <tr>
                <td>musa13</td>
                <td>hassan12@gmail.com</td>
                <td>0300-5482456</td>
                <td>Gujrat</td>
                <td>
                    <button class="m-0 px-3 btn btn-sm btn-success rounded-pill">
                        Block
                    </button>
                </td>
              </tr>
              
              <tr>
                <td>imran23</td>
                <td>hassan12@gmail.com</td>
                <td>0300-5482456</td>
                <td>Gujrat</td>
                <td>
                    <button class="m-0 px-3 btn btn-sm btn-success rounded-pill">
                        Block
                    </button>
                </td>
              </tr>
              
              <tr>
                <td>ali123</td>
                <td>hassan12@gmail.com</td>
                <td>0300-5482456</td>
                <td>Gujrat</td>
                <td>
                    <button class="m-0 px-3 btn btn-sm btn-success rounded-pill">
                        Block
                    </button>
                </td>
              </tr>
              
            </tbody>
          </table>
    </div>
    </>
  )
}

export default index