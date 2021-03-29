import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import Ionicon from 'react-native-vector-icons/Ionicons';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>No Notifications!</Text>
    </View>
  );
}

function ContactsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contacts!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>

    </View>
  );
}

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerRight: () => (
        <Button onPress={() => alert('Successfully Saved!')} title="SAVE" color="#00cc00" /> ), }}/>

      <HomeStack.Screen name="Details" component={DetailsScreen} options={{ headerRight: () => (
        <Button onPress={() => alert('Successfully Saved!')} title="SAVE" color="#00cc00" /> ), }}/>
    </HomeStack.Navigator>
  );
}

const FeedStack = createStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen name="Feed" component={FeedScreen} options={{ headerRight: () => (
                                      <Button onPress={() => alert('Successfully Saved!')} title="SAVE" color="#00cc00" /> ), }}/>
    </FeedStack.Navigator>
  );
}

const SettingStack = createStackNavigator();

function SettingStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Settings" component={SettingScreen} options={{ headerRight: () => (
         <Button onPress={() => alert('Successfully Saved!')} title="SAVE" color="#00cc00" /> ), }}/>

      <SettingStack.Screen name="Details" component={DetailsScreen} options={{ headerRight: () => (
         <Button onPress={() => alert('Successfully Saved!')} title="SAVE" color="#00cc00" /> ), }}/>
    </SettingStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function TabScreen() {
  return (
    <Tab.Navigator initialRouteName="Home"
     tabBarOptions={{
       activeTintColor: '#e91e63',
       }}
                                 >
     <Tab.Screen name="Home" component={HomeStackScreen}
     options={{
                                                             tabBarLabel: 'Home',
                                                            tabBarIcon: ({ color }) => (
                                                               <Ionicon name="home" color={color} size={26} />
                                                             ),
                                                                   }}
       />
     <Tab.Screen name="Feed" component={FeedStackScreen}
     options={{
                                                                    tabBarLabel: 'Feed',
                                                          tabBarIcon: ({ color, size }) => (
                                                           <Ionicon name="notifications" color={color} size={size} />
                                                       ),
                                                   }}
                       />
     <Tab.Screen name="Settings" component={SettingStackScreen}
     options={{
                                                                            tabBarLabel: 'Settings',
                                                                          tabBarIcon: ({ color, size }) => (
                                                                             <Ionicon name="settings" color={color} size={size} />
                                                                     ),
                                                                }}
               />
     </Tab.Navigator>
   );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
              <Drawer.Screen name="Home" component={TabScreen} />
              <Drawer.Screen name="Notifications" component={NotificationsScreen} />
              <Drawer.Screen name="Contacts" component={ContactsScreen} />
            </Drawer.Navigator>


         </NavigationContainer>
  );
}
