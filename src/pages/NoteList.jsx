import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NotesContext } from "../utils/notes";
import NotePreview from "../components/NotePreview";
import NoteForm from "../components/NoteForm";
import notes from "../data/notes";

function NoteList() {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      <h1>Notes Pro Max</h1>
      <NoteForm />
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id} className="note-card">
              <Link to={`/notes/${note.id}`}>
                <NotePreview note={note} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};

export default NoteList;
