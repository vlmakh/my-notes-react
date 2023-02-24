import axios from 'axios';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://my-notes-nodejs.onrender.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const errorMsg = "Something's wrong. Please refresh page and try again";

export const signup = async credentials => {
  try {
    const response = await axios.post(`api/users/signup`, credentials);

    toast.success(`Please check ${response.data.email} to finish registration`);

    return response.data;
  } catch (error) {
    toast.error('Probably such email was alredy registered');
  }
};

export const verify = async id => {
  const response = await axios.get(`api/users/verify/${id}`);

  return response;
};

export const login = async credentials => {
  try {
    const response = await axios.post(`api/users/login`, credentials);

    token.set(response.data.token);

    return response.data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const checkCurrentUser = async savedToken => {
  if (savedToken === null) {
    return;
  }

  token.set(savedToken);

  try {
    const response = await axios.get(`api/users/current`);
    return response.data;
  } catch (error) {}
};

export const logout = async () => {
  try {
    await axios.get(`api/users/logout`);

    token.unset();
  } catch (error) {
    toast.error(error.message);
  }
};

export const getNotes = async () => {
  try {
    const response = await axios.get(`api/notes`);

    return response.data;
  } catch (error) {
    toast.error("Something's wrong. Please login again");
  }
};

export const addNote = async newNote => {
  try {
    const response = await axios.post(`api/notes`, newNote);

    toast.success(`${newNote.name} was added`);

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const deleteNote = async note => {
  const { _id, name } = note;
  try {
    const response = await axios.delete(`api/notes/${_id}`);

    toast.success(`${name} was deleted`);

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const updateNoteName = async (noteId, newName) => {
  try {
    const response = await axios.put(`api/notes/${noteId}/name`, {
      name: newName,
    });

    toast.success(`'${newName}' was updated`);

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const updateNoteColor = async (noteId, newColor) => {
  try {
    const response = await axios.put(`api/notes/${noteId}/color`, {
      color: newColor,
    });

    toast.success(`Note color was updated`);

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const updateNoteTodos = async (noteId, newTodos) => {
  try {
    const response = await axios.put(`api/notes/${noteId}/todos`, {
      todos: newTodos,
    });

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};
