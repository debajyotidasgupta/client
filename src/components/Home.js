import React from "react";
import styled from "styled-components";
import Constants from "../Constants";

import Card from "./Card";

import Image1 from "../assets/artificial-intelligence.png";
import Image2 from "../assets/artificial-intelligence-isometric.jpg";
import BusinessGIF from "../assets/business-stats.gif";
import SearchGIF from "../assets/searched.gif";
import MoneyReturnGIF from "../assets/money-return.gif";
import RubiksCube from "../assets/rubiks-cube-transformation.gif";
import BrainTeaser from "../assets/brain-teasers-geometric-shape.gif";

function Home() {
  return (
    <div>
      <Section1>
        <TextBanner>
          <span>Super Charge Your Prospecting With</span>
          <span>Your Personal Ai Assistant.</span>
        </TextBanner>
        <Image src={Image1} alt="image1" />
      </Section1>
      <Section2>
        <div className="sc2-text">
          <h1>Experience The Power of Akido! </h1>
          <p>
            Say goodbye to cold calling and wasted time chasing unqualified
            leads. Our AI-powered prospecting tool takes the guesswork out of
            finding new business by analyzing intent data and prior sales
            history to recommend only the most relevant and high-quality leads
            for your company.
          </p>
          <p>
            Our platform is easy to use and delivers actionable insights that
            help your sales team close more deals and grow your business. With
            personalized recommendations and data-driven insights, you can focus
            your efforts on building meaningful relationships with qualified
            prospects, while our tool takes care of the heavy lifting.
          </p>
        </div>
        <div className="sc2-img">
          <img src={Image2} alt="image2" />
        </div>
      </Section2>
      <Section3>
        <div style={styles.s3d1}>
          <h3 style={styles.s3d1h3}>Akido At work</h3>
          <h2 style={styles.s3d1h2}>Unlock your sales potential</h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            title="Automatic Sequencing"
            body="Take your email sequencing to the next level by customizing your emailing schedule as per the company being targeted automatically"
            icon={BusinessGIF}
          />
          <Card
            title="Advance Client Recommendations"
            body="Using our dynamic AI recommender engine receive more accurate prospect lists which evolve as you do!"
            icon={SearchGIF}
          />
          <Card
            title="Longterm Lead tracking"
            body="Don't miss out on any leads with notifications for leads that were unsuccessful when they are back in the market for your product."
            icon={MoneyReturnGIF}
          />
        </div>
        <div style={styles.s3d3}>
          <span style={styles.s3d3span}>
            No need to start from scratch. Jump-start your workflow with a
            proven playbook designed for different teams. Customize it to make
            it yours.
          </span>
          <Button>Explore all Use Cases</Button>
        </div>
      </Section3>
      <Section4>
        <div style={styles.s4d1}>Seeing is believing!</div>
        <div style={styles.s4d2}>
          <div style={styles.s4d2i}>
            <img src={RubiksCube} width="150%" alt="rubiks-cube" />
          </div>
          <div style={styles.s4d2d1}>
            <Video>Place holder for video file (name = Video 1)</Video>
          </div>
          <div style={styles.s4d2i}>
            <img src={BrainTeaser} width="150%" alt="brain-teaser" />
          </div>
        </div>
      </Section4>
    </div>
  );
}

export default Home;

// Styles

const styles = {
  s3d1: {
    width: "100%",
    margin: "0",
    textAlign: "left",
  },
  s3d1h3: {
    textTransform: "uppercase",
    width: "100%",
    fontWeight: "500",
    fontSize: "1rem",
  },
  s3d1h2: {
    fontWeight: "500",
    fontSize: "2rem",
  },
  s3d3: {
    padding: "3rem 10rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  s3d3span: {
    width: "60%",
    padding: "1rem",
    margin: "0 1rem",
    boxSizing: "border-box",
    lineHeight: "1.6rem",
    fontSize: "1.1rem",
    fontWeight: "400",
  },
  s4d1: {
    width: "60%",
    position: "absolute",
    transform: "translateX(calc(30%)) translateY(calc(100%))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "550",
    fontSize: "1.9rem",
    color: "#fff",
  },
  s4d2: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    fontWeight: "450",
    fontSize: "1.8rem",
    top: "0",
  },
  s4d2i: {
    width: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  s4d2d1: {
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
};

const Video = styled.div`
  width: 100%;
  height: 60%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Section4 = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${Constants().Theme.Base};
`;

const Button = styled.button`
  font-size: 0.9rem;
  font-weight: 400;
  background-color: #fff;
  border-color: #0065ff;
  padding: 0.8rem 1.5rem;
  box-sizing: border-box;
  height: fit-content;

  &:hover {
    background-color: #0065ff;
    color: #fff;
    transform: scale(1.05) translateY(-2px);
    transition: all 0.2s ease-in-out;
  }
`;

const Section3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  color: #000;
  box-sizing: border-box;
  padding: 0 4rem;
`;

const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  height: fit-content;
  color: #000;
  background: linear-gradient(0deg, #e6fcff 0%, #ffffff 100%);
  font-weight: 400;

  .sc2-text {
    width: 35%;
    height: 100%;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
    padding-bottom: 2rem;
    text-align: center;
  }

  h1 {
    width: 100%;
    font-size: 1.7rem;
    padding: 1.5rem 0;
  }

  p {
    width: 87%;
    font-size: 1.1rem;
    line-height: 1.8rem;
    box-sizing: border-box;
    margin: 0.6rem 0;
  }

  .sc2-img {
    width: 50%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-top: 4rem;
  }

  img {
    width: 60%;
    object-fit: contain;
    margin-bottom: 3rem;
    border-radius: 8rem;

    &: hover {
      cursor: pointer;
      box-shadow: 0 0 0.5rem 0 rgba(0, 128, 255, 0.5);
      transform: translateY(-5px);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const Section1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  color: #fff;
  background-color: ${Constants().Theme.Base};
`;

const TextBanner = styled.span`
  width: fit-content;
  font-size: 2rem;
  font-weight: 670;
  text-align: left;
  padding: 3rem;
  color: #fff;
  letter-spacing: 0.05rem;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 50vh;
  width: fit-content;
  padding: 0 8rem;
  object-fit: contain;
`;
