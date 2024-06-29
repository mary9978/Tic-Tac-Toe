import React, { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/calculateWinner";
import toast from "react-hot-toast";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(""));
  const winner = calculateWinner(square);
  let status;
  const handleReset =()=>{
    setSquare(Array(9).fill(""));
    setXIsNext(true);
    status ="";
  }
  if(winner){
    status = "winner : " + winner;
    toast.success(`${winner} win 🥰`);
    handleReset();
  }
  else{
    status = "Next player : " + (xIsNext ? "X" : "O")
  }
  const handleClick = (index) => {
    if (square[index] !== "" || calculateWinner(square)) return;
    const nextSquare = square.slice();
    xIsNext ? (nextSquare[index] = "X") : (nextSquare[index] = "O");
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      <div className="grid grid-cols-3  rounded-xl grid-rows-3 w-[300px] h-[300px] p-1">
        {square.map((sq, index) => {
          return (
            <Square key={index} value={sq} onClick={() => handleClick(index)} />
          );
        })}
      </div>
      <button className="font-Indie text-white mx-2 mt-2 text-xl cursor-pointer" onClick={handleReset}>Reset Game</button> 
      <div className="mx-2 font-Indie text-white text-2xl">{status}</div>
    </>
  );
}

export default Board;
