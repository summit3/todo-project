import React from "react";

function Note(props) {

  return (props.notes.map((noteItem, index) => {
    return (
    <div className="note" key={index}>
      <h1>{noteItem.title}</h1>
      <p>{noteItem.content}</p>
      <button onClick={() => {
        props.deleteItem(index)
      }} id={index}>
        Delete
      </button>
    </div>
    )
}))
}

export default Note;