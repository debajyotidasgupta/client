import React from "react";
import styled from "styled-components";
import Constants from "../Constants";

import { BasicCard, LightCard } from "./Card";

import Image1 from "../assets/artificial-intelligence.png";
import Image2 from "../assets/artificial-intelligence-isometric.jpg";
import BusinessGIF from "../assets/business-stats.gif";
import SearchGIF from "../assets/searched.gif";
import MoneyReturnGIF from "../assets/money-return.gif";
import RubiksCube from "../assets/rubiks-cube-transformation.gif";
import BrainTeaser from "../assets/brain-teasers-geometric-shape.gif";
import APIFileFormat from "../assets/api-file-format-extension.gif";
import Upload from "../assets/upload.gif";
import LaptopBooster from "../assets/laptop-booster.gif";
import Quotes from "../assets/quotes.svg";
import SaleFunnel from "../assets/sales-filter.gif";

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
          <BasicCard
            title="Automatic Sequencing"
            body="Take your email sequencing to the next level by customizing your emailing schedule as per the company being targeted automatically"
            icon={BusinessGIF}
          />
          <BasicCard
            title="Advance Client Recommendations"
            body="Using our dynamic AI recommender engine receive more accurate prospect lists which evolve as you do!"
            icon={SearchGIF}
          />
          <BasicCard
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
      <Section5>
        <div
          style={{
            width: "70%",
            height: "fit-content",
          }}
        >
          <div
            style={{
              width: "100%",
              fontWeight: "500",
              fontSize: "1.6rem",
              textAlign: "left",
              paddingBottom: "4rem",
            }}
          >
            Get the most out of Akido
          </div>
          <div
            style={{
              width: "100%",
              fontWeight: "400",
              fontSize: "1.1rem",
              lineHeight: "1.5rem",
              textAlign: "left",
              boxSizing: "border-box",
              paddingRight: "25rem",
            }}
          >
            Trello's intuitive features give any team the ability to quickly set
            up and customize workflows for just about anything.
          </div>
          <div
            style={{
              width: "100%",
              height: "fit-content",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "2rem",
            }}
          >
            <LightCard
              icon={APIFileFormat}
              title="API Integrations"
              body="Connect your existing apps to Akido workflow or add a Power-Up to fine-tune your specific needs."
              button="Browse Integrations"
            />
            <LightCard
              icon={Upload}
              title="Upload CVS"
              body="Upload current leads and get rankings insights and contact details using our algorithm."
              button="Get to know Automation"
            />
            <LightCard
              icon={LaptopBooster}
              title="Optimized Filter extension"
              body="Get most out of filters when conducting manual searches via custom filter recommendations for linked in."
              button="Explore Enterprise"
            />
          </div>
        </div>
      </Section5>
      <Section6>
        <div
          style={{
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "65%",
              width: "70%",
              display: "flex",
              boxShadow:
                "0 0.2rem 0.3rem rgba(9, 30, 66, 0.31), 0 0 0.15rem rgba(9, 30, 66, 0.31)",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "#ffffff",
                position: "relative",
              }}
            >
              <img
                src={Quotes}
                width="50%"
                alt="quotes"
                style={{ position: "absolute", top: "0", left: "0" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  left: "1.5rem",
                  textAlign: "justify",
                  boxSizing: "border-box",
                  paddingRight: "5rem",
                  lineHeight: "1.5rem",
                }}
              >
                I'm always looking for ways to stay ahead of the game. That's
                why I was so impressed with this tool. It's hands down the best
                lead-generation platform I've ever used. The accuracy of the
                data is unparalleled
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  bottom: "3.5rem",
                  left: "1.5rem",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                  height: "fit-content",
                  borderTopColor: "#000",
                  borderTopWidth: "1px",
                  borderTopStyle: "solid",
                  lineHeight: "1.2rem",
                  fontSize: "0.8rem",
                  letterSpacing: "0.04rem",
                  boxSizing: "border-box",
                  paddingTop: "1rem",
                }}
              >
                <span>Shaan Acharya</span>
                <span>Founder at Sales High</span>
              </div>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: Constants().Theme.Base,
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "500",
                  fontSize: "1.4rem",
                  lineHeight: "1.9rem",
                  textAlign: "left",
                  color: "#ffffff",
                  position: "absolute",
                  top: "2rem",
                  left: "2rem",
                }}
              >
                10 times more conversions than human conducted prospecting
              </div>
              <img
                style={{
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-1.8rem",
                  right: "-2rem",
                }}
                src={SaleFunnel}
                alt="sales-funnel"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            height: "20vh",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "400",
              fontSize: "1.1rem",
            }}
          >
            Join over 2,000,000 teams worldwide that are using Akido to get more
            done.
          </div>
        </div>
      </Section6>
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

const Section6 = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, #e6fcff 0%, #ffffff 100%);
`;

const Section5 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
