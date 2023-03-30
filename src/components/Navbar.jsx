import React, { useState } from "react";
import styled from "styled-components";
import Constants from "../Constants";
import Logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar(props) {
  const [isOpen, setOpen] = useState(false);
  const nav_items = ["Solution", "Pricing", "Resources", "Contact Us", "FAQ"];
  const { setPage } = props;

  return (
    <NavbarContainer>
      <NavbarLayout>
        <LogoContainer>
          <img
            src={Logo}
            alt="logo"
            onClick={() => setPage("home")}
            style={{ cursor: "pointer" }}
          />
        </LogoContainer>
        <NavItems>
          {nav_items.map((item, index) => (
            <NavItem key={index} text={item} setPage={setPage} />
          ))}
        </NavItems>
        <NavItems style={{ width: "fit-content" }}>
          <NavItem text="Log In" setPage={setPage} />
          <NavItem
            text="Sign Up"
            color={Constants().Theme.Base}
            setPage={setPage}
          />
        </NavItems>
        <StyledMenuIcon onClick={() => setOpen(true)} />
      </NavbarLayout>
    </NavbarContainer>
  );
}

function NavItem(props) {
  const { text, color, setPage } = props;

  return (
    <LinkItem
      color={color ? color : "#fff"}
      onClick={() => {
        setPage(`${text}`.toLowerCase().replace(" ", "-"));
      }}
    >
      {text}
    </LinkItem>
  );
}

const StyledMenuIcon = styled(MenuIcon)`
  display: none;
  @media screen and (max-width: 914px) {
    display: block;
    cursor: pointer;
  }
`;

const LinkItem = styled.button`
            border: none;
            outline: none;
            cursor: pointer;
            width: 6rem;
            height: 100%;
            display: flex
            align-items: center;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            text-decoration: none;
            background-color: ${(props) => props.color};
            color: ${(props) => (props.color === "#fff" ? "#000" : "#fff")};

            &:hover {
                background-color: ${Constants().Theme.Base};
                color: #fff;
                transition: all 0.2s ease-in-out;
            }
            `;

const NavbarContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 1.5rem;
`;

const NavbarLayout = styled.div`
  display: flex;
  height: 7vh;
  justify-content: space-between;
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const NavItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 914px) {
    display: none;
  }
`;
