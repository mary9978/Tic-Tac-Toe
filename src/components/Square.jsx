import React, { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="btn">
      <p
        className={`mb-0  ${value == "X" ? "text-red-500" : "text-green-500"}`}
      >
        {value}
      </p>
    </button>
  );
}

export default Square;
