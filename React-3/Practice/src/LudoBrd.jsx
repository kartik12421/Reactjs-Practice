import { useState } from "react";

export default function LudoBrd() {

  let [move, setMove] = useState({ red: 0, blue: 0, green: 0, yellow: 0 });
  let [arr, setArr] = useState(["no move - "]);

  function Update(color) {
    setMove((preMove) => {
      return { ...preMove, [color]: preMove[color] + 1 };
    });

    setArr((preArr) => {
      return [...preArr,  "move moved - "]
    });
  };

  return (
    <>
      <h1>Let's Do It</h1>
      <p>{arr}</p>
      <div className="board">
        <p>Red score = {move.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={() => {Update("red")}}>
          +1
        </button>
        <p>Blue score = {move.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={() => {Update("blue")}}>
          +1
        </button>
        <p>Green score = {move.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={() => {Update("green")}}>
          +1
        </button>
        <p>Yellow score = {move.yellow}</p>
        <button style={{ backgroundColor: "yellow", color: "black" }} onClick={() => {Update("yellow")}}>
          +1
        </button>
      </div>
    </>
  );
}
