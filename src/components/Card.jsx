import React from "react";
import Constants from "../Constants";
import styled from "styled-components";

import Tick from "../assets/tick-circle.png";

const Button = styled.button`
  font-size: 0.9rem;
  font-weight: 400;
  background-color: #fff;
  border-color: #0065ff;
  padding: 0.8rem;
  box-sizing: border-box;
  height: fit-content;
  &:hover {
    background-color: #0065ff;
    color: #fff;
    transform: scale(1.05) translateY(-2px);
    transition: all 0.2s ease-in-out;
  }
`;

function PricingCard(props) {
  const { title, details, pricing, prospects } = props.data;

  return (
    <div
      style={{
        border: "1px solid #000",
        height: "70vh",
        width: "40vh",
        backgroundColor: "#F4FEFF",
      }}
    >
      <div
        style={{
          fontWeight: "700",
          fontSize: "1.5rem",
          borderBottom: "1px solid #000",
          padding: "0.8rem 0",
        }}
      >
        {title}
      </div>
      <div
        style={{
          height: "90%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            textAlign: "left",
            padding: "0.8rem",
            fontSize: "0.9rem",
            lineHeight: "1.3rem",
            wordSpacing: "0.1rem",
          }}
        >
          <div>
            <ul>
              {details.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          {pricing ? (
            <>
              <div>Pricing: {pricing}</div>
              <div>Prospects: {prospects}</div>
            </>
          ) : (
            <></>
          )}
        </div>
        <img
          src={Tick}
          alt="tick"
          style={{
            height: "10%",
            paddingBottom: "0.5rem",
          }}
        />
      </div>
    </div>
  );
}

function LightCard(props) {
  const { title, body, icon, button } = props;

  const styles = {
    title: {
      fontSize: "1.25rem",
      fontWeight: "500",
      color: "#000",
      paddingBottom: "0.6rem",
    },
    body: {
      fontSize: "0.9rem",
      fontWeight: "400",
      lineHeight: "1.3rem",
      color: "#000",
    },
    imageContainer: {
      width: "100%",
      height: "40%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    textContainer: {
      height: "60%",
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  };

  return (
    <LightCardCard>
      <div style={styles.imageContainer}>
        <img src={icon} alt="icon" height="70%" />
      </div>
      <div style={styles.textContainer}>
        <div>
          <div style={styles.title}>{title}</div>
          <div style={styles.body}>{body}</div>
        </div>
        <Button>{button}</Button>
      </div>
    </LightCardCard>
  );
}

function BasicCard(props) {
  const { title, body, icon } = props;

  const styles = {
    card: {
      width: "23%",
      height: "15rem",
      display: "flex",
      flexDirection: "column",
      margin: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 0 0.5rem 0 rgba(9, 30, 66, 0.15)",
      backgroundColor: "#fff",
      textAlign: "left",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "1.3rem",
      fontWeight: "500",
      color: "#000",
      marginBottom: "0rem",
    },
    body: {
      fontSize: "0.9rem",
      fontWeight: "400",
      lineHeight: "1.3rem",
      color: "#000",
    },
    icon: {
      height: "100%",
      objectFit: "contain",
      paddingLeft: "2rem",
    },
    imageContainer: {
      width: "100%",
      backgroundColor: Constants().Theme.Base,
      height: "21%",
      borderRadius: "1rem 1rem 0 0",
    },
  };

  return (
    <BasicCardCard>
      <div style={styles.imageContainer}>
        <img style={styles.icon} src={icon} alt="icon" />
      </div>
      <div style={{ padding: "1rem", boxSizing: "border-box" }}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.body}>{body}</p>
      </div>
    </BasicCardCard>
  );
}

export { BasicCard, LightCard, PricingCard };

const LightCardCard = styled.div`
  width: 31%;
  height: 22rem;
  padding: 1.3rem;
  padding-top: 0;
  box-sizing: border-box;
  background-color: #fafbfc;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-bottom: 2rem;
  }
`;

const BasicCardCard = styled.div`
  width: 23%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0 rgba(9, 30, 66, 0.15);
  background-color: #fff;
  text-align: left;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-bottom: 2rem;
  }
`;
