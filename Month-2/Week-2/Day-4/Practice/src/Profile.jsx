import React, { useContext } from "react";
import { nameContext } from "./App";

function Profile() {
  const name = useContext(nameContext);
  return <div>Profile User Name :{name}</div>;
}

export default Profile;
