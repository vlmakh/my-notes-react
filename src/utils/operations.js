import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://my-notes-nodejs.up.railway.app/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const errorMsg = "Something's wrong. Please update page and try again";

export const signup = async credentials => {
  try {
    const response = await axios.post(`/users/signup`, credentials);

    toast.success(`${response.data.email} was registered. You can login now`);

    return response.data;
  } catch (error) {
    toast.error('Probably such email was alredy registered');
  }
};

export const login = async credentials => {
  try {
    const response = await axios.post(`/users/login`, credentials);
    token.set(response.data.token);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error('There is mistake in login or password, please try again');
  }
};

export const checkCurrentUser = async savedToken => {
  if (savedToken === null) {
    return;
  }

  token.set(savedToken);

  try {
    const response = await axios.get(`/users/current`);
    return response.data;
  } catch (error) {
    // toast.error('Please try to login again');
  }
};

export const logout = async () => {
  try {
    await axios.get(`/users/logout`);
    token.unset();
  } catch (error) {
    toast.error(error);
  }
};

export const getNotes = async () => {
  try {
    const response = await axios.get(`/notes`);
    return response.data;
  } catch (error) {
    // toast.error("Something's wrong. Please try to login again");
  }
};

export const addNote = async newNote => {
  try {
    const response = await axios.post(`/notes`, newNote);
    toast.success(`${newNote.name} was added`);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const deleteNote = async note => {
  const { _id, name } = note;
  try {
    const response = await axios.delete(`/notes/${_id}`);
    toast.success(`${name} was deleted`);
    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const updateNoteName = async (noteId, newName) => {
  try {
    const response = await axios.put(`/notes/${noteId}/name`, {
      name: newName,
    });
    toast.success(`'${newName}' was updated`);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const updateNoteColor = async (noteId, newColor) => {
  try {
    const response = await axios.put(`/notes/${noteId}/color`, {
      color: newColor,
    });
    toast.success(`Note color was updated`);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const updateNoteTodos = async (noteId, newTodos) => {
  try {
    const response = await axios.put(`/notes/${noteId}/todos`, {
      todos: newTodos,
    });
    // toast.success(`${noteId} todos were updated`);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const updateNoteOrder = async idx => {};
