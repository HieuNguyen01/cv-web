// src/components/Hobbies.js
import React from 'react';
import './Hobbies.scss';
import { ReactComponent as BallIcon }  from '../assets/icons/ball.svg';
import { ReactComponent as MusicIcon }   from '../assets/icons/music.svg';
import { ReactComponent as CookingIcon }  from '../assets/icons/cook.svg';

const hobbies = [
    { name: 'Cook', icon: CookingIcon },
    { name: 'Ball', icon: BallIcon },
    { name: 'Music',  icon: MusicIcon }
];

export default function HobbiesSection() {
  return (
    <div className="hobbies-section">
      <div className="section-label">HOBBIES</div>
      <div className="decor-line-section">
        <div className="decor-rectangle-sm" />
        <div className="decor-line-sm" />
      </div>

      <div className="hobbies-content">
        {hobbies.map(({ name, icon: Icon }) => (
          <div className="hobby" key={name}>
            {/* if you imported as ReactComponent */}
            <Icon className="hobby-icon" aria-hidden="true" />

            {/* if you imported as URL, instead use: */}
            {/* <img src={icon} alt={name} className="hobby-icon" /> */}

            {/* <div className="hobby-label">{name}</div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
