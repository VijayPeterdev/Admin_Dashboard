import React from 'react'
import { FiEye } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import "./NewUser.css"

const NewUser = ({profilepic,username,usersubname}) => {
  return (
    <div className='userDetails'>
        <img className='avator' src={profilepic} alt="userprofile" />

        <div className='userdetails_column'>
            <span className='username'>{username}</span>
            <span className='sub_name'>{usersubname}</span>
        </div>


        <Link to={"/user/:id"}>
        <button className="displaybtn">
        <FiEye/>
        Display
      </button>

        </Link>
     
    </div>
  )
}

export default NewUser