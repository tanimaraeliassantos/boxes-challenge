import React, { useState } from "react";
import "./App.css";
import boxes from "./Boxes";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  return <main>{squareElements}</main>;
}
