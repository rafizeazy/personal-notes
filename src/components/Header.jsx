import React from "react";
import NotesSearch from "./Search";

function Header({ searchNote }) {
  return (
    <div className="note-app__header">
      <h1>Notes App</h1>
      <NotesSearch searchNote={searchNote} />
    </div>
  );
}

export default Header;
