import React, { useContext } from 'react';

import { StyleSheet } from 'react-native';

import { Context } from './TodoContext';

import TodoForm from './TodoForm';



const EditScreen = ({ navigation }) => {

  const id = navigation.getParam('id');

  const { state, editTask } = useContext(Context);



  const task = state.find(task => task.id === id);



  return (

    <TodoForm

      initialValues={{ title: task.title, content: task.content, startDate: task.startDate, dueDate:task.dueDate }}

      onSubmit={(title, content, startDate, dueDate) => {

        editTask(id, title, content, startDate, dueDate, () => navigation.pop());

      }}

    />

  );

};



const styles = StyleSheet.create({});



export default EditScreen;