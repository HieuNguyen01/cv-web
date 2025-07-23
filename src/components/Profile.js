import React from 'react';
import './Profile.scss';

export default function Profile() {
  return (
    <div className="profile-section">
      {/* 1) Label */}
      <div className="section-label">PROFILE</div>

      {/* 2) Tiny bar + line */}
      <div className="decor-line-section">
        <div className="decor-rectangle-sm" />
        <div className="decor-line-sm" />
      </div>

      {/* 3) Intro text */}
      <p className="intro">
        Recently obtained a Master's Degree in Embedded Systems, I am looking for a first
        job in the field of IT / Electronics
      </p>
      <p className="intro">
        Autonomous, diligent and versatile, I will 
        put in place all the means necessary to accomplish the missions entrusted to me
      </p>

      {/* 4) Divider */}
      <div className="decor-line-sm" />

      {/* 5) Contact info */}
      <ul className="contact-list">
  <li>
    <span className="contact-label">Mobile</span>
    <span className="contact-detail">+84 772 619 517</span>
  </li>
  <li>
    <span className="contact-label">Address</span>
    <span className="contact-detail">45, 30th street, Go Vap district, HCM city</span>
  </li>
  <li>
    <span className="contact-label">Email</span>
    <span className="contact-detail">hieunguyen5960@gmail.com</span>
  </li>
</ul>


    </div>
  );
}
