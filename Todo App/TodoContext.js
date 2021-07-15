import createDataContext from './createDataContext';

import jsonServer from './jsonServer';



const taskReducer = (state, action) => {

  switch (action.type) {

    case 'get_todolist':

      return action.payload;

    case 'edit_Task':

      return state.map(task => {

        return task.id === action.payload.id ? action.payload : task;

      });

    case 'delete_Task':

      return state.filter(task => task.id !== action.payload);

    default:

      return state;

  }

};



const gettodolist = dispatch => {

  return async () => {

    const response = await jsonServer.get('/todolist');



    dispatch({ type: 'get_todolist', payload: response.data });

  };

};



const addTask = dispatch => {

  return async (title, content, startDate, dueDate, callback) => {

    await jsonServer.post('/todolist', { title, content, startDate, dueDate });



    if (callback) {

      callback();

    }

  };

};



const deleteTask = dispatch => {

  return async id => {

    await jsonServer.delete(`/todolist/${id}`);



    dispatch({ type: 'delete_Task', payload: id });

  };

};



const editTask = dispatch => {

  return async (id, title, content, startDate, dueDate, callback) => {

    await jsonServer.put(`/todolist/${id}`, { title, content, startDate, dueDate });



    dispatch({

      type: 'edit_Task',

      payload: { id, title, content,startDate, dueDate }

    });

    if (callback) {

      callback();

    }

  };

};



export const { Context, Provider } = createDataContext(

  taskReducer,

  { addTask, deleteTask, editTask, gettodolist },

  []

);