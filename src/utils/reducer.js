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

    case 'sortByNameUp':
      if (!action.notes) {
        return;
      }
      return [...action.notes].sort((a, b) => a.name.localeCompare(b.name));

    case 'sortByNameDown':
      if (!action.notes) {
        return;
      }
      return [...action.notes].sort((a, b) => b.name.localeCompare(a.name));

    case 'sortByCreatedUp':
      if (!action.notes) {
        return;
      }

      return [...action.notes].sort((a, b) =>
        a.createdAt.localeCompare(b.createdAt)
      );

    case 'sortByCreatedDown':
      if (!action.notes) {
        return;
      }
      return [...action.notes].sort((a, b) =>
        b.createdAt.localeCompare(a.createdAt)
      );

    default:
      return mynotes;
  }
};
