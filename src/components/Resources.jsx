import React from "react";

import ResourcesGif from "../assets/resources.gif";
import Constants from "../Constants";

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
      <div
        style={{
          backgroundColor: Constants().Theme.Base,
          color: "white",
          fontWeight: "700",
          fontSize: "2rem",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Find everything you need to know here!
      </div>
      <div
        style={{
          background: "linear-gradient(0deg, #E6FCFF 0%, #FFFFFF 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flexWrap: "wrap",
            color: "black",
            backgroundColor: Constants().Theme.Base,
            height: "fit-content",
            width: "70%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            margin: "5rem 0",
            boxSizing: "border-box",
            padding: "2rem 0",
          }}
        >
          {DisplayItems.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "40%",
                  padding: "2rem 0",
                  margin: "2rem 0",
                  backgroundColor: "#D9D9D9",
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <img
          src={ResourcesGif}
          alt="Resources"
          style={{
            width: "50%",
            padding: "3rem 0",
          }}
        />
      </div>
    </div>
  );
}

export default Resources;
