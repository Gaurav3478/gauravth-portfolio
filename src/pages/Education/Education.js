import React from 'react';
import EducationExperience from '../../components/EducationExperience/EducationExperience';

const Education = () => {
  return (
      <div >
        <EducationExperience title = 'Delhi Technological University - B.Tech: Computer Science and Engineering' description = '4 year engineering course. Studied Machine Learning, Artifical Intelligence, Operating Systems, Databases, Computer Networks' grade = '9.33/10' fromYear = '2020' toYear= '2024'/>
        <EducationExperience title = 'American International School, Abuja - 11th & 12th' description = 'American Pattern. Award for Academic Excellence. APs in Maths, Physics, Chemistry, Computer Science, Economics.' grade = '99%' fromYear = '2019' toYear= '2020'/>
        <EducationExperience title = 'Le Bocage Internatinoal School, Mauritius - 9th & 10th' description = 'IGCSE. Advanced Maths, Physics, Chemistry, ITGS.' grade = 'Distinction' fromYear = '2017' toYear= '2018'/>
      </div>
  );
};

export default Education;
