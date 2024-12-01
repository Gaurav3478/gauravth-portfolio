import React from "react";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";

const Projects = () => {
  return (
    <div>
      <ProjectComponent
        title="CF Sprint"
        project_url="https://cf-sprint.netlify.app/"
        points={[
          "A web app for competitive programmers to practice efficiently on the Codeforces website",
          "Used the JavaScript Fetch API and the Codeforces API to fetch data in real time, ensuring 100% up to date data",
          "Resulted in over 15 budding competitive programmers improving their rating by over 400 points",
          "Used React JS",
        ]}
      />
      <ProjectComponent
        title="Facemask Detection System"
        project_url="https://github.com/Gaurav3478/Facemask-Detection-System"
        points={[
          "Developed a acemask detection system to detect whether people in an image are wearing a facemask or not by training the model on over 1000 labeled images",
          "Used TensorFlow, Keras, Open CV, NumPy, and the MobileNetV2 architecture to achieve an accuracy of 99.73%",
        ]}
      />
    </div>
  );
};

export default Projects;
