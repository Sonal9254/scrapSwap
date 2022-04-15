import React, { Component } from 'react';
import { StyleSheet, Text, View, Image , TextInput, Button,Dimensions, TouchableOpacity, ScrollView,FlatList,ActivityIndicator} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {  Icon,  Avatar, ListItem, Divider } from "react-native-elements";
import { SearchBar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as RootNavigation from "../../../RootNavigation"
import newdata from '../../../components/newdata';
const deviceWidth = Dimensions.get('window').width;

export default class HomeUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: newdata,
       
      };
    }

    render(){
  	
        return (
          <View style={styles.container}>

              <ScrollView showsVerticalScrollIndicator={false}>

                  <View style={styles.mainView}>
                      <Text style={{fontSize:32,fontFamily:'poppins-bold',fontWeight:'800'}}>Home</Text>
                       <Feather name="bell" size={30} color="#000000" />
                  </View>

                  <View style={styles.imageView3}>
         
                        <TextInput style={styles.search} 
                        onChangeText={this.updateSearch} 
                        />
                        <View style={styles.searchIcon}>
                        <Feather name="search" size={20} color="#93C572" />
                        </View>
            </View>

            <View style={styles.body}>
            <View style={styles.Row}>
            <FlatList
                data={newdata}
                numColumns={2}
                renderItem={({ item }) => {
                  return (


                  <View style={styles.tabBarInfoContainer}>
                      <TouchableOpacity 
                        style={styles.partition}
                        onPress={()=>RootNavigation.navigate("HomeUserDetail")}
                        >
                      
                        <Image
                            source={item.image}
                            style={styles.friendsImage}
                            PlaceholderContent={<ActivityIndicator />}
                            placeholderStyle={{backgroundColor:"#fff"}}
                        />
                     
                        <View style={styles.feedDescription}>
                            <Text style={styles.userName}> {item.name} </Text>
                            <Text style={{color:'#6F6F6F',fontFamily:"poppins-regular",fontSize:11}}> {item.place}</Text>
                            
                            <View style={styles.icon2}>
                            
                                    <Feather name="map-pin" size={13} color="#427AA1" style={{marginTop:2,paddingRight:3}}/>
                                
                                
                                <Text style={styles.dist}>{item.distance} </Text>
                              </View>
                        </View>

                       
                     
                        </TouchableOpacity>
                     
                  </View>


            );
            }}
            />
          </View>
        </View>
  

              </ScrollView>

          

          </View>

   );
     }     
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding:15,
    paddingBottom:0
  },
  mainView:{
      marginVertical:35,
      marginHorizontal:16,
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'

  },
  imageView3: {
    flex: 1,
    marginHorizontal:5
 
},
search:{
 backgroundColor:"#ccc",
 borderRadius:12,
 padding:10
 
},
searchIcon:{
 position:"absolute",
 padding:12,
},
tabBarInfoContainer: {
    ...Platform.select({
      ios: {
        shadowColor: '#f2f2f2',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: '#fff',
//    borderWidth:0.5,
//    borderColor:"#fff",
   margin:6,
   borderRadius:10,
   width: deviceWidth / 2.33,
   marginTop:20
  },
  partition: {
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // backgroundColor:'#000'
  },
  friendsImage: {
    // width: deviceWidth / 2.4,
    // height: deviceWidth / 4,
    width:155,
    height:151,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  body: {
    justifyContent:"center",
    alignItems:"center",
    // marginBottom:30,
  },
  Row: {
    flexDirection: "row",
  },
  feedDescription: {
    marginTop:0,
    marginBottom:0,
    padding:7,
    paddingTop:10,
    borderTopWidth:0.5,
    borderTopColor:"#ccc",
    // backgroundColor:'red'
    paddingBottom:"6%",
  },
  userName:{
      fontSize:12,
      fontWeight:'600',
      fontFamily:'poppins-semiBold',
      color:'#6F6F6F'
  },
  icon2:{
    //   alignSelf:'flex-end',
    flexDirection:"row",
    // flex:1,
    // backgroundColor:'red',
    justifyContent:'flex-end',
    // alignItems:'center',
  },
  dist:{
    color:'#427AA1',
    fontSize:12,
    fontFamily:'poppins-regular'
  }
  
  


})