import React from 'react';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import './Match.css';
import { teamObj } from '../data';

export default function Match({ teamA, teamB }) {
  return (
    <div>
      <div className="tournament-bracket__match">
        <div className="tournament-bracket__table">
          <div className="tournament-bracket__content">
            <div className="tournament-bracket__team">
              <div className="tournament-bracket__code" title={teamA}>
                {teamObj[teamA].fifa_code}
              </div>
              <img
                className="tournament-bracket__flag"
                src={`https://cloudinary.fifa.com/api/v3/picture/flags-sq-5/${teamObj[teamA].fifa_code}?tx=c_fill,g_auto,q_auto,w_500,h_333`}
                alt=""
              />
            </div>
            {teamB && (
              <div className="tournament-bracket__team">
                <div className="tournament-bracket__code" title="Kazakhstan">
                  {teamObj[teamB].fifa_code}
                </div>
                <img
                  className="tournament-bracket__flag"
                  src={`https://cloudinary.fifa.com/api/v3/picture/flags-sq-5/${teamObj[teamB].fifa_code}?tx=c_fill,g_auto,q_auto,w_500,h_333`}
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
