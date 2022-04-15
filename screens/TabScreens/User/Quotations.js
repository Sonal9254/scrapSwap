import React, { Component } from 'react';
import { StyleSheet, Text, View, Image , TextInput, Button,Dimensions, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SearchBar ,Divider} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import newdata from '../../../components/newdata';
import { color } from 'react-native-elements/dist/helpers';
const Tab = createMaterialTopTabNavigator();
const deviceWidth = Dimensions.get('window').width;

export default class Quotations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newdata,
      quotRequested:true,
      quotRecieved:true
     
    };
  }

   updateSearch = (search) => {
    this.setState({ search });
  };

  render(){
  	
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.mainView}>
                      <Text style={{fontSize:32,fontFamily:'poppins-bold',fontWeight:'800',}}>Quotations</Text>
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
       
        
          
             <Divider style={{height:2,width:deviceWidth,marginTop:20}}/>

           <View style={styles.imageView2}>
                <View style={styles.buttonView1}>
                  <TouchableOpacity 
                     style={this.state.quotRequested ? styles.quotReqButton : styles.quotNoReqButton} 
                     onPress={()=>this.setState({quotRequested:!this.state.quotRequested,quotRecieved:false})}>
                  <Text style={this.state.quotRequested ?styles.text5:{color:"#000"}} >Quotation Requested</Text> 
                  </TouchableOpacity>
                </View>

                  <View style={styles.tab1}>
                  <TouchableOpacity 
                  style={this.state.quotRecieved ? styles.quotReqButton : styles.quotNoReqButton} 
                  onPress={()=>this.setState({quotRecieved:!this.state.quotRecieved})}
                   >
                    <Text style={this.state.quotRecieved ?styles.text5:{color:"#000"}} >Quotation Received</Text>
                    </TouchableOpacity>
                  </View>
           </View>
          

           <Divider style={{height:2,width:deviceWidth}}/>
         
          <View style={styles.card}>
            <FlatList horizontal={false} data={this.state.data}
              renderItem={({ item, index }) => {
              return (
               <TouchableOpacity style={styles.card1} >
             
                <View style={styles.imagestyle} >                
                  <Image source={item.image}  style={styles.imageView4} />               
                </View>
                
                <View style={styles.cardstart}>
                      <Text style={styles.name}>{item.name}
                      </Text>
                  <Text style={styles.text3}>{item.place}</Text>
                    <View style={styles.dateView}>
                          <View style={styles.button2}>
                              <Text style={styles.text4} >{item.date}</Text> 
                          </View>
	             
                        <View style={styles.icon2}>
                           
                                <Feather name="map-pin" size={15} color="#5F9EA0" />
                             
                           
                                <Text style={styles.icon3}>{item.distance} </Text>
                              
                        </View>
                </View>

                </View>
              </TouchableOpacity>
              );
              }}

              />
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

  imageView2: {
    flex: 1,
    flexDirection:"row",
    justifyContent:'space-evenly',
    // backgroundColor:'red',
    marginVertical:10
  },

  text:{
    flex:1,
    paddingLeft:20,
    padding:20,
  },
  text1: {
    color: '#000',
    fontSize: 40,
    fontWeight:'700',
   
  },
  image:{
    flex:1,
    alignItems:"flex-end",
    paddingLeft:20,
    padding:20,
  },
  card:{
    paddingTop:10,
  },
  card1: {
  
    flexDirection:"row",
    borderRadius:10,
    marginBottom:15,
    backgroundColor:"#fff",
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
   
  },
   imagestyle:{
    // flex:1,
  },
   imageView4: {
    // flex: 1,
    // alignItems: 'flex-start',
    width:120,
    height:115,
    // paddingLeft:0,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
   cardstart:{
    flex:1,
    // padding:7
    paddingTop:7,
    // paddingBottom:0,
    paddingHorizontal:7
   
  },
  name: {
    color: '#000',
    fontSize: 16,
    fontWeight:'600',
    fontFamily:'poppins-semiBold'
   
    
  },
  icon2:{
    flexDirection:"row",
  
  },

  text3: {
    color: '#808080',
    fontSize: 12,
    fontFamily:'poppins-regular',
  
  },
  dateView:{
  //  backgroundColor:'red',
  // alignSelf:'flex-end',
   flexDirection:'row',
   justifyContent:'space-between',
   marginTop:20
  },
    icon3:{
    // position:'absolute',
    bottom:0,
    fontSize:12,
    fontWeight:'700',
    // paddingRight:5,
    // paddingBottom:10,
    color:"#5F9EA0",
  },
   
    buttonView1: {
    // flex: 2,
    alignItems:'center',
  },
    quotReqButton:{
  
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 20,
    padding:10,
    borderColor: '#93C572',
    backgroundColor: '#93C572',
  },
  quotNoReqButton:{
  
    
    padding:10,
   
  },
   text5:{

    textAlign: 'center',
    color:"#fff",
    fontFamily:'poppins-regular',
    fontSize: 13,
    fontWeight:'500',
  },
 button2:{
      padding:4,
      flex:0.9,
      justifyContent:'center',
      alignItems: 'center',
      // borderColor: '#D3E9FF',
      backgroundColor: '#D3E9FF',
  },
  text4:{
   
      textAlign: 'center',
      color:"#5F9EA0",
      fontSize: 10,
      fontWeight:'600',
  },
  });
