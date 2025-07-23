// src/components/LanguagesSection.js
import React from 'react';
import './LangSoft.scss';

const languages = [
  { name: 'Vietnamese', level: 1.0, familiarity: 'Native language' },
  { name: 'English',     level: 0.8, familiarity: 'TOEIC 795/990' },
  { name: 'French',      level: 0.6, familiarity: 'TCF-TP 330' },
];

export default function Languages() {
  return (
    <div className="languages-section">
      <div className="section-label">LANGUAGES</div>
      <div className="decor-line-section">
        <div className="decor-rectangle-sm" />
        <div className="decor-line-sm" />
      </div>

      <ul className="language-list">
        {languages.map(({ name, level, familiarity }) => (
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

            {/* Line 2: familiarity/detail */}
            <div className="language-detail">{familiarity}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
