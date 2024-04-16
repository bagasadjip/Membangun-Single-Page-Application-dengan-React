import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import { NotesContext } from "../utils/notes";
import { Link } from "react-router-dom";

function NoteDetails() {
  const { notes } = useContext(NotesContext);
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (!note) {
    return <div>Note not found</div>;
  }

  const { deleteNote, archiveNote, unarchiveNote } = useContext(NotesContext);

  return (
    <div className="note-details">
      <h1>{note.title}</h1>
      <p>Created at: {note.createdAt}</p>
      <ReactMarkdown>{note.body}</ReactMarkdown>
      {note.archived ? (
        <button onClick={() => unarchiveNote(note.id)}>Unarchive</button>
      ) : (
        <button
          className="note-action-button"
          onClick={() => archiveNote(note.id)}
        >
          Archive
        </button>
      )}
      <button
        className="note-action-button"
        onClick={() => deleteNote(note.id)}
      >
        Delete
      </button>
      <Link className="back-to-list-button" to="/">
        Back to List
      </Link>
    </div>
  );
}

export default NoteDetails;
