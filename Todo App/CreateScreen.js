import React,{useContext, useState, useEffect} from 'react';
import { StyleSheet} from 'react-native';
import {Context } from './TodoContext';
import TodoForm from './TodoForm';
const CreateScreen = ({navigation}) =>{
 
 const {addTask}=useContext(Context);


 return <TodoForm onSubmit={(title,content,startDate,dueDate) => {
     addTask(title,content,startDate, dueDate, ()=>navigation.navigate('Index'));
     
 }}/>

};
const styles= StyleSheet.create ({});
  
export default CreateScreen;