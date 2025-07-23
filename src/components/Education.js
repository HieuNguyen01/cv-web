import React from 'react';
import './Education.scss';

const education = [
  {
    institution: "INSTITUT SUPÉRIEUR D'ÉLECTRONIQUE DE PARIS",
    location: 'Paris, FRANCE',
    year: '2018 - 2021',
    program: 'INTERNATIONAL ENGINEERING MASTER DEGREE PROGRAM',
    degree: "Diplôme d'Ingénieur en Systèmes Embarqués",
    modules: [
      'Automatic & Real-time System',
      'System Constraints & Implementation',
      'Connected Vehicles',
      'Reliability & Dependability / RAMS',
      'Network',
      'Management',
      'Digital Electronics',
      'International Innovation Project'
    ]
  },
  {
    institution: 'GIA DINH UNIRERSITY',
    location: 'VIETNAM',
    year: '2014 - 2018',
    program: 'BACHELOR IN SOFTWARE ENGINEERING',
    modules: [
      'Object Oriented Programming',
      'Database',
      'Software Design & Building (UML)',
      'System & Software Security',
      'Information System Analysis & Design',
      'Web Technology',
      'Group Work Skills'
    ]
  },
  {
    institution: 'HO CHI MINH CITY UNIVERSITY OF TRANSPORT',
    location: 'VIETNAM',
    year: '2011 - 2012',
    program: '1<sup>st</sup> YEAR BACHELOR IN POWER GENERATION EQUIPMENT FOR THE NAVAL INDUSTRY'
  }
];

export default function EducationSection() {
  return (
    <div className="education-section">
      <div className="section-label-right">EDUCATION</div>
      <div className="decor-line-section-1">
        <div className="decor-rectangle-sm-1" />
        <div className="decor-line-sm-1" />
      </div>

      <ul className="education-list">
        {education.map(item => (
          <li className="education-item" key={item.institution}>
            {/* Left column: institution / location / year */}
            <div className="education-meta">
              <div className="institution">{item.institution}</div>
              <div className="location">{item.location}</div>
              <div className="year">{item.year}</div>
            </div>

            {/* Right column: program, degree, modules */}
            <div className="education-info">
              <div className="program"dangerouslySetInnerHTML={{ __html: item.program }}/>
              {item.degree && <div className="degree">{item.degree}</div>}
              {item.modules && (
                <div className="modules">
                  {item.modules.join(' | ')}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
