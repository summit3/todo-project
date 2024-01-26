import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

  return (props.notes.map((noteItem, index) => {
    return (
    <div className="note" key={index}>
      <h1>{noteItem.title}</h1>
      <p>{noteItem.content}</p>
      <button onClick={() => {
        props.deleteItem(index)
      }} id={index}>
        <DeleteIcon />
      </button>
    </div>
    )
}))
}

export default Note;