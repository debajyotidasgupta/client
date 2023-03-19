import React from "react";
import Constants from "../Constants";

export default function Card(props) {
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
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img style={styles.icon} src={icon} alt="icon" />
      </div>
      <div style={{ padding: "1rem", boxSizing: "border-box" }}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.body}>{body}</p>
      </div>
    </div>
  );
}
