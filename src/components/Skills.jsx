import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        {
          name: "Python",
          icon: "bi-filetype-py",
          color: "#3776AB",
          proficiency: 65,
          projects: ["Collaborative Code Editor"],
        },
        {
          name: "JavaScript",
          icon: "bi-filetype-js",
          color: "#F7DF1E",
          proficiency: 80,
          projects: ["Bridal Dress Rental Website",],
        },
        {
          name: "C++",
          icon: "bi-cpu",
          color: "#00599C",
          proficiency: 70,
          projects: [],
        },
        {
          name: "Java",
          icon: "bi-journal-code",
          color: "#007396",
          proficiency: 70,
          projects: ["Data Export System", ],
        },
        {
          name: "Dart",
          icon: "bi-code-slash",
          color: "#0175C2",
          proficiency: 70,
          projects: ["License Mobile App"],
        }
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        {
          name: "React",
          icon: "bi-code-square",
          color: "#61DAFB",
          proficiency: 80,
          projects: ["Bridal Dress Rental Website", "Collaborative Code Editor"],
        },
        {
          name: "HTML",
          icon: "bi-code-slash",
          color: "#E34F26",
          proficiency: 90,
          projects: ["surfire web", "Bridal Dress Rental Website"],
        },
        {
          name: "CSS",
          icon: "bi-braces",
          color: "#7952B3",
          proficiency: 90,
          projects: [],
        },
        {
          name: "Flutter",
          icon: "bi-phone",
          color: "#02569B",
          proficiency: 70,
          projects: ["License Mobile App"],
        }
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        {
          name: "MySQL",
          icon: "bi-database",
          color: "#4479A1",
          proficiency: 55,
          projects: [],
        },
        {
          name: "MongoDB",
          icon: "bi-database",
          color: "#4479A1",
          proficiency: 65,
          projects: ["Collaborative Code Editor", "license mobile app"],
        }
        ,
        {
          name: "Arduino",
          icon: "bi-motherboard",
          color: "#00979D",
          proficiency: 35,
          projects: [],
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <>
    <section id="skills" className="skills-section container-fluid py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 mb-3 fw-bold">My Skills </h2>
          <p className="lead text-muted">A comprehensive overview of my technical abilities</p>
        </div>

        <div className="skills-grid row g-4">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`col-md-4 mb-4 skill-category-card ${
                activeCategory === categoryIndex ? "active-category" : ""
              }`}
              onClick={() =>
                setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex)
              }
            >
              <div className="card shadow-lg h-100">
                <div className="card-header bg-white border-0 pt-4 pb-0">
                  <h3 className="card-title h4 mb-3">{category.category}</h3>
                </div>
                <div className="card-body">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="d-flex align-items-center">
                          <i
                            className={`${skill.icon} me-3`}
                            style={{ color: skill.color }}
                          ></i>
                          <span className="fw-bold">{skill.name}</span>
                        </div>
                        <span className="text-muted">{skill.proficiency}%</span>
                      </div>
                      <div className="progress">
                      <div className="progress-bar" style={{ width: `${skill.proficiency}%` }}></div>
                      </div>
                      {activeCategory === categoryIndex && skill.projects.length > 0 && (
                        <div className="skill-projects mt-2">
                          <small className="text-muted">Notable Projects:</small>
                          <ul className="list-unstyled">
                            {skill.projects.map((project) => (
                              <li key={project}>
                                <i className="bi bi-check-circle-fill me-2 text-success"></i>
                                {project}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <div id="soft-skills-stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          {[
            {
              icon: "bi bi-people-fill",
              title: "Team Collaboration",
              description: "Effective communication and teamwork",
            },
            {
              icon: "bi bi-clock",
              title: "Time Management",
              description: "Efficient task prioritization",
            },
            {
              icon: "bi bi-award",
              title: "Adaptability",
              description: "Quick learning and flexibility",
            },
          ].map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="stats-item">
                <i className={stat.icon}></i>
                <p>
                  <strong>{stat.title}</strong> <span>{stat.description}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;