import { useState } from "react";
import "./App.css";
import Die from "./component/Die";
import { nanoid } from "nanoid";

export default function App() {
  function allNewDice() {
    const newdice = [];

    for (let i = 0; i < 10; i++) {
      // Generate a random number between 1 and 6 (inclusive)
      newdice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid,
      });
    }

    return newdice;
  }
  function refroll() {
    setdie(allNewDice());
  }

  const [die, setdie] = useState(allNewDice());

  function holdDice(id) {
    setdie((oldie) =>
      oldie.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
    console.log(id);
  }
  const diceelemnt = die.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <div className="dice-container">{diceelemnt}</div>
      <button className="roll-dice" onClick={refroll}>
        Roll
      </button>
    </main>
  );
}
