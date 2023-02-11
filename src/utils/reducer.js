export const reducer = (mynotes, action) => {
  switch (action.type) {
    case 'getNotes':
      if (!action.notes) {
        return;
      }
      return [...action.notes];

    case 'addNote':
      const newNote = {
        ...action.newNote,
      };
      return [...mynotes, newNote];

    case 'editNoteTodos':
      return mynotes.map(noteItem => {
        return noteItem._id === action.noteId
          ? { ...noteItem, todos: action.newTodos }
          : noteItem;
      });

    case 'deleteNote':
      return mynotes.filter(note => note._id !== action.noteId);

    case 'editNoteName':
      return mynotes.map(noteItem => {
        return noteItem._id === action.noteId
          ? { ...noteItem, name: action.newName }
          : noteItem;
      });

    case 'editNoteColor':
      return mynotes.map(noteItem => {
        return noteItem._id === action.noteId
          ? { ...noteItem, color: action.newColor }
          : noteItem;
      });

    default:
      return mynotes;
  }
};
