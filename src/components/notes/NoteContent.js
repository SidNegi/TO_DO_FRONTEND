import React from "react";
import "./noteStyle.css";
import { useState } from "react";

export default function NoteContent(props) {
  const [IsChecked, setIsChecked] = useState(false);



  function handleChecked() {
    setIsChecked((prevValue) => {
      return !prevValue;
    });
    props.onCheckNoteContent(props.item);
  }

  return (
    <div className="note flex-container-row">
      <div className="flex-container-row flex-item">
        <input onChange={handleChecked} type="checkbox" className="flex-item" />
      </div>
      <p
        style={{ textDecorationLine: IsChecked ? "line-through" : "none" }}
        className="flex-item"
      >
        {props.item.value}
      </p>
      
    </div>
  );
}
