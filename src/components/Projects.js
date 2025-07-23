import React from 'react';
import './Projects.scss';

export const projects = [
  {
    name: 'ENERGY HARVESTING',
    details: [
      {
        segments: [
          { text: 'Autonomous harvesting energy circuit for IoT objects - ', highlight: false },
          { text: 'MATLAB, Simulink.', highlight: true }
        ]
      }
    ]
  },
  {
    name: 'SYSTEM CONSTRAINTS & IMPLEMENTATION',
    details: [
      {
        segments: [
          { text: 'Design an autopilot system on a cross-robotics platform ', highlight: false },
          { text: 'ROBOTC', highlight: true },
          { text: ' using ', highlight: false },
          { text: 'LEGO MINDSTORM EV3', highlight: true },
          { text: ' kits - ', highlight: false },
          { text: 'C, PID, sensors.', highlight: true }
        ]
      }
    ]
  },
  {
    name: 'E-COMMERCE WEBSITE',
    details: [
      {
        segments: [
          { text: 'Design an ', highlight: false },
          { text: 'E-commerce website', highlight: true },
          { text: ' of a cosmetic shop using the frameworks ', highlight: false },
          { text: 'Bootstrap', highlight: true },
          { text: ' & ', highlight: false },
          { text: 'Laravel', highlight: true },
          { text: ' - ', highlight: false },
          { text: 'Bootstrap, Laravel.', highlight: true }
        ]
      }
    ]
  }
];

export default function ProjectsSection() {
  return (
    <div className="projects-section">
      <div className="section-label-right">PROJECTS</div>
      <div className="decor-line-section-1">
        <div className="decor-rectangle-sm-1" />
        <div className="decor-line-sm-1" />
      </div>

      <ul className="projects-list">
        {projects.map((p, idx) => (
          <li className="project-item" key={idx}>
            {/* Left: project name only */}
            <div className="project-meta">
              <div className="project-name">{p.name}</div>
            </div>

            {/* Right: highlighted details */}
            <div className="project-details">
              {p.details.map((d, i) => (
                <div className="detail" key={i}>
                  {d.segments.map((seg, j) => (
                    <span
                      key={j}
                      className={seg.highlight ? 'highlight' : ''}
                    >
                      {seg.text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}