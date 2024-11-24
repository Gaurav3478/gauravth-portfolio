import React from 'react';
import EducationExperience from '../../components/EducationExperience/EducationExperience';

const Education = () => {
  return (
      <div >
        <EducationExperience logo = 'DTU_logo' title = 'Delhi Technological University - B.Tech: Computer Science and Engineering' points = {["4 Year Engineering Course", "Machine Learning, Artificial Intelligence, Operating Systems, Database Management Systems, Computer Networks"]} grade = '9.33/10' fromYear = '2020' toYear= '2024'/>
        <EducationExperience logo = 'AISA_logo' title = 'American International School, Abuja - 11th & 12th' points = {["American Pattern", "Award for Academic Excellence", "APs in Maths, Physics, Chemistry, Computer Science, Economics"]} grade = '98.75%' fromYear = '2019' toYear= '2020'/>
        <EducationExperience logo = 'LBIS_logo' title = 'Le Bocage Internatinoal School, Mauritius - 9th & 10th' points = {["IGCSE", "Distinction", "Advanced Maths, Physics, Chemistry, ITGS"]} grade = '87.5%' fromYear = '2017' toYear= '2018'/>
      </div>
  );
};

export default Education;
