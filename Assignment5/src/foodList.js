import React from 'react';
import {
  StyleSheet, Text,
  FlatList, View, TouchableOpacity
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import { delFood } from './actions/food';

const FoodList = () => {

  const dispatch = useDispatch();

  const delCurrent = (key) => dispatch(delFood(key))

  const foods = useSelector(state => state.foodReducer.foodList)

  return(

             <View>
             <FlatList style={styles.listContainer}
                   data= {foods}
                   keyExtractor={(item, index) => item.key.toString()}
                   renderItem={({ item }) => {
                   return(
                                       <TouchableOpacity>
                                        <View style={styles.row}>
                                        <Text style ={styles.title}>{item.name}</Text>
                                        <TouchableOpacity onPress ={()=> delCurrent(item.key)}>
                                        <Icon name='delete' size={35} color="black" />
                                        </TouchableOpacity>
                                        </View>
                                        </TouchableOpacity>
                                   );

            }}
        />
</View>
  );

};

const styles = StyleSheet.create({
  listContainer: {
//backgroundColor: 'green',
    padding: 20
  },
  listText: {
  color:'red',
    fontSize: 30
  },
  row:{
          flexDirection:'row',
          justifyContent :'space-between',
          paddingVertical:10,
          paddingHorizontal:10,
         // borderTopWidth:1,
          borderBottomWidth:1,
          borderColor: 'white',
          backgroundColor:'peachpuff'
      },
      title:{

          marginTop:10,
          color: 'black',

          //fontWeight: 'bold',
           fontSize: 25,
      },
});

export default FoodList;
