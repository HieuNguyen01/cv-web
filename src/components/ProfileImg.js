import React from 'react';
import profileImg from '../assets/images/photo.jpg';
import './ProfileImg.scss';

export default function ProfileImage() {
  return (
    <div className="profile-image-section">
      {/* top bleed line now here */}
      <div className="decor-rectangle" />

      <img
        className="profile-image"
        src={profileImg}
        alt="Ngoc Hieu Nguyen"
      />
    </div>
  );
}
