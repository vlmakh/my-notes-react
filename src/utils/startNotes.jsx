import { nanoid } from 'nanoid';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const startNotes = [
  {
    noteid: nanoid(4),
    name: 'New note',
    todos: [
      { id: nanoid(6), text: 'task1', completed: false },
      { id: nanoid(6), text: 'task2', completed: false },
    ],
    color: getRandomHexColor(),
  },
];