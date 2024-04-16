import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { NotesContext } from "../utils/notes";

function NoteForm() {
  const { addNote } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      addNote({
        id: uuidv4(),
        title: title.trim(),
        body: body.trim(),
        archived: false,
        createdAt: new Date().toISOString(),
      });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Body:
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </label>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
