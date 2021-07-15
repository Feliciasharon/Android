import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableOpacity, Button,  ImageBackground, Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import Ionicon from 'react-native-vector-icons/Ionicons';

const HomeScreen =({navigation}) => {
   // console.log(props)
     const image = { uri: "https://todoist.com/_next/static/images/header@2x_b52d8f7c7bf19d6c702569d1072ed6a2.webp" };
     const image2 = { uri: "https://todoist.com/_next/static/images/peace@2x_158f4453627629ae1dd3ec115a559630.webp" };
    return(

        <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
             <Text style={styles.text}> {"\n"} Organize it all with TodoList </Text>
              <TouchableOpacity  style={styles.button} onPress={()=> navigation.navigate('Index')}>
                                           <Text style={styles.text1}>Get Started</Text>
                                        </TouchableOpacity>
        <View>
        <Image source={image} resizeMode="cover" style={styles.image} />
        </View>
              <Text style={styles.text}> {"\n"}Free up your mental space
                             <Text style={styles.text2}>   {"\n"} {"\n"}      Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).</Text></Text>

           <View>
                   <Image source={image2} resizeMode="cover" style={styles.image2} />
                   </View>

            <Text style={styles.text}> Achieve peace of mind with TodoList</Text>
                   <TouchableOpacity  style={styles.button} onPress={()=> navigation.navigate('Index')}>
                                                              <Text style={styles.text1}>Get Started</Text>
                                                           </TouchableOpacity>


                                     </ScrollView>
                                        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent :'space-between',
        paddingVertical:10,
        paddingHorizontal:10,
       // borderTopWidth:1,
        borderBottomWidth:1,
        borderColor: 'gray',
        backgroundColor:'pink'
    },
    title:{

        marginTop:10,
        color: 'black',

        fontWeight: 'bold',
         fontSize: 25,
    },
    container: {
        flex: 1,
        paddingBottom: StatusBar.currentHeight,
        backgroundColor: 'white',
      },
      image: {
        flex: 1,
        justifyContent: "center",
        width: 500,
            height: 400,
      },
      image2: {
              flex: 1,
              justifyContent: "center",
              width: 370,
                  height: 700,
            },
      text: {
        color: "black",
        fontSize: 35,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        //fontFamily: "Cochin"
      },
      text1: {
              color: "white",
              fontSize: 26,
              lineHeight: 34,
              fontWeight: "bold",
              textAlign: "center",
              //fontFamily: "Cochin"
            },
            text2: {
                          color: "black",
                          fontSize: 26,
                          lineHeight: 54,
                          //fontWeight: "bold",
                          textAlign: "center",
                          //fontFamily: "Cochin"
                        },
      scrollView: {
          backgroundColor: 'white',
          //marginHorizontal: 20,
        },
        button: {
            alignItems: "center",
            backgroundColor: "red",
            padding: 10,
            margin:50
          },

});
export default HomeScreen;