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
      <LinkContainer>
        <Link key="<unique_key_here>" href="#">
          <img src={Logo} alt="logo" />
        </Link>

        {OptionList.map((item, index) => (
          <Link key={index} href="#">
            {item}
          </Link>
        ))}
      </LinkContainer>
    </div>
  );
}

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    box-sizing: border-box;
    width: 90%;
    padding: 1.5rem 0;
  }
`;

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

  @media (max-width: 768px) {
    :first-child {
      grid-row-start: 1;
      grid-row-end: 3;
      grid-column-start: 1;
      grid-column-end: 2;
    }

    font-size: 0.8rem;
    width: 5rem;
    height: 1rem;
    padding: 0.5rem;
  }
`;

export default Footer;
