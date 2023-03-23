import React from "react";
import styled from "styled-components";

import Logo from "../assets/logo.png";

function Footer() {
  const OptionList = ["About Us", "Jobs", "App", "Contact Us"];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "15vh",
        backgroundColor: "#2B5190",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "70%",
          height: "100%",
        }}
      >
        <Link key="<unique_key_here>" href="#">
          <img src={Logo} alt="logo" />
        </Link>

        {OptionList.map((item, index) => (
          <Link key={index} href="#">
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

const Link = styled.a`
  color: white;
  width: 10rem;
  height: 3rem;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #4e7cc7;
    border-radius: 5px;
    box-shadow: 0 0 10px #73c1e6;
  }
`;

export default Footer;
