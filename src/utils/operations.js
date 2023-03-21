import axios from 'axios';
import toast from 'react-hot-toast';
import { Button } from 'components/Buttons/Buttons';
import { Box } from 'components/Box/Box';

// axios.defaults.baseURL = process.env.REACT_APP_MAIN_URL;
axios.defaults.baseURL = 'http://localhost:3001/';

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

    toast.success(
      t => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <span>
            Please check <b>{response.data.email}</b> to finish registration
          </span>
          <Button onClick={() => toast.dismiss(t.id)}>Close</Button>
        </Box>
      ),
      {
        duration: 8000,
      }
    );

    return response.data;
  } catch (error) {
    toast.error('Probably such email was alredy registered');
  }
};

export const verify = async id => {
  const response = await axios.get(`api/users/verify/${id}`);

  return response;
};

export const verifyRepeat = async credentials => {
  try {
    const response = await axios.post(`api/users/verify/`, credentials);

    toast.success(
      t => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <span>
            Please check <b>{credentials.email}</b> to finish registration
          </span>
          <Button onClick={() => toast.dismiss(t.id)}>Close</Button>
        </Box>
      ),
      {
        duration: 8000,
      }
    );

    return response;
  } catch (error) {
    toast.error(error.response.data.message);
  }
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

export const updateUserName = async ({ name, email }) => {
  try {
    console.log('email:', email, 'name: ', name);
    const response = await axios.post(`api/users/updateName`, { email, name });

    toast.success(() => (
      <span>
        <b>{name}</b> was updated
      </span>
    ));

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const updateUserPass = async (noteId, newName) => {
  try {
    const response = await axios.post(`api/users/updatePass`, {
      name: newName,
    });

    toast.success(() => (
      <span>
        <b>{newName}</b> was updated
      </span>
    ));

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
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

    toast.success(() => (
      <span>
        <b>{newNote.name}</b> was added
      </span>
    ));

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const deleteNote = async note => {
  const { _id, name } = note;
  try {
    const response = await axios.delete(`api/notes/${_id}`);

    toast.success(() => (
      <span>
        <b>{name}</b> was deleted
      </span>
    ));

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

    toast.success(() => (
      <span>
        <b>{newName}</b> was updated
      </span>
    ));

    return response.data;
  } catch (error) {
    toast.error(errorMsg);
  }
};

export const updateNoteColor = async (noteId, newColor, noteName) => {
  try {
    const response = await axios.put(`api/notes/${noteId}/color`, {
      color: newColor,
    });

    toast.success(() => (
      <span>
        <b>{noteName}</b> color was updated
      </span>
    ));

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
