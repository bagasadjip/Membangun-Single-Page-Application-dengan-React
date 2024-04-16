import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import notes from "../data/notes";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notesState, setNotesState] = useState(notes);

  const addNote = (note) => {
    setNotesState([...notesState, note]);
  };

  const deleteNote = (id) => {
    setNotesState(notesState.filter((note) => note.id !== id));
  };

  const archiveNote = (id) => {
    setNotesState(
      notesState.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      )
    );
  };

  const unarchiveNote = (id) => {
    setNotesState(
      notesState.map((note) =>
        note.id === id ? { ...note, archived: false } : note
      )
    );
  };

  return (
    <NotesContext.Provider
      value={{
        notes: notesState,
        addNote,
        deleteNote,
        archiveNote,
        unarchiveNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
