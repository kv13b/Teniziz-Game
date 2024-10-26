import { useState } from "react";
import "./App.css";
import Die from "./component/Die";

export default function App() {
  function allNewDice() {
    const diceRolls = [];

    for (let i = 0; i < 10; i++) {
      // Generate a random number between 1 and 6 (inclusive)
      const roll = Math.floor(Math.random() * 6) + 1;
      diceRolls.push(roll);
    }

    return diceRolls;
  }
  function refroll() {
    setdie(allNewDice());
  }
  const [die, setdie] = useState(allNewDice());

  const diceelemnt = die.map((die) => <Die value={die} />);

  return (
    <main>
      <div className="dice-container">{diceelemnt}</div>
      <button className="roll-dice" onClick={refroll}>
        Roll
      </button>
    </main>
  );
}
