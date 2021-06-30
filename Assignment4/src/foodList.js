import React, { Component } from 'react';
import { StyleSheet, FlatList, View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux';
import { delFood } from './actions/food';
import { ListItem, Icon } from 'react-native-elements';
class FoodList extends Component{

               static navigationOptions = {
               title:'Food List',
               headerTintColor:'yellow',
               headerStyle: {
               backgroundColor:'blue',
               },
               };
  render(){

  return (
  <View>
               <FlatList style={styles.listContainer}
                     data= {this.props.foods}
                     keyExtractor={(item, index) => item.key.toString()}
                     renderItem={({ item }) => {
                     return(
                                         <TouchableOpacity>
                                          <View style={styles.row}>
                                          <Text style ={styles.title}>{item.name}</Text>
                                          <TouchableOpacity onPress ={()=> this.props.del(item.key)}>
                                          <Icon name='delete' size={35} color="black" />
                                          </TouchableOpacity>
                                          </View>
                                          </TouchableOpacity>
                                     );

              }}
          />
  </View>
  );
}
};
const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'pink',
    padding: 16
  },
  listText: {
    fontSize: 30,
    color:'black'
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

const mapStateToProps = (state) => {
console.log(state);
return{
foods: state.foodReducer.foodList
}
}

const mapDispatchToProps = (dispatch) => {
return{
del: (key) => dispatch(delFood(key)),
}
};

export default connect(mapStateToProps,mapDispatchToProps)(FoodList);
