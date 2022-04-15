import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { StyleSheet,Dimensions } from "react-native";
import { Icon, Divider } from "react-native-elements";
import TabBarIcon from "../components/TabBarIcon";
import Home from "../screens/TabScreens/Home";

import HomeUser from "../screens/TabScreens/User/HomeUser";
import PersonalDetails from "../screens/Authorization/UserDetails/PersonalDetails";
import LocationDetails from "../screens/Authorization/UserDetails/LocationDetails";

import VehicleDetails from "../screens/Authorization/UserDetails/VehicleDetails";
import HomeUserDetail from "../screens/TabScreens/User/HomeUserDetail";
import News from "../screens/TabScreens/User/News";
import Quotations from "../screens/TabScreens/User/Quotations";



const BottomTab = createBottomTabNavigator();
const deviceWidth = Dimensions.get('window').width;

const INITIAL_ROUTE_NAME = "HomeUser";

class BottomTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }



  render() {
    return (
      <BottomTab.Navigator
    //   tabBarOptions={{
    //         style: {
    //               backgroundColor: '#252525',
    //               paddingBottom: 3,
    //         }
    //  }}
     
      screenOptions={{
        headerShown: false,
        activeTintColor: "#78BE1F",
        inactiveTintColor: "#fff",
        
        style: styles.container,
        labelStyle: { fontFamily: "poppins-bold" },
        tabBarStyle:{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: '#252525',
          width:deviceWidth,
         
          height:58
         
        }
        
      }}
      
     
        initialRouteName={INITIAL_ROUTE_NAME}
      
      >
        <BottomTab.Screen
          name="HomeUser"
          component={HomeUser}
          options={{
            title: "",
            unmountOnBlur: false,
            tabBarIcon: ({ focused }) => (
              <Icon
                color={focused ? "#78BE1F" : "#ccc"}
                name="home"
                type="feather"
                size={20}
              />
            ),
          }}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        />

        <BottomTab.Screen
          name="Quotations"
          component={Quotations}
          options={{
            title: "",
            unmountOnBlur: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                color={focused ? "#78BE1F" : "#ccc"}
                type="font-awesome"
                name="bar-chart"
              />
            ),
          }}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        />


         <BottomTab.Screen
          name="News"
          component={News}
          options={{
            title: "",
            unmountOnBlur: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                color={focused ? "#78BE1F" : "#ccc"}
                type="feather"
                name="book-open"
              />
            ),
          }}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        />


        <BottomTab.Screen
          name="VehicleDetails"
          component={VehicleDetails}
          options={{
            title: "",
            unmountOnBlur: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                color={focused ? "#78BE1F" : "#ccc"}
                type="feather"
                name="user"
              />
            ),
          }}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        />
       
      
      
       
          
       
      </BottomTab.Navigator>
    );
  }
}

export default BottomTabNavigator;


function getHeaderTitle(route) {
  // const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
  const routeName = getFocusedRouteNameFromRoute(route) ?? "INITIAL_ROUTE_NAME";
  switch (routeName) {
    case "Feed":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}

const styles = StyleSheet.create({
  container: {
    // height: 50,
    backgroundColor: "#252525",
  },
});
