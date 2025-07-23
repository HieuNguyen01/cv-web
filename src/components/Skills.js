import React from 'react';
import './Skills.scss';

export default function SkillsSection() {
  return (
    <div className="skills-section">
      <div className="section-label-right">SKILLS</div>
      <div className="decor-line-section-1">
        <div className="decor-rectangle-sm-1" />
        <div className="decor-line-sm-1" />
      </div>

      <div className="skills-list">
        {/* AUTOMATIC */}
        <div className="skill-item">
          <div className="skill-title">AUTOMATIC</div>
          <div className="skill-detail">
            MATLAB, Simulink, PID control, state-space control.
          </div>
        </div>

        {/* IT */}
        <div className="skill-item">
          <div className="skill-title">IT</div>
          <div className="skill-detail">
            Software development (V cycle), System Analysis (UML).<br />
            Real-time programming (semaphores, multi-tasks in FreeRTOS).<br />
            Programming in C, C#, PHP.
          </div>
        </div>

        {/* ELECTRONIC */}
        <div className="skill-item">
          <div className="skill-title">ELECTRONIC</div>
          <div className="skill-detail">
            Electronic objects, Analog electronic, Numeric electronic, VHDL, Computer architecture.
          </div>
        </div>
      </div>
    </div>
  );
}