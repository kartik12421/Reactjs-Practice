import Lottery from "./Lottery";
import Ticket from "./Ticket";
import { sum } from "./helper";
import "./App.css";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
      {/* <TicketNum num={4} />
      <TicketNum num={2} /> */}
    </>
  );
}

export default App;
