import './App.css';
import { ScoreBoard } from './Components/Board';
import { Head } from './Components/Head';



function App() {
  
  return (
    <div className="App">
      <Head name="Score Board" />
      <ScoreBoard title="Denver Nuggets Score" />
      <ScoreBoard title="Boston Seltics Score" />
    </div>
  );
}

export default App;
