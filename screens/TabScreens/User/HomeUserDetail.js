import React, { Component } from 'react';
import { StyleSheet, Text, View, Image , TextInput, Button,Dimensions,Modal, TouchableOpacity,ScrollView,ImageBackground} from 'react-native';
import {  Icon,  Avatar, ListItem, Divider } from "react-native-elements";
import { Feather, FontAwesome } from "@expo/vector-icons";
import newdata from '../../../components/newdata';
const width = Dimensions.get('window').width;

export default class HomeUserDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            place:"Delhi",
            name:"Setty Scraper",
            description:"The speaker unit contains a diaphragm that is precision-grown from NAC Audio bio-cellulose, making it stiffer, lighter and stronger than regular PET speaker",
            owner:'Mohan subramaniyam',
            modalVisible:false
      };
    }

    render(){
  	
        return (
          <View style={styles.container}>

              <ScrollView showsVerticalScrollIndicator={false}>

              <ImageBackground
                    style={styles.headerImage}
                    source={require("../../../assets/bckground2.png")  }
                >
         
        
              <View style={styles.filterRow}>
                <View style={styles.headerBlockOne}>
                  <TouchableOpacity
                    onPress={() =>
                      RootNavigation.navigate("BottomTabNavigator")
                    }
                    style={styles.topButton}
                  >
                    <Icon
                    //   containerStyle={{ paddingTop: 15 }}
                      name="chevron-left"
                      type="feather"
                      color="#fff"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.headerBlock1}>
                 
                  <TouchableOpacity
                    onPress={() =>
                      RootNavigation.navigate("BottomTabNavigator")
                    }
                    style={styles.topButton}
                  >
                    <Icon
                    //   containerStyle={{ paddingTop: 15 }}
                      name="share-2"
                      type="feather"
                      color="#fff"
                      size={20}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    // onPress={() =>
                    //   RootNavigation.navigate("BottomTabNavigator")
                    // }
                    style={styles.topButton}
                  >
                    <Icon
                    //   containerStyle={{ paddingTop: 15 }}
                      name="bookmark-o"
                      type="font-awesome"
                      color="#fff"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            
          </ImageBackground>

          <View style={styles.textView}>
              <Text style={styles.place}>{this.state.place}</Text>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={{color:'#230B34',fontSize:12,fontFamily:'poppins-semiBold',lineHeight:30}}>Description</Text>
             <Text style={{color:"#7C7C7C",fontFamily:'poppins-regular',fontSize:10,}}>{this.state.description}</Text>
          </View>
          <View style={styles.textView}>

            <Text style={{color:'#230B34',fontSize:12,fontFamily:'poppins-semiBold',lineHeight:30}}>Owner information</Text>
            <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:10,alignItems:'center'}}>
                <Avatar
                  rounded
                   source={require("../../../assets/bckground1.jpg")}
                 size={25}


              />
                <Text style={styles.ownerName}>{this.state.owner}</Text>
            </View>
             <View style={styles.textView1}>
                 <Text style={{fontFamily:'poppins-regular',fontSize:11}}>Details will be visible after Accepting the Quotation</Text>
              </View>
            </View>

            <TouchableOpacity 
               style={styles.quotButton}
               onPress={()=>this.setState({modalVisible:true})}>
             <Text style={{color:'#fff',fontFamily:'poppins-medium'}}>Request Quotation</Text>

            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent
                visible={this.state.modalVisible}
                presentationStyle="overFullScreen">
                   <View style={styles.modal}>
                      <View style={styles.modalStyle}>
                             <Text style={{color:'#484848',fontFamily:'poppins-semiBold',fontSize:13,textAlign:'center'}}>Are you sure you want to send Quotation request ?</Text>
                             <TouchableOpacity 
                              style={styles.yesButton}
                                onPress={()=>this.setState({modalVisible:true})}>
                              <Text style={{color:'#fff',fontFamily:'poppins-medium'}}>Yes</Text>

                           </TouchableOpacity>
                           <TouchableOpacity 
                              style={styles.noButton}
                                onPress={()=>this.setState({modalVisible:true})}>
                              <Text style={{color:'#427AA1',fontFamily:'poppins-medium'}}>No</Text>

                           </TouchableOpacity>
                       </View>

                    </View>
            </Modal>
         
            

              </ScrollView>



          

        </View>

    );
  }     
 }


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
// padding:15,
// Bottom:20
},

  headerImage: {
    width: width,
    height: 350,
  },

  filterRow: {
    flexDirection: "row",
    paddingTop: 50,
    // backgroundColor:'#000'
  },
  headerBlockOne: {
    marginTop: 0,
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  topButton:{
    height:38,
    width:38,
    borderRadius:30,
    backgroundColor:'#78BE1F',
    alignItems:'center',
    justifyContent:'center'
  },
  headerBlock1: {
    // paddingTop: 15,
    flex: 0.7,
    marginRight: 3,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textView:{
    backgroundColor:"#F4F4F4",
    marginTop:30,
    marginHorizontal:20,
    borderRadius:12,
    padding:19
  },
  textView1:{
    backgroundColor:"#DBDBDB",
    marginTop:19,
    justifyContent:'center',
    alignItems:'center',
    // marginHorizontal:20,
    borderRadius:12,
    padding:14
  },
  place:{
    color:'#78BE1F',
    fontSize:13,
    fontFamily:'poppins-medium'
  },
  name:{
    color:'#3D3B3B',
    fontSize:19,
    fontFamily:'poppins-bold',
    lineHeight:30
  },
  ownerName:{
    fontSize:11,
    fontFamily:'poppins-medium',
    color:"#78BE1F",
   paddingLeft:13
  },
  quotButton:{
    height:50,
    width:'80%',
    backgroundColor:'#427AA1',
    borderRadius:20,
    alignSelf:'center',
    marginVertical:30,
    justifyContent:'center',
    alignItems:'center'
    
  },
  yesButton:{
    height:60,
    width:'70%',
    backgroundColor:'#427AA1',
    borderRadius:20,
    alignSelf:'center',
    marginTop:30,
    justifyContent:'center',
    alignItems:'center'
    
  },
  noButton:{
    height:60,
    width:'70%',
    borderWidth:2,
    borderColor:'#427AA1',
    // backgroundColor:'#427AA1',
    borderRadius:20,
    alignSelf:'center',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
    
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignContent: 'center',
    paddingLeft: 20,
  },
  modalStyle: {
    paddingTop: 20,
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'flex-start',
    width: width * 0.9,
    backgroundColor: '#E5E5E5',
    borderRadius: 12,
    paddingBottom:25
  },

})