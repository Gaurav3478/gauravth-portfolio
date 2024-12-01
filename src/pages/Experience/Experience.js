import React from "react";
import ExperienceComponent from "../../components/ExperienceComponent/ExperienceComponent";

const Experience = () => {
  return (
    <div>
      <ExperienceComponent
        title="Google (YouTube) - Software Engineer"
        fromYear={"July 2024"}
        toYear={"Present"}
        points={[
          "Working in the YouTube Creator Support SAM (Support Automation Manager) ML Quality team which is a chatbot in YouTube Studio",
          "Tracked metrics and built dashboards using GoogleSql and Plx",
          "Implemented Sampling to choose a subset of conversations for human ratings",
        ]}
        logo="google_logo"
      />
      <ExperienceComponent
        title="Sprinklr - Product Engineering (Winter Intern)"
        fromYear={"January 2024"}
        toYear={"June 2024"}
        points={[
          "Removing one of Sprinklr’s largest Elasticsearch indexes and redirecting all calls to a different (but equivalent) index. Reduced the Elasticsearch cost by over 20%",
          "Developed a master authentication/authorization app using Flask which uses Microsoft SSO to login. Used by 7 internal applications",
          "Built an app using Flask to effectively manage and update autouser login credentials. Eliminates the need to manually update autouser credentials, increasing efficiency by 70% and reducing credential-related errors by 80%",
        ]}
        logo="sprinklr_logo"
      />
      <ExperienceComponent
        title="Sprinklr - Product Engineering (Summer Intern)"
        fromYear={"May 2023"}
        toYear={"July 2023"}
        points={[
          "Created an API for Sprinklr Wiki and integrated it with various Sprinklr services including PagerDuty and Jira",
          "Implemented nested elastic search queries to provide advanced search functionality including wildcard and fuzzy search, improving search results by 40%",
        ]}
        logo="sprinklr_logo"
      />
    </div>
  );
};

export default Experience;
