import React from "react";
import "./index.css";

function Buttons({ nextUrl, prevUrl, fetchCharacterData }) {
  return (
    <>
      <div className="buttons">
        <button onClick={() => fetchCharacterData(prevUrl)}>Prev</button>
        <button onClick={() => fetchCharacterData(nextUrl)}>Next</button>
      </div>
    </>
  );
}

export default Buttons;
