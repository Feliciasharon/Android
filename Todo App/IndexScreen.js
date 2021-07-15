import React,{useContext,useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity,SafeAreaView,ScrollView,} from 'react-native';
import {Context} from './TodoContext';
import Icon from 'react-native-vector-icons/FontAwesome';
const IndexScreen =({navigation}) => {
   // console.log(props)
    const {state , deleteTask, gettodolist } =useContext(Context);
    useEffect(()=> {
     gettodolist();

     const listener = navigation.addListener('didFocus', () => {

        gettodolist();

      });
  },[]);
    return(
        <View style={styles.container}>
        <FlatList style={styles.list}
             data ={state}
             keyExtractor={task =>task.title}
             renderItem={({item})=> {
                return(
                    <TouchableOpacity onPress ={() => navigation.navigate('Show', {id:item.id})}>
                     <View style={styles.row}>
                     <Text style={styles.title}>{item.title}{"\n"}<Text style={styles.title2}>{item.dueDate}</Text></Text>
                     <TouchableOpacity onPress ={()=> deleteTask(item.id)}>
                     <Icon name="trash" size={35} color="#900" />
                     </TouchableOpacity>

                     </View>
                     </TouchableOpacity>
                );
            }}
             />
             <Text>{"\n"}{"\n"}</Text>
        </View>
    );
};
IndexScreen.navigationOptions = ({navigation}) => {
    return {

      headerRight:() => <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
         <Icon name="plus" size={30} color="white"/>
      </TouchableOpacity>

    };
};
const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'lavenderblush'
    },

    list:{
    marginHorizontal:20,
    marginTop:20,
    marginBottom:20
    },

    row:{
        flexDirection:'row',
        justifyContent :'space-between',
        paddingVertical:10,
        paddingHorizontal:10,
       // borderTopWidth:1,
        borderBottomWidth:3,
        borderColor: 'red',
        backgroundColor:'lavenderblush'
    },
    title2:{
        marginTop:10,
        color: 'black',
        fontWeight: 'normal',
         fontSize: 25,
         lineHeight: 34,
         fontFamily: 'sans-serif',
         fontStyle: 'italic',
          flexDirection:'column',
    },
    title:{
            marginTop:10,
            color: 'black',
            fontWeight: 'bold',
             fontSize: 25,
             lineHeight: 34,
             flexDirection:'column',
             fontFamily: 'sans-serif',
             //fontStyle: 'italic'
        },
     scrollView: {
              backgroundColor: 'white',
              //marginHorizontal: 20,
            },
});
export default IndexScreen;