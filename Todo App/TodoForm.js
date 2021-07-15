import React,{useContext, useState, useEffect} from 'react';
import{View,Text,StyleSheet,TextInput,Button,SafeAreaView,ScrollView,TouchableOpacity,ImageBackground} from 'react-native';
import DatePicker from 'react-native-date-picker'
import { Input } from 'react-native-elements';

const TodoForm = ({onSubmit,initialValues}) => {
    const [title,setTitle] = useState(initialValues.title);
    const [content, setContent]= useState(initialValues.content); 
    const [dueDate, setdueDate]= useState(new Date());
    const [startDate, setstartDate] = useState(initialValues.startDate);
    const image = { uri: "https://previews.123rf.com/images/osaba/osaba1705/osaba170500026/78604345-top-view-business-office-desk-background-the-applying-for-a-job-form-and-pen-pencil-eyeglasses-tree-.jpg" };

   useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setstartDate(
          year + '-' + month + '-' + date
          + ' ' + hours + ':' + min + ':' + sec
        );
      }, []);

    return (
         <SafeAreaView style={styles.container}>
                      <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

            <Text style={styles.label}>Task</Text>

            <Input
                         style={styles.input}
                         placeholder='Enter Text'
                         value ={title}
                                       onChangeText={text =>setTitle(text)}
                        />

                <Text style={styles.label}>Priority of Task</Text>
                <Input
                              style={styles.input}
                              placeholder='Enter Text'
                              value ={content}
                                          onChangeText={text => setContent(text)}/>


             <Text style={styles.label}>Due Date of the Task</Text>

            <DatePicker
                  date={dueDate}
                  mode='datetime'
                  onDateChange={setdueDate}
                  androidVariant="nativeAndroid"
                 // minimumDate={new Date( startDate )}
                />
                 <Text>{"\n"}{"\n"}</Text>

            <TouchableOpacity  style={styles.button} onPress={()=> onSubmit(title,content,startDate,dueDate.getFullYear()+"-"+(dueDate.getMonth()+1)+"-"+dueDate.getDate()+" "+dueDate.getHours()+":"+dueDate.getMinutes()+":"+dueDate.getSeconds())}>
                                                                          <Text style={styles.text1}>Add Task</Text>
                                                                       </TouchableOpacity>
        </ImageBackground>
                      </View>
       </ScrollView>
                                               </SafeAreaView>
    );
};
TodoForm.defaultProps ={
initialValues :{
    title:' ' ,
    content:'',
    startDate:'',
    //dueDate:' ',
}
};
const styles =StyleSheet.create ({
container:{
flex:1,
backgroundColor:'white'
},
scrollView: {
          backgroundColor: 'white',
          //marginHorizontal: 20,
          //marginTop:20
        },
        button: {
                    alignItems: "center",
                    backgroundColor: "red",
                    padding: 10,
                    margin:50
                  },
        text1: {
                      color: "white",
                      fontSize: 26,
                      lineHeight: 34,
                      fontWeight: "bold",
                      textAlign: "center",
                      //fontFamily: "Cochin"
                    },
    input:{
        fontSize:25,
        marginHorizontal: 20,
        color:'indianred'
    },
    image: {
        flex: 1,
        justifyContent: "center",

      },
    label:{
        color: "black",
                fontSize: 35,
                lineHeight: 84,
                fontWeight: "bold",
                textAlign: "center",
    }
});
export default TodoForm;