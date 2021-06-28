import React,{useContext} from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import {Context } from './BlogContext';
import Icon from 'react-native-vector-icons/FontAwesome';
const ShowScreen= ({navigation}) =>{
    const {state} =useContext(Context);
  // console.log(navigation.getParam('id'));
const blogPost =state.find(blogPost => blogPost.id === navigation.getParam('id'));
  return (
    <View>
        <Text style={styles.bigBlue}>{blogPost.title}</Text>
        <Text style={[styles.bigBlue, styles.red]}>{blogPost.content}</Text>
    </View>
);
};
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        
      headerRight:() => <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id: navigation.getParam('id')})}>
         <Icon name="edit" size={30} />
      </TouchableOpacity> 

    };
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
export default ShowScreen;