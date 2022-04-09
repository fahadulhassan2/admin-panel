import React from 'react'
import Post from '../components/Post'
import Approve from '../components/Approve'
import Unapprove from '../components/Unapprove'
import Navbar from '../components/Navbar'
const ManagePost = () => {
  return (
    <>
    <Navbar/>
        <Post/>
        <Approve/>
        <Unapprove/>
    </>
  )
}

export default ManagePost