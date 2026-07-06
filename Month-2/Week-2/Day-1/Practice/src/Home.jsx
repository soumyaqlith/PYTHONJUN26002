import React from 'react'
import { useNavigate } from 'react-router'

function Home() {
  const navigate=useNavigate();
  let userId=55
  return (
    <div>
      Home

<br />
<button onClick={()=>navigate(`/admin/profile/${userId}`)}>Go to admin profile</button>
    </div>
  )
}

export default Home