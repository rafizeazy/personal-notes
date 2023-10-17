import React from "react";
import ActiveButton from "./ActiveButton";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import NotesItemContent from "./Content";
import { showFormattedDate } from "../utils/index";

function NotesItem({ id, title, createdAt, body, archived, onDelete, onArchive, onActive }) {
  return (
    <div className="note-item">

      <NotesItemContent title={title} date={showFormattedDate(createdAt)} body={body} />

      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        {
          archived ?
            <ActiveButton id={id} onActive={onActive} />
            :
            <ArchiveButton id={id} onArchive={onArchive} />
        }
      </div>
    </div>
  );
}

export default NotesItem;
