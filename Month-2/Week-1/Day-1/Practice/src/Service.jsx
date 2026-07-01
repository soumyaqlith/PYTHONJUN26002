import React from "react";

function Service({ obj ,children}) {
  return (
    <div>
      Service
      <br />
      Object Email :{obj.email} <br />
      Object Password :{obj.password}
      {children}
    </div>
  );
}

export default Service;
