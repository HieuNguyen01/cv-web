// src/components/Software.js
import React from 'react';
import './LangSoft.scss';

const software = [
  { name: 'Matlab', level: 1.0 },
  { name: 'Simulink', level: 0.7},
  { name: 'Pack Office', level: 0.6},
  { name: 'VP-UML', level: 0.4},
  { name: 'Quartus II', level: 0.3 }
];

export default function Software() {
  return (
    <div className="languages-section">
      <div className="section-label">SOFTWARE</div>
      <div className="decor-line-section">
        <div className="decor-rectangle-sm" />
        <div className="decor-line-sm" />
      </div>

      <ul className="language-list">
        {software.map(({ name, level}) => (
          <li className="language-item" key={name}>
            {/* Line 1: name + bar */}
            <div className="language-header">
              <span className="language-name">{name}</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${level * 100}%` }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
