import { SlCalender } from "react-icons/sl";
import "./Experience.css";
import { useState, useEffect } from "react";

const Experience = ({ state }) => {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const { contract } = state;

    const educationDetails = async () => {
      const educations = await contract.methods.allEducations().call();
      setEducation(educations);
    };

    const experienceDetails = async () => {
      const experiences = await contract.methods.allExperience().call();
      console.log(experiences);
      setExperience(experiences);
    };
    contract && educationDetails() && experienceDetails();
  }, [state]);

  return (
    <section className="exp-section">
      <h1 className="title">Experience & Education </h1>

      <div className="container">
        <div className="education">
          <h1 className="edu-tittle">Education</h1>
          {education.map((edu) => {
            return (
              <div className="edu-card">
                <p className="card-text1">
                  <SlCalender className="icon" /> {edu.date}
                </p>
                <h3 className="card-text2">{edu.degree}</h3>
                <p className="card-text3">{edu.grade}</p>
                <p className="card-text4">{edu.instutionName}</p>
              </div>
            );
          })}
        </div>
        {/* experience */}
        <div className="education">
          <h1 className="edu-tittle">Experience</h1>
          {experience.map((exp) => {
            return (
              <div className="edu-card">
                <p className="card-text1">
                  <SlCalender className="icon" />
                  {exp.date}
                </p>
                <h3 className="card-text2">{exp.name}</h3>
                <p className="card-text3">{exp.description}</p>
                <p className="card-text4">{exp.companyName}</p>
              </div>
            );
          })}
          {/* 
        <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> March 2013 - Present
            </p>
            <h3 className="card-text2">Blockchain Developer Intern</h3>
            <p className="card-text3">
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className="card-text4">Code Eater</p>
          </div>
          
          <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> March 2013 - Present
            </p>
            <h3 className="card-text2">Blockchain Developer Intern</h3>
            <p className="card-text3">
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className="card-text4">Code Eater</p>
          </div>
         
          <div className="edu-card">
            <p className="card-text1">
              <SlCalender className="icon" /> March 2013 - Present
            </p>
            <h3 className="card-text2">Blockchain Developer Intern</h3>
            <p className="card-text3">
              learned this this and that.learned this this and that.learned this
              this and that.learned this this and that.
            </p>
            <p className="card-text4">Code Eater</p>
          </div>
        */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
