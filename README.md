# My Notes

Simple app for private notes. AutoSave of current data is implemented using
localStorage.

Application is written using React hooks.

Attached libraries:

- emotions;
- styled-system;
- react-icons;
- nanoid;
- framer-motion;
- react-colorful;
- react-masonry-css.

Added the ability to add new tasks, to mark tasks as completed, to delete tasks,
to edit tasks (aldo keyboard is available: Ecs = cancel, Enter = confirm).

Added the ability to drag tasks.

Added the ability to create and delete notes.

Added the ability to change note name (keyboard control: Ecs = cancel, Enter =
confirm).

Added the ability to change color of note.

Added masonry layout of notes.

Added the ability to drag notes. By default tasks in each notes are draggable,
but notes are stable. If notes dragging is needed you must check it, in that
case it becomes available to drag notes, but unavailable to drag tasks.
