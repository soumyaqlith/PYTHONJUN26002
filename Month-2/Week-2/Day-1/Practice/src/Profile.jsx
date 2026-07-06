import React from 'react'
import { useParams } from 'react-router'

function Profile() {
    const {userId}=useParams()
  return (
    <div>Profile
        <br />
        user Id :{userId}
    </div>
  )
}

export default Profile