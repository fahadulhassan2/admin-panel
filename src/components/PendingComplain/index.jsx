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

          <table class="rounded-3 table table-responsive" id="pending">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Fullname</th>
                <th scope="col">User type</th>
                <th scope="col">Location</th>
                <th scope="col">Contact no</th>
                <th scope="col">Description</th>
                <th scope="col">Issue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hassan12@gmail.com</td>
                <td>Ali Hassan</td>
                <td>Seller</td>
                <td>Gujrat</td>
                <td>0300-5482456</td>
                <td>Plsease approve my category</td>
                <td class="d-flex ">
                    <button class="m-0 px-3 btn btn-sm btn-success rounded-pill">
                        Pending
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