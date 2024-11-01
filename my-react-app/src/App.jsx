import { useEffect, useState } from "react";
import "./App.css";
import Die from "./component/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function App() {
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  function allNewDice() {
    const newdice = [];

    for (let i = 0; i < 10; i++) {
      // Generate a random number between 1 and 6 (inclusive)
      newdice.push(generateNewDie());
    }

    return newdice;
  }
  function refroll() {
    if (!tenz) {
      setdie((olddie) =>
        olddie.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      settenz(false);
      setdie(allNewDice);
    }
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

  const [tenz, settenz] = useState(false);

  useEffect(() => {
    const allHeld = die.every((die) => die.isHeld);
    const firstval = die[0].value;
    const allcompare = die.every((die) => die.value === firstval);
    if (allHeld && allcompare) {
      settenz(true);
      console.log("you won");
    }
  });

  return (
    <main>
      {tenz && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceelemnt}</div>

      <button className="roll-dice" onClick={refroll}>
        {tenz ? "New Dice" : "Roll"}
      </button>
    </main>
  );
}
