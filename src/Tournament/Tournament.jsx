import React from 'react';
import { teamObj } from '../data';
import './Tournament.css';
import Match from '../Match/Match';

export default function match() {
  let teams = Object.keys(teamObj);

  const matchReault = (teamA, teamB) => {
    const probability = getProbability(teamA, teamB);
    if (Math.random() < probability) return teamA;
    return teamB;
  };

  const getProbability = (teamA, teamB) => {
    const pointA = teamObj[teamA].points;
    const pointB = teamObj[teamB].points;
    let probability = 0.5 + (pointA - pointB) * 0.001;
    return probability;
  };

  const winners = [];
  const losers = [];

  const predict = (teams) => {
    if (teams.length === 1) return teams[0];

    const remaining = [];

    for (let i = 0; i < teams.length; i += 2) {
      const teamA = teams[i];
      const teamB = teams[i + 1];
      const winner = matchReault(teamA, teamB);
      winners.push(winner);
      losers.push(teamA === winner ? teamB : teamA);
      remaining.push(winner);
    }
    return predict(remaining);
  };
  const winner = predict(teams);

  return (
    <div className="container">
      <h1>2022 World Cup Predictor</h1>
      <div className="tournament-bracket tournament-bracket--rounded">
        <div className="tournament-bracket__round tournament-bracket__round--quarterfinals">
          <h1 className="tournament-bracket__round-title">Quarterfinals</h1>
          <ul className="tournament-bracket__list">
            <li className="tournament-bracket__item">
              <Match teamA={`${teams[0]}`} teamB={teams[1]} />
            </li>
            <li className="tournament-bracket__item">
              <Match teamA={`${teams[2]}`} teamB={teams[3]} />
            </li>
            <li className="tournament-bracket__item">
              <Match teamA={`${teams[4]}`} teamB={teams[5]} />
            </li>
            <li className="tournament-bracket__item">
              <Match teamA={`${teams[6]}`} teamB={teams[7]} />
            </li>
          </ul>
        </div>
        <div className="tournament-bracket__round tournament-bracket__round--semifinals">
          <h1 className="tournament-bracket__round-title">Semifinals</h1>
          <ul className="tournament-bracket__list">
            <li className="tournament-bracket__item">
              <Match teamA={`${winners[0]}`} teamB={winners[1]} />
            </li>

            <li className="tournament-bracket__item">
              <Match teamA={`${winners[2]}`} teamB={winners[3]} />
            </li>
          </ul>
        </div>
        <div className="tournament-bracket__round tournament-bracket__round--gold">
          <h1 className="tournament-bracket__round-title">Gold medal game</h1>
          <ul className="tournament-bracket__list">
            <li className="tournament-bracket__item">
              <Match teamA={`${winners[4]}`} teamB={winners[5]} />
            </li>
          </ul>
        </div>
        <div className="tournament-bracket__round champion">
          <h1 className="tournament-bracket__round-title">Champion</h1>
          <ul className="tournament-bracket__list">
            <li className="tournament-bracket__item">
              <Match teamA={`${winner}`} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
