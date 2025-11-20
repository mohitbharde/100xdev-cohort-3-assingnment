import React from "react";

const Header = ({ message }) => {
  return (
    <div
      style={{
        color: "green",
        font: "30px Arial, sans-serif",
        background: "#B18866",
        padding: "20px ",
      }}
    >
      {message}
    </div>
  );
};

export default Header;
