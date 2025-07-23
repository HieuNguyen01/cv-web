import React from 'react';
import './Experience.scss';

export const experience = [
  {
    company: 'TELUS INTERNATIONAL',
    role: {
      title: 'INTERNET SAFETY EVALUATOR',
      type:  'Freelance'
    },
    location:  'Paris, FRANCE',
    timeframe: '5/2021 – 4/2022',
    details: [
      {
        segments: [
          { text: 'Improving', highlight: true },
          { text: ' & ', highlight: false },
          { text: 'evaluating', highlight: true },
          { text: ' online video search results.', highlight: false }
        ]
      },
      {
        segments: [
          { text: 'Reviewing', highlight: true },
          { text: ' & ', highlight: false },
          { text: 'evaluating', highlight: true },
          { text: ' the video contents potentially upsetting/offensive to make internet browsing safer and more secure for all users.', highlight: false }
        ]
      }
    ]
  },
  {
    company: "INSTITUT SUPÉRIEUR D'ÉLECTRONIQUE DE PARIS",
    role: {
      title: 'ENERGY HARVESTING',
      type:  'Research Internship'
    },
    location:  'Paris, FRANCE',
    timeframe: '05/2020 – 10/2020',
    details: [
      {
        segments: [
          { text: 'Overview of the ', highlight: false },
          { text: 'Synchronized Switch Harvesting (SSH)', highlight: true },
          { text: ' architecture, with a focus on the ', highlight: false },
          { text: 'Series-Synchronized Switch Harvesting on Inductor (S-SSHI)', highlight: true },
          { text: ' technique for ', highlight: false },
          { text: 'energy harvesting', highlight: true },
          { text: ' with a ', highlight: false },
          { text: 'piezoelectric', highlight: true },
          { text: ' transducer.', highlight: false }
        ]
      },
      {
        segments: [
          { text: 'Modeling and simulation of its behaviors in ', highlight: false },
          { text: 'MATLAB/Simulink', highlight: true },
          { text: '.', highlight: false }
        ]
      }
    ]
  },
  {
    company: 'PHUOCTAI LLC',
    role: {
      title: 'WEB DEVELOPER',
      type:  'End-of-study Internship'
    },
    location:  'VIETNAM',
    timeframe: '09/2017 - 01/2018',
    details: [
      {
        segments: [
          { text: 'Front-end web development using ', highlight: false },
          { text: 'HTML, CSS, JS, Bootstrap.', highlight: true }
        ]
      },
      {
        segments: [
          { text: 'Back-end web development using ', highlight: false },
          { text: 'Laravel.', highlight: true }
        ]
      }
    ]
  },
  {
    company: 'AXIS RESEARCH VIETNAM LLC',
    role: {
      title: 'MARKETING RESEARCH',
      type:  'Part-time'
    },
    location:  'VIETNAM',
    timeframe: '05/2017 - 07/2017',
    details: [
      {
        segments: [
          { text: "Definition of customer's needs.", highlight: false }
        ]
      },
      {
        segments: [
          { text: 'Participation in the consumer surveys.', highlight: false }
        ]
      }
    ]
  }
];

export default function ExperienceSection() {
  return (
    <div className="experience-section">
      <div className="section-label-right">EXPERIENCE</div>
      <div className="decor-line-section-1">
        <div className="decor-rectangle-sm-1" />
        <div className="decor-line-sm-1" />
      </div>

      <ul className="experience-list">
        {experience.map(item => (
          <li
            className="experience-item"
            key={item.company + item.timeframe}
          >
            {/* Left column */}
            <div className="experience-meta">
              <div className="company">{item.company}</div>
              <div className="location">{item.location}</div>
              <div className="timeframe">{item.timeframe}</div>
            </div>

            {/* Right column */}
            <div className="experience-info">
              <div className="role">
                <span className="role-title">{item.role.title}</span>
                <span className="dash"> - </span>
                <span className="role-type">{item.role.type}</span>
              </div>

              {/* DETAILS: now plain divs, no bullets */}
              <div className="details">
                {item.details.map((d, i) => (
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
