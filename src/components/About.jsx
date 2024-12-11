import React from "react";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile2.jpg";
import image from "../assets/img-fluid2.jpg";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          I’m Marah Natsheh, a Computer Science student specializing in Software Engineering at An-Najah University, Palestine. 
          With expertise in frontend development and product management, I am proficient in technologies like React, JavaScript, HTML, CSS, Python, and MySQL. 
          I have hands-on experience working on collaborative projects, mobile apps, and responsive web designs. Skilled in collaborating with cross-functional teams and applying agile methodologies. My passion lies in creating efficient and user-centric solutions, 
          blending my technical knowledge with creativity and a keen eye for design.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src={image}
              className="img-fluid"
              alt="Profile"
            />
          </div>
          <div className="col-lg-8 content">
            <h2>Frontend Developer &amp; Product Manager</h2>
            <p className="fst-italic py-3">
              Combining technical skills with agile methodologies, I aim to deliver impactful solutions in software development and product management.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}<strong>Birthday:</strong> <span>11 October 2003</span>
                  </li>
                  <li><i className="bi bi-chevron-right"></i>{" "} <strong>Phone:</strong> <span>+972 546 860 336</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong> <span>Jerusalem, Palestine</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Email:</strong> <span>marah.z.natsheh@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Education:</strong>{" "}
                    <span>Computer Science Apprenticeship - Software Engineering</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Languages:</strong>{" "}
                    <span>English - Hebrew - French</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Throughout my academic and professional journey, I have contributed to impactful projects such as a collaborative Python interpreter, a mobile driving course app, 
              and a bridal dress rental website. My experience as a Product Manager at Harri further honed my skills in cross-functional collaboration, project management, and strategic research. 
              I strive to apply my knowledge and skills in innovative and collaborative environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
