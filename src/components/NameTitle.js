import React from 'react';
import './NameTitle.scss';

export default function NameTitleSection() {
  return (
    <div className="name-title-section">
      {/* Top decor line */}
      <div className="decor-line-section-name">
        <div className="decor-line-sm" />
      </div>

      {/* Your Full Name */}
      <div className="name-text">
        <span className="name-first">Ngoc Hieu</span>
        <span className="name-last">Nguyen</span>
      </div>

      {/* Your Job Title */}
      <div className="title-text">Embedded Systems Engineer</div>

      {/* Bottom decor line */}
      <div className="decor-line-section-name bot">
        <div className="decor-line-sm" />
      </div>
    </div>
  );
}
