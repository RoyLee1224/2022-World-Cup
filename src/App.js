import './App.css';
import TournamentMap from './Tournament/Tournament';

function App() {
  return (
    <div className="App">
      <div className="title">
          <img className='titleImg' src="https://i.pinimg.com/originals/ec/82/a5/ec82a51e2d701406118f5d010b7fa0ab.png" alt="" />
      </div>
      <header className="App-header">
        <TournamentMap/>
      </header>
    </div>
  );
}

export default App;
