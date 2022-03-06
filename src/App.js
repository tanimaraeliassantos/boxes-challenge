import React, { useState } from "react";
import "./App.css";
import boxes from "./Boxes";
import Box from "./Box";

function App(props) {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return <main>{squareElements}</main>;
}

export default App;
