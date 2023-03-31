import React from "react";
import styled from "styled-components";

import Constants from "../Constants";

import FAQ from "../assets/faqs.gif";
import Presentation from "../assets/the-analysts-present-information-to-businessmen.gif";
import CostDeduction from "../assets/cost-deduction.gif";
import Freelancer from "../assets/freelance-developer-working-on-laptop.gif";
import CancelSetting from "../assets/cancel-setting.gif";
import SecureWebsite from "../assets/secure-website.gif";
import OnlineCollaboration from "../assets/online-collaboration.gif";
import Dummy from "../assets/faq.gif";

function Faq() {
  const data = [
    {
      QA: [
        {
          Q: "What is Akido?",
          A: "Akido is an AI-based prospecting platform that helps businesses identify and engage with potential clients and leads.",
        },
        {
          Q: "How does Akido work?",
          A: "Akido uses machine learning algorithms and natural language processing to analyze data from various sources and generate accurate and relevant prospect recommendations.",
        },
      ],
      image: Presentation,
    },
    {
      QA: [
        {
          Q: "How much does Akido cost?",
          A: "Akido offers three pricing tiers, starting at $499 per month. For more information, please see our pricing page.",
        },
        {
          Q: "Does Akido integrate with other tools and platforms?",
          A: "Yes, Akido integrates with popular CRMs such as Salesforce, Hubspot, and Pipedrive, as well as email platforms like Mailchimp and Gmail.",
        },
      ],
      image: CostDeduction,
    },
    {
      QA: [
        {
          Q: "How much does Akido cost?",
          A: "Akido offers three pricing tiers, starting at $499 per month. For more information, please see our pricing page.",
        },
        {
          Q: "Does Akido integrate with other tools and platforms?",
          A: "Yes, Akido integrates with popular CRMs such as Salesforce, Hubspot, and Pipedrive, as well as email platforms like Mailchimp and Gmail.",
        },
      ],
      image: Freelancer,
    },
    {
      QA: [
        {
          Q: "Is there a free trial available?",
          A: "Yes, Akido offers a free trial that includes access to basic AI prospecting features and a limited number of prospects. Sign up now to start your free trial!",
        },
        {
          Q: "How can I get started with Akido?",
          A: "Simply visit our website and sign up for a free trial or choose one of our paid plans. Our user-friendly platform makes it easy to get started and start generating new leads right away.",
        },
      ],
      image: CancelSetting,
    },
    {
      QA: [
        {
          Q: "Can I cancel my subscription at any time?",
          A: "Yes, you can cancel your subscription at any time. Simply log in to your account and follow the cancellation instructions.",
        },
        {
          Q: "Can I upgrade or downgrade my subscription?",
          A: "Yes, you can upgrade or downgrade your subscription at any time. Simply log in to your account and select the plan you want to switch to.",
        },
      ],
      image: SecureWebsite,
    },
    {
      QA: [
        {
          Q: "Is my data secure with Akido?",
          A: "Yes, we take data security very seriously at Akido. We use industry-standard encryption protocols to protect your data and ensure that it is stored securely.",
        },
        {
          Q: "What kind of support do you offer",
          A: "We offer 24/7 support to all of our clients via email and chat. Our team is always available to help you with any questions or issues you may have.",
        },
      ],
      image: OnlineCollaboration,
    },
    {
      QA: [
        {
          Q: "How do I integrate Akido with my existing tools and software?",
          A: "We offer integration with a wide range of popular tools and software, including Salesforce, Hubspot, and Pipedrive. Simply log in to your account and follow the integration instructions.",
        },
        {
          Q: "How often is your database updated?",
          A: "Our database is updated on a daily basis, with new contacts and companies added regularly. This ensures that you always have access to the most up-to-date and accurate information.",
        },
      ],
      image: Dummy,
    },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(0deg, #e6fcff 0%, #ffffff 100%)",
      }}
    >
      <ImageContainer>
        <img src={FAQ} alt="FAQ" height="100%" />
      </ImageContainer>
      {data.map((item, index) => (
        <Section key={index} data={item.QA} image={item.image} value={index} />
      ))}
    </div>
  );
}

function Section(props) {
  const { data, image, value } = props;
  console.log(props);
  return (
    <div>
      <StyledSection value={value}>
        <StyledSubSection>
          {data.map((item, index) => (
            <Text key={index}>
              <p>Q: {item.Q}</p>
              <p>A: {item.A}</p>
            </Text>
          ))}
        </StyledSubSection>
        {image && <Image src={image} alt={`FAQ-${value}`} />}
      </StyledSection>
    </div>
  );
}

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60vh;
  background-color: ${Constants().Theme.Base};

  @media (max-width: 768px) {
    height: 30vh;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.value % 2 === 0 ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  box-sizing: border-box;
  padding: 2rem 5rem;
  font-weight: 400;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledSubSection = styled.div`
  height: fit-content;
  padding: 0 4rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

const Text = styled.p`
  text-align: left;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;

    p {
      :first-child {
        font-weight: 600;
      }
    }
  }
`;

const Image = styled.img`
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin-top: 2rem;
  }
`;

export default Faq;
