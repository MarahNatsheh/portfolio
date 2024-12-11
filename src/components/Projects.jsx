import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="resume section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Projects</h2>
        <p>
          A comprehensive showcase of academic and personal projects demonstrating 
          technical skills, innovative solutions, and practical software development expertise.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Mobile Development</h3>
            <div className="resume-item">
              <h4>License Mobile App</h4>
              <h5>February 2024 - June 2024</h5>
              <p>
                <em>An-Najah University, Nablus</em>
              </p>
              <ul>
                <li>Developed a mobile app using Dart and Flutter for driving course assistance</li>
                <li>Utilized MongoDB for database and Firebase for backend services</li>
                <li>Created user-friendly interface using Figma for design</li>
                <li>Collaborated on frontend and backend development</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Backend Development</h3>
            <div className="resume-item">
              <h4>Data Export Backend Feature</h4>
              <h5>2023 - 2024</h5>
              <p>
                <em>An-Najah University, Nablus</em>
              </p>
              <ul>
                <li>Developed a new backend feature in Java using Object-Oriented Programming principles</li>
                <li>Implemented data aggregation from multiple services</li>
                <li>Created functionality for exporting data in PDF format</li>
                <li>Developed user data upload and deletion capabilities</li>
              </ul>
            </div>
          </div>

          {/* Web Development Projects */}
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Web Development</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="resume-item">
                  <h4>Collaborative Code Editor</h4>
                  <h5>March 2023 - May 2023</h5>
                  <p>
                    <em>An-Najah University, Nablus</em>
                  </p>
                  <ul>
                    <li>Developed an online collaborative Python interpreter website using React</li>
                    <li>Implemented backend with ExpressJs, NodeJs, and Python-script</li>
                    <li>Used MongoDB as the database</li>
                    <li>Developed the collaborator's invitation system</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="resume-item">
                  <h4>Bridal Dress Rental Website</h4>
                  <h5>November 2022 - December 2023</h5>
                  <p>
                    <em>An-Najah University, Nablus</em>
                  </p>
                  <ul>
                    <li>Developed a frontend website for bridal dress rental using React</li>
                    <li>Created an admin control panel for item management</li>
                    <li>Implemented using JavaScript and CSS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
