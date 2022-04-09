import React from 'react'

const index = () => {
  return (
    <>
          <div className="mx-5  ">   
        <form className="d-grid gap-2 offset-md-8 col-xl-4 my-3">
            <div className="d-flex">
                <input className="border border-none form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-success" type="submit">Search</button>
            </div>
          </form>


          <table className="rounded-3 table table-responsive" id="post">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Post Title</th>
                <th scope="col">Price/unit</th>
                <th scope="col">Availbe Quantity</th>
                <th scope="col">Location</th>
                <th scope="col">Contact no</th>
                <th scope="col">Approval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hassan12@gmail.com</td>
                <td>Fruite</td>
                <td>50</td>
                <td>50kg</td>
                <td>islamabad</td>
                <td>0300-1234567</td>
                <td className="d-flex ">
                  <button className="m-0 px-3 btn btn-sm btn-success rounded-pill">
                    Approve
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