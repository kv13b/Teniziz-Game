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
  console.log(allNewDice());

  return (
    <main>
      <div className="dice-container">
        <Die value="1" />
        <Die value="2" />
        <Die value="3" />
        <Die value="4" />
        <Die value="5" />
        <Die value="6" />
        <Die value="7" />
        <Die value="8" />
        <Die value="9" />
        <Die value="1" />
      </div>
    </main>
  );
}
