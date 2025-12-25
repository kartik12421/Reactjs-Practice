import { useState } from "react";
import { generateNum, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winCondition }) {
  let [ticket, setTicket] = useState(generateNum(n));
  let winning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(generateNum(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>
      <div className="ticket">
        <Ticket ticket={ticket} />
      </div>
      <br />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3>{winning && "Congratulation Player !!!"}</h3>
    </div>
  );
}
