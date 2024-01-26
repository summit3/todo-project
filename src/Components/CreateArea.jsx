import React, {useState} from "react";

function CreateArea(props) {

  const [text, setText] = useState({
    title:"",
    content:""
  })
  
  function handleChange(event) {

    const {name, value} = event.target

    setText((prevText) => {
      return {
        ...prevText,
        [name]: value
      }
    })
  }

  function addToNotes(event) {
    event.preventDefault();
    props.setNotes((prevNotes) => [
        ...prevNotes,
        {
          title: text.title,
          content: text.content
        }
      ])

      setText({
        title: "",
        content: ""
      })
  }

  return (
    <div>
      <form className="create-note">
        <input onChange={handleChange}  name="title" placeholder="Title" value={text.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={text.content}/>
        <button onClick={addToNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;