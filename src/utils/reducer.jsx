import { nanoid } from 'nanoid';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const reducer = (mynotes, action) => {
  switch (action.type) {
    case 'addNote':
      const newNote = {
        noteid: nanoid(4),
        name: 'New note',
        todos: [],
        color: getRandomHexColor(),
      };
      return [...mynotes, newNote];
    case 'editNote':
      return mynotes.map(noteItem => {
        return noteItem.noteid === action.noteId
          ? { ...noteItem, todos: action.newTodos }
          : noteItem;
      });
    case 'deleteNote':
      if (global.confirm(`Delete note: ${action.name}?`)) {
        return mynotes.filter(note => note.noteid !== action.noteId);
      }
      break;
    case 'editNoteName':
      return mynotes.map(noteItem => {
        return noteItem.noteid === action.noteId
          ? { ...noteItem, name: action.newName }
          : noteItem;
      });
    default:
      return mynotes;
  }
};