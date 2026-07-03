import React from "react";
import { useNavigate } from "react-router";

function Service() {
  const navigate = useNavigate();
  return (
    <div>
      Service
      <br />
      <button onClick={() => navigate("/contact")}>go to Contact page</button>
    </div>
  );
}

export default Service;
