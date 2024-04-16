import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

function NotePreview({ note }) {
  return (
    <div>
      <h2>{note.title}</h2>
      <p>Created at: {note.createdAt}</p>
      <ReactMarkdown>{note.body}</ReactMarkdown>
    </div>
  );
}

NotePreview.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    archived: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default NotePreview;
