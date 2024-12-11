import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>My Journey</h2>
        <p>
          A dedicated Computer Science student with a passion for software engineering, 
          combining academic excellence with practical project experience and a strong 
          commitment to continuous learning and technological innovation.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Computer Science Apprenticeship</h4>
              <h5>2021 - Present</h5>
              <p>
                <em>Software Engineering Track, An-Najah University, Nablus, Palestine</em>
              </p>
              <p>
                Pursuing a comprehensive computer science education with a focus on 
                software engineering, developing strong technical skills and practical 
                project experience.
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Product Manager Intern</h4>
              <h5>July 2024 - August 2024</h5>
              <p>
                <em>Harri, Ramallah, Palestine</em>
              </p>
              <ul>
                <li>
                  Gained hands-on experience in project management and agile methodologies
                </li>
                <li>
                  Collaborated with cross-functional teams to shape product strategy and planning
                </li>
                <li>
                  Participated in stakeholder meetings and supported decision-making processes
                </li>
                <li>
                  Managed onboarding service system, creating essential forms and documents
                </li>
                <li>
                  Conducted extensive research to support product development and strategic efforts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;