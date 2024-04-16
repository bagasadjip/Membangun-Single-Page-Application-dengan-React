import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NotesContext } from "../utils/notes";
import NotePreview from "../components/NotePreview";

function ArchivedNotes() {
  const { notes, unarchiveNote } = useContext(NotesContext);
  const archivedNotes = notes.filter((note) => note.archived);

  return (
    <div>
      <h1>Archived Notes</h1>
      {archivedNotes.length === 0 ? (
        <p>Archive is empty.</p>
      ) : (
        <ul>
          {archivedNotes.map((note) => (
            <li key={note.id}>
              <NotePreview note={note} />
              <button onClick={() => unarchiveNote(note.id)}>Unarchive</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Back to Notes</Link>
    </div>
  );
}

export default ArchivedNotes;
