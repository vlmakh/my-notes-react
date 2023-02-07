// import { nanoid } from 'nanoid';
// import { getRandomHexColor } from 'utils/getRandomHexColor';

export const reducer = (mynotes, action) => {
  switch (action.type) {
    case 'getNotes':
      return [...action.notes];
    case 'addNote':
      const newNote = {
        ...action.newNote,
        // noteid: nanoid(4),
        // name: 'New note',
        // todos: [],
        // color: getRandomHexColor(),
      };
      return [...mynotes, newNote];
    case 'editNote':
      return mynotes.map(noteItem => {
        return noteItem.noteid === action.noteId
          ? { ...noteItem, todos: action.newTodos }
          : noteItem;
      });
    case 'deleteNote':
      console.log(action);
      return mynotes.filter(note => note._id !== action.noteId);
    case 'editNoteName':
      return mynotes.map(noteItem => {
        return noteItem._id === action.noteId
          ? { ...noteItem, name: action.newName }
          : noteItem;
      });
    case 'editNoteColor':
      return mynotes.map(noteItem => {
        return noteItem.noteid === action.noteId
          ? { ...noteItem, color: action.newColor }
          : noteItem;
      });
    case 'editNoteOrder':
      const isDraggingNote = action.isDraggingNote;
      mynotes = mynotes.filter(note => note.noteid !== isDraggingNote.noteid);
      mynotes.splice(action.idx, 0, isDraggingNote);
      return mynotes;
    default:
      return mynotes;
  }
};
