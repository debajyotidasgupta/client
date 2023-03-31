import React from "react";

import ResourcesGif from "../assets/resources.gif";
import Constants from "../Constants";

import styled from "styled-components";

function Resources() {
  const DisplayItems = [
    "Quick Start Guide",
    "Product Guide",
    "Case study 1",
    "Case study 2",
    "Statement of GDPR compliance",
  ];

  return (
    <div>
      <TextContainer>Find everything you need to know here!</TextContainer>
      <div
        style={{
          background: "linear-gradient(0deg, #E6FCFF 0%, #FFFFFF 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DisplayContainer>
          {DisplayItems.map((item, index) => {
            return <DisplayItem key={index}>{item}</DisplayItem>;
          })}
        </DisplayContainer>
        <Image src={ResourcesGif} alt="Resources" />
      </div>
    </div>
  );
}

export default Resources;

const TextContainer = styled.div`
  background-color: ${Constants().Theme.Base};
  color: white;
  font-weight: 700;
  font-size: 2rem;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DisplayItem = styled.div`
  width: 40%;
  padding: 2rem 0;
  margin: 2rem 0;
  background-color: #d9d9d9;

  @media (max-width: 768px) {
    width: 80%;
    margin: 1rem 0;
  }
`;

const DisplayContainer = styled.div`
  flex-wrap: wrap;
  color: black;
  background-color: ${Constants().Theme.Base};
  height: fit-content;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5rem 0;
  box-sizing: border-box;
  padding: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 50%;
  padding: 3rem 0;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
