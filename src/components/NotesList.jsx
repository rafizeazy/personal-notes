import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive, onActive }) {
  if (notes.length === 0) {
    return (
      <p className="notes-list__empty-message">There are no notes to show</p>
    );
  }

  return (
    <div className="notes-list">
      {
        notes.map((note) => (
          <NotesItem key={note.id} {...note} onDelete={onDelete} onArchive={onArchive} onActive={onActive} />
        ))
      }
    </div>
  );
}

export default NotesList;
