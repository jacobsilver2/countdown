import React from "react";
import "../styles/Logo.css";

export const Logo = ({ alt, src }) => {
  return (
    <div className="logo-container">
      <img className="logo" alt={alt} src={src} />
    </div>
  );
};

export default Logo;
