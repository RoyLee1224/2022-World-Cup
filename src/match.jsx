// import React from 'react'
// import { teamObj } from './data'
// import TeamBox from "./TeamBox/TeamBox"

// export default function match() {
//   let teams = Object.keys(teamObj)

//   const matchReault = (teamA, teamB) =>{
//     const probability = 0.5
//     if(Math.random() < probability) return teamA
//     return teamB 
//   }
  
//   const winners = []
//   const losers = []
  
//   const predict = (teams) =>{
//     if(teams.length === 1) return teams[0]

//     const remaining = []
    
//     for(let i = 0; i < teams.length; i+= 2){
//       const teamA =  teams[i]
//       const teamB =  teams[i + 1]
//       const winner = matchReault(teamA,teamB)
//       console.log(`${teamA} vs ${teamB},the winner is ${winner}`)
//       winners.push(winner)
//       losers.push(teamA === winner ? teamB :teamA)
//       remaining.push(winner)
//     }
//     // console.log(`remaining ${remaining}`)
//     return predict(remaining)
//   }
//   const winner = predict(teams)
//   console.log(winner)
//   console.log(winners)
//   console.log(losers)
  
//   return (
//     <div>
//       <TeamBox prop = {`${teams[0]}`}/>
//       <TeamBox prop = {`${teams[1]}`}/>

//       {/* <TeamBox prop = {`${winner}`}/>
//       <TeamBox prop = {`${winner}`}/>

//       <TeamBox prop = {`${winner}`}/>
//       <TeamBox prop = {`${winner}`}/>

//       <TeamBox prop = {`${winner}`}/>
//       <TeamBox prop = {`${winner}`}/> */}
//       {/* <div className="flagContainer">
//         {teams.map((item,index) => {
//           return (
//             <div className="flag">
//               <img src={`https://cloudinary.fifa.com/api/v3/picture/flags-sq-5/${teams[index].fifa_code}?tx=c_fill,g_auto,q_auto,w_500,h_333`} alt="" />
//               <div className="name">{item.name}</div>
//             </div>
//           )})
//         }
//       </div> */}
//     </div>
//   )
// }
