

import './App.css';
import { ScoreBoard } from './Components/buttons';
import { Comp1 } from './Components/comp1';


function App() {
  const myArray = ["first", "second", "third"]
  return (
    <div className="App">
      <ScoreBoard />
      <Comp1 />
      {myArray.map(element=>
        <Comp1 name={element} />
      )}
    </div>
  );
}

export default App;
