import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-contenido">
        <h2 className="skills-contenido-titulo">Skills</h2>

        <div className="skills-contenido-secciones">
          <div className="front-end">
            <h2>Front-end</h2>
            <ul>
              <li><i className="fa-brands fa-js fa-js"></i></li>
              <li><i className="fa-brands fa-html5 fa-html5"></i></li>
              <li><i className="fa-brands fa-css3-alt fa-css3-alt"></i></li>
            </ul>
          </div>
          <div className="back-end">
            <h2>Back-end</h2>
            <ul>
              <li><i className="fa-brands fa-java fa-java"></i></li>
              <li><i className="fa-brands fa-docker fa-docker"></i></li>
              <li><i className="fa-brands fa-python fa-python"></i></li>
            </ul>
          </div>
          <div className="soft-skills">
            <h2>Soft skills</h2>
            <ul>
              <li><i className="fa-solid fa-people-group"></i></li>
              <li><i className="fa-solid fa-palette"></i></li>
              <li><i className="fa-solid fa-business-time"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
