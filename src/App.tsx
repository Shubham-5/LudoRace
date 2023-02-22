import { useState } from "react";
import "./App.css";
import Player from "./components/Player";
import PlayerTurnInfo from "./components/PlayerTurnInfo";
import Race from "./components/Race";

function App() {
  const [p1, setP1] = useState<number>(0);
  const [p2, setP2] = useState<number>(0);
  const [dice, setDice] = useState<number>(0);
  const [turn, setTurn] = useState<boolean>(false);
  let race = new Array(50).fill(0);

  const rollDice = () => {
    let num: number = Math.floor(Math.random() * 6) + 1;
    setDice(num);
    if (turn) {
      setP2((prev) => prev + num);
      setTurn(() => !turn);
    } else {
      setP1((prev) => prev + num);
      setTurn(() => !turn);
    }
  };
  if (p1 >= 50) {
    alert("Player 1 is our Winner");
    setP1(0);
    setP2(0);
  } else if (p2 >= 50) {
    alert("Player 2 is our Winner");
    setP1(0);
    setP2(0);
  }

  return (
    <div className='App'>
      <section className='race-section'>
        <Race race={race} player={p1} />
        <Race race={race} player={p2} />
      </section>
      <PlayerTurnInfo turn={turn} />
      <section className='players-section'>
        <Player score={p1} playerName='Player 1' />
        <div onClick={rollDice}>
          <div className='dice'>{dice}</div>
        </div>
        <Player score={p2} playerName='Player 2' />
      </section>
    </div>
  );
}

export default App;
