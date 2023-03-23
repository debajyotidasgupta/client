import React from "react";

import Quality from "../assets/ui-ux-designer-working-on-new-project.gif";
import DeepLearning from "../assets/deep-learning-algorithm.gif";
import DevelopersTeam from "../assets/developers-team.gif";

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
      description:
        "we understand that your time is valuable, which is why we've created an intuitive and user-friendly interface that is designed to streamline your prospecting efforts. Our platform features a simple and easy-to-use design that allows you to quickly and easily search for prospects, manage your lists, and export data.With a modern and clean interface, our platform ensures that you can easily find what you're looking for, whether you're a seasoned sales professional or a new user. Our user-friendly design means that you don't have to spend hours learning how to use our platform, allowing you to focus on what really matters – closing deals and growing your business.In addition, we're constantly gathering feedback from our users to ensure that our interface is always improving and evolving to meet their needs. This means that you can expect a platform that is always up-to-date and optimized for the best user experience possible.",
    },
    {
      title: "Quality > Quantity:",
      image: Quality,
      description:
        "we understand that your success is directly tied to the quality of your leads. That's why we take data quality seriously, and regularly update our database to ensure that our users have access to the most up-to-date and accurate information available. With our platform, you can rest assured that you're getting high-quality data that is free from errors and duplicates, giving you the best chance at success with your sales efforts. We believe that the accuracy and quality of your leads can make or break your business, which is why we go above and beyond to provide you with the best possible data.",
    },
    {
      title: "Seamless Intergrations:",
      description:
        "Akido seamlessly integrates with popular CRM and sales tools such as Salesforce and HubSpot. This means that you can streamline your workflow and ensure that your prospecting efforts are always aligned with your sales goals. With Akido's easy-to-use interface, you can easily manage your prospect lists and export data directly to your CRM. You can save time and resources by eliminating manual data entry, allowing you to focus on what you do best: closing deals.",
    },
    {
      title: "Stay on top of your leads:",
      description:
        "Get real-time notifications about potential new leads and never miss out on a sales opportunitys again with Akido's real-time alerts feature. Our platform keeps you informed of relevant changes to your prospect list, such as new leads, updated contact information, and changes in company status, so you can stay one step ahead of the competition.",
    },
    {
      title: "Customer is king!:",
      description:
        "Akido is committed to providing top-notch customer support to our users. Our team of experts is available to help you with any questions or issues you may encounter while using our platform. We believe that our users deserve the best support possible. That's why we offer dedicated customer support to all of our users. Our team of experts is available 24/7 to answer any questions you may have and provide personalized guidance and support. Whether you're a new user or an experienced sales professional, we're here to help you get the most out of our platform. With Akido, you can be confident that you'll always have the support you need to succeed.",
    },
  ];

  return (
    <div>
      <div
        style={
          {
            //   display: "flex",
            //   flexDirection: "column",
            //   alignItems: "center",
            //   justifyContent: "center",
          }
        }
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              //   height: "100vh",
              background: "linear-gradient(0deg, #E6FCFF 0%, #FFFFFF 100%)",
              padding: "3rem",
              textAlign: "left",
            }}
          >
            <h1
              style={{
                color: "#0F4C81",
                fontSize: "30px",
                fontWeight: "800",
                paddingTop: "6rem",
                paddingBottom: "3rem",
              }}
            >
              {item.title}
            </h1>
            <p
              style={{
                color: "#0F4C81",
                fontSize: "20px",
                fontWeight: "400",
                padding: "3rem 12rem",
                lineHeight: "1.7",
                wordSpacing: "0.3rem",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solution;
