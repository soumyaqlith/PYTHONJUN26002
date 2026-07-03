import React from "react";
import { useParams } from "react-router";

function Profile2() {
  const { id } = useParams();
  return (
    <div>
      Profile2
      <br />
      id :{id}
    </div>
  );
}

export default Profile2;
