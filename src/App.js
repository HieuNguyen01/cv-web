import React from 'react';
import ProfileImage from './components/ProfileImg';
import Profile from './components/Profile';
import Languages from './components/Languages';
import Software from './components/Software';
import Hobbies from './components/Hobbies';
import NameTitle from './components/NameTitle';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <><div className="cv-wrapper">
        <div className="cv-two-col">

          {/* LEFT COL */}
          <div className="left-col">
            <ProfileImage />
            <div className="profile-section"><Profile /></div>
            <Languages />
            <div className="software-section"><Software /></div>
            <div className="hobbies-section"><Hobbies /></div>
          </div>

          {/* RIGHT COL */}
          <div className="right-col">
            <div className="name-title-section"><NameTitle /></div>
            <div className="education-section"><Education /></div>
            <div className="experience-section"><Experience /></div>
            <Skills />
            <div className="projects-section"><Projects /></div>
          </div>
        </div>
      </div>
      <div className="footer" /></>
  );
}


export default App;
