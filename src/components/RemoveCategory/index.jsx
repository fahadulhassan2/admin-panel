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


          <table class="rounded-3 table table-responsive" id="remove">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Category Name</th>
                <th scope="col">Sub Category Name</th>
                <th scope="col">Variety </th>
                <th scope="col">Permission</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>hassan12@gmail.com</td>
                <td>Fruite</td>
                <td>Mango</td>
                <td>Lungra</td>
                <td class="d-flex ">
                    <button class="m-0 px-3 btn btn-sm btn-success rounded-pill">
                        Remove
                    </button>
                    <button class="ms-3 px-4 m-0 px-3 btn btn-sm btn-success rounded-pill">
                      Add
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