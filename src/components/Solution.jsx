import React from "react";

import Constants from "../Constants";
import styled from "styled-components";

import Quality from "../assets/ui-ux-designer-working-on-new-project.gif";
import DeepLearning from "../assets/deep-learning-algorithm.gif";
import DevelopersTeam from "../assets/developers-team.gif";
import DataAnalysis from "../assets/data-analysis.gif";
import FixingApiProblem from "../assets/fixing-api-problem.gif";
import PushNotifications from "../assets/man-having-push-notifications-on-his-phone.gif";
import CustomerService from "../assets/customer-service.gif";
import OnlineInterview from "../assets/online-interview.gif";

function Solution() {
  const data = [
    {
      title: "Ai Powered  Prospecting:",
      image: DeepLearning,
      description:
        "Akido is an AI-based B2B prospecting solution that utilizes advanced algorithms to analyze and interpret a variety of data sources, including company data, tech stack data, and intent data. By combining these data sources with client history, Akido is able to generate highly accurate prospect lists, with a focus on quality over quantity.Our system utilizes machine learning to continuously refine and improve its accuracy, ensuring that our clients receive the most up-to-date and relevant prospect data. This allows businesses to streamline their sales process and focus their efforts on the most promising leads.",
    },
    {
      title: "Hyper customized filters:",
      image: DevelopersTeam,
      description:
        "At Akido, we understand that every business is unique and has its own set of criteria when it comes to identifying potential clients and leads. That's why we've designed our platform to give you complete control over your search parameters, with customizable filters that allow you to narrow down your results based on a variety of factors, including industry, location, company size, and more.Our easy-to-use interface makes it simple to create and apply filters, so you can quickly and easily find the exact prospects you're looking for. With Akido, you'll never have to waste time sifting through irrelevant leads again. And as your business evolves and your needs change, our platform adapts with you, offering a fully customizable prospecting experience that grows with your company.Whether you're a small startup or a large enterprise, our customizable filters give you the power to tailor your prospecting efforts to your specific needs, ensuring that you're always targeting the right leads and maximizing your sales potential. So why settle for a one-size-fits-all solution when you can have a platform that puts you in complete control? Try Akido today and start customizing your prospecting experience like never before.",
    },
    {
      title: "Sleek User Interface:",
      image: Quality,
      description:
        "we understand that your time is valuable, which is why we've created an intuitive and user-friendly interface that is designed to streamline your prospecting efforts. Our platform features a simple and easy-to-use design that allows you to quickly and easily search for prospects, manage your lists, and export data.With a modern and clean interface, our platform ensures that you can easily find what you're looking for, whether you're a seasoned sales professional or a new user. Our user-friendly design means that you don't have to spend hours learning how to use our platform, allowing you to focus on what really matters – closing deals and growing your business.In addition, we're constantly gathering feedback from our users to ensure that our interface is always improving and evolving to meet their needs. This means that you can expect a platform that is always up-to-date and optimized for the best user experience possible.",
    },
    {
      title: "Quality > Quantity:",
      image: DataAnalysis,
      description:
        "we understand that your success is directly tied to the quality of your leads. That's why we take data quality seriously, and regularly update our database to ensure that our users have access to the most up-to-date and accurate information available. With our platform, you can rest assured that you're getting high-quality data that is free from errors and duplicates, giving you the best chance at success with your sales efforts. We believe that the accuracy and quality of your leads can make or break your business, which is why we go above and beyond to provide you with the best possible data.",
    },
    {
      title: "Seamless Intergrations:",
      image: FixingApiProblem,
      description:
        "Akido seamlessly integrates with popular CRM and sales tools such as Salesforce and HubSpot. This means that you can streamline your workflow and ensure that your prospecting efforts are always aligned with your sales goals. With Akido's easy-to-use interface, you can easily manage your prospect lists and export data directly to your CRM. You can save time and resources by eliminating manual data entry, allowing you to focus on what you do best: closing deals.",
    },
    {
      title: "Stay on top of your leads:",
      image: PushNotifications,
      description:
        "Get real-time notifications about potential new leads and never miss out on a sales opportunitys again with Akido's real-time alerts feature. Our platform keeps you informed of relevant changes to your prospect list, such as new leads, updated contact information, and changes in company status, so you can stay one step ahead of the competition.",
    },
    {
      title: "Customer is king!:",
      image: CustomerService,
      description:
        "Akido is committed to providing top-notch customer support to our users. Our team of experts is available to help you with any questions or issues you may encounter while using our platform. We believe that our users deserve the best support possible. That's why we offer dedicated customer support to all of our users. Our team of experts is available 24/7 to answer any questions you may have and provide personalized guidance and support. Whether you're a new user or an experienced sales professional, we're here to help you get the most out of our platform. With Akido, you can be confident that you'll always have the support you need to succeed.",
    },
  ];

  return (
    <div>
      <Container1>
        <p
          style={{
            color: "white",
            fontWeight: "800",
            fontSize: "2rem",
            textAlign: "left",
          }}
        >
          Uncover Your Next Big Opportunity: Akido's AI- Powered Prospecting
          Delivers Results
        </p>
        <Image1 src={OnlineInterview} alt="Online Interview" />
      </Container1>
      <div
        style={{
          boxSizing: "border-box",
          paddingBottom: "20rem",
          background: "linear-gradient(0deg, #E6FCFF 0%, #FFFFFF 100%)",
        }}
      >
        {data.map((item, index) => (
          <SubSection key={index}>
            <StyledH1>{item.title}</StyledH1>
            <StyledP>{item.description}</StyledP>
            <StyledImg src={item.image} alt={`${item.title}`} />
          </SubSection>
        ))}
      </div>
      <div
        style={{
          height: "fit-content",
          backgroundColor: Constants().Theme.Base,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          paddingTop: "3rem",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontWeight: "500",
            fontSize: "1.7rem",
            paddingBottom: "1rem",
          }}
        >
          Bring powerful new views to your team's work
        </span>
        <span
          style={{
            fontWeight: "400",
            fontSize: "1.2rem",
            paddingBottom: "1.5rem",
          }}
        >
          Start a free trial today
        </span>
        <button
          style={{
            cursor: "pointer",
            width: "fit-content",
            fontWeight: "400",
            fontSize: "1rem",
            padding: "1rem",
            marginBottom: "1rem",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
          }}
        >
          I'm ready
        </button>
      </div>
    </div>
  );
}

export default Solution;

const Container1 = styled.div`
  background-color: ${Constants().Theme.Base};
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5.5rem;

  @media (max-width: 768px) {
    height: fit-content;
    flex-direction: column;
    padding: 0 2rem;
  }
`;

const Image1 = styled.img`
  height: 120%;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const SubSection = styled.div`
  background: linear-gradient(0deg, #e6fcff 0%, #ffffff 100%);
  padding: 3rem;
  text-align: left;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    :last-child {
      img {
        bottom: -12rem;
        width: 60%;
      }
    }
  }
`;

const StyledH1 = styled.h1`
  color: #0f4c81;
  font-size: 30px;
  font-weight: 800;
  padding-top: 6rem;
  padding-bottom: 3rem;
`;

const StyledP = styled.p`
  color: #0f4c81;
  font-size: 20px;
  font-weight: 400;
  padding: 3rem 12rem;
  line-height: 1.7;
  word-spacing: 0.3rem;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  right: 12rem;
  bottom: -15rem;
  height: 22rem;
  width: 22rem;
  object-fit: cover;
  z-index: 1;

  @media (max-width: 768px) {
    width: 50%;
    height: auto;
    object-fit: contain;
    right: 3rem;
    bottom: -6rem;
  }
`;
