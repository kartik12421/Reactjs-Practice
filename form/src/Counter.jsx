import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let increaseCountx = () => {
    setCountx((c) => c + 1);
  };

  let increaseCounty = () => {
    setCounty((c) => c + 1);
  };

  useEffect(function sideEffect() {
    console.log("hello world");
  }, []);

  return (
    <div>
      <h3>Count = {countx}</h3>
      <br />
      <button onClick={increaseCountx}>Increase</button>

      <br />

      <h3>Count = {county}</h3>
      <br />
      <button onClick={increaseCounty}>Increase</button>
    </div>
  );
}
