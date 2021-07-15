import React,{useContext} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,SafeAreaView,ScrollView,ImageBackground} from 'react-native';
import {Context } from './TodoContext';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShowScreen= ({navigation}) =>{

    const image = { uri: "https://todoist.com/_next/static/images/peace@2x_158f4453627629ae1dd3ec115a559630.webp" };

    const {state} =useContext(Context);
  // console.log(navigation.getParam('id'));
const task =state.find(task => task.id === navigation.getParam('id'));
  return (
   <SafeAreaView style={styles.container}>
                 <ScrollView style={styles.scrollView}>
                 <View style={styles.container}>
                                             <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Task <Text style={styles.text2}>{"\n"}{task.title}</Text></Text>
        <Text style={[styles.text]}>Priority <Text style={styles.text2}>{"\n"} {task.content}</Text></Text>
        <Text style={styles.text}>Started on <Text style={styles.text2}>{"\n"} {task.startDate}</Text></Text>
        <Text style={styles.text}>Due<Text style={styles.text2}> {"\n"} {task.dueDate}</Text></Text>

      </ImageBackground>
                           </View>
     </ScrollView>
                                            </SafeAreaView>

);
};
ShowScreen.navigationOptions = ({navigation}) => {
    return {
        
      headerRight:() => <TouchableOpacity onPress={()=> navigation.navigate('Edit',{id: navigation.getParam('id')})}>
         <Icon name="edit" size={30} color="white"/>
      </TouchableOpacity> 

    };
};
const styles = StyleSheet.create({
  container: {

    backgroundColor:'black',
  },
  text: {
            color: "powderblue",
            fontSize: 35,
            lineHeight: 84,
            fontWeight: "bold",
            textAlign: "center",
            //fontFamily: "Cochin"
          },
          image: {
                  flex: 1,
                  justifyContent: "center",
                  },
          text2: {
                      color: "lawngreen",
                      fontSize: 35,
                      lineHeight: 84,
                      fontWeight: "normal",
                      textAlign: "center",
                      fontStyle: 'italic',
                      //fontFamily: "Cochin"
                    },
           scrollView: {
                    backgroundColor: 'white',

                  }
});
export default ShowScreen;