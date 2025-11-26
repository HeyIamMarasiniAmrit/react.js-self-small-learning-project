
import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [diceNumber, setDiceNumber] = useState(6);

  const refreshDice = () => {
    const ranno = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(ranno);
  };

  return (
    <div>
      <center>
        <img
          width={250}
          height={250}
          src={new URL(`./assets/dice_${diceNumber}.png`, import.meta.url).href}
          alt="Dice"
        />
      </center>
      <br />
       <button onClick={refreshDice} className="button">Roll</button>
    </div>
  );
};

export default App;


