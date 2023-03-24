import React from "react";
import Constants from "../Constants";
import { PricingCard } from "./Card";
import PricingImage from "../assets/pricing.gif";
import styled from "styled-components";

import PricingStrategy from "../assets/pricing-strategy.gif";

function Pricing() {
  const data = [
    {
      title: "Free Trial",
      details: [
        "AI-based prospecting",
        "500 prospects to start",
        "Access to our user-friendly platform",
        "No credit card required",
      ],
      pricing: "",
      prospects: "",
    },
    {
      title: "Basic",
      details: [
        "AI-powered prospecting to identify potential clients and leads",
        "Access to our extensive database of contacts and companies",
        "Basic filtering options",
        "Ideal for small businesses that are just starting out",
      ],
      pricing: "$499 per month",
      prospects: "500",
    },
    {
      title: "Advanced",
      details: [
        "Everything in the Basic package, plus more advanced AI prospecting, analytics, and reporting",
        "More advanced filtering options",
        "More detailed analytics and insights",
        "Custom reporting",
        "Ideal for medium-sized businesses looking to expand their reach and increase their client base",
      ],
      pricing: "$999 per month",
      prospects: "1,000",
    },
    {
      title: "Premium",
      details: [
        "Everything in the Advanced package, plus custom recommendations and a dedicated account manager",
        "Custom-tailored recommendations based on your specific needs and industry",
        "A dedicated account manager to assist with any questions or concerns",
        "Ideal for larger businesses needing a more hands-on approach to their prospecting efforts",
      ],
      pricing: "$4,999 per month",
      prospects: "5,000",
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          fontSize: "1.8rem",
          backgroundColor: Constants().Theme.Base,
          color: "white",
        }}
      >
        <div>
          We offer a variety of pricing packages to fit your business's unique
          needs!
        </div>
        <img
          src={PricingImage}
          alt="pricing"
          style={{
            height: "100%",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "fit-content",
          background: "linear-gradient(0deg, #E6FCFF 0%, #FFFFFF 100%)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "fit-content",
              paddingTop: "5rem",
            }}
          >
            {data.map((item, index) => {
              return <PricingCard key={index} data={item} />;
            })}
          </div>
          <button
            style={{
              backgroundColor: Constants().Theme.Base,
              color: "white",
              padding: "1rem 2.5rem",
              border: "none",
              fontSize: "1.2rem",
              margin: "4rem 0",
              fontWeight: "bold",
            }}
          >
            Subscribe
          </button>
          <h1
            style={{
              padding: "2rem 15rem 5rem",
              textAlign: "left",
              lineHeight: "1.3",
            }}
          >
            Discover the Power of AI-Driven Prospecting: Our Data-Backed
            Statistics Speak for Themselves!
          </h1>
          <JustP>
            Say goodbye to manual prospecting - Akido's AI algorithms have
            helped businesses save up to 80% of their prospecting time.
            <img
              src={PricingStrategy}
              alt="pricing-strategy"
              style={{
                position: "absolute",
                top: "2rem",
                right: "6rem",
                width: "37%",
              }}
            />
          </JustP>
          <JustP>
            Get ahead of your competition - Akido's custom recommendations have
            helped clients close deals 2x faster than their competitors.
          </JustP>
          <JustP>
            Make data-driven decisions with Akido - our advanced analytics and
            reporting have helped clients increase their conversion rates by up
            to 40%
          </JustP>
          <JustP>
            Join the 80% of businesses that have seen significant growth with
            Akido's AI prospecting technology.
          </JustP>
          <div
            style={{
              boxSizing: "border-box",
              padding: "8rem 5rem 13rem",
            }}
          >
            <div
              style={{
                backgroundColor: "#D9D9D9",
                boxSizing: "border-box",
                padding: "15rem 2rem",
                fontWeight: "700",
              }}
            >
              Savings and competator calulator as long as calc for custom
              packages .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const JustP = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0;
  width: 60%;
  padding: 4rem;
  box-sizing: border-box;
  text-align: left;

  &:first-of-type {
    position: relative;
    width: 100%;
  }

  &:last-of-type {
    width: 100%;
  }
`;

export default Pricing;
