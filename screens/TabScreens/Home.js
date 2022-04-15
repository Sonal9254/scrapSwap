import React, { Component } from 'react';
import { StyleSheet, Text, View, Image , TextInput, Button, TouchableOpacity, ScrollView,FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { SearchBar } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import newdata from '../../components/newdata';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: newdata,
     
    };
  }

   updateSearch = (search) => {
    this.setState({ search });
  };

  render(){
  	
    return (
      <View style={styles.container}>
        <ScrollView>
        <View style={styles.imageView2}>
          <View style={styles.text}>
            <Text style={styles.text1}>Quotations</Text>
          </View>
          <View style={styles.image}>
           <Feather name="bell" size={40} color="#000000" />
          </View>
        </View>
         <View style={styles.imageView3}>
         
	       <TextInput style={styles.search} 
           onChangeText={this.updateSearch} 
           />
           <View style={styles.searchIcon}>
          <Feather name="search" size={20} color="#93C572" />
          </View>
         <View style={styles.hr1}/>

           <View style={styles.imageView2}>
             <View style={styles.buttonView1}>
              <TouchableOpacity style={styles.button3} >
              <Text style={styles.text5} >Quotation Requested</Text> 
              </TouchableOpacity>
             </View>

             <View style={styles.tab1}>
               <Text>Quotation Received</Text>
             </View>
           </View>
          <View style={styles.hr2} /> 
         
          <View style={styles.card}>
            <FlatList horizontal={false} data={this.state.data}
              renderItem={({ item, index }) => {
              return (
              <View style={styles.card1} >
              <TouchableOpacity  >
                <View style={styles.imagestyle} >                
                  <Image source={item.image}  style={styles.imageView4} />               
                </View>
                </TouchableOpacity>
                <View style={styles.cardstart}>
                  <Text style={styles.text2}>{item.name}
                  </Text>
                  <Text style={styles.text3}>{item.place}</Text>
                    <View style={styles.imageView2}>
                      <View style={styles.button2}>
                      <Text style={styles.text4} >{item.date}</Text> 
                    </View>
	             
                    <View style={styles.icon2}>
                     <View style={styles.location}>
                      <Feather name="map-pin" size={16} color="#5F9EA0" />
                     </View>
                     <View style={styles.distance}>
                      <Text style={styles.icon3}>{item.distance} </Text>
                     </View>
                    </View>
                </View>

                </View>
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
    backgroundColor: '#DCDCDC',
  },
  hr1:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding:5,
    paddingTop:30,
    marginBottom:10,
  },
  hr2:{
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding:5,
    marginBottom:15,
  },
  tab1:{
    flex:1,
    alignItems:'flex-start',
    justifyContent:'flex-start',
  },
  imageView2: {
    flex: 1,
    flexDirection:"row",
  },
   imageView3: {
       backgroundColor:'red',
    flex: 1,
    paddingRight:20,
    paddingLeft:20,
  },
  search:{
    backgroundColor:"#ccc",
    borderRadius:10,
    paddingLeft:50,
  },
  searchIcon:{
    position:"absolute",
    paddingLeft:35,
    padding:12,
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
    flex: 1,
    flexDirection:"row",
    borderRadius:10,
    // height:130,
    marginBottom:20,
    borderColor:"#fff",
    backgroundColor:"#ccc",
    borderWidth:1,
  },
   imagestyle:{
    flex:1,
  },
   imageView4: {
    // flex: 1,
    alignItems: 'flex-start',
    width:120,
    height:150,
    paddingLeft:0,
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
  },
   cardstart:{
    flex:1,
    paddingTop:10,
  },
  text2: {
    color: '#000',
    fontSize: 25,
    fontWeight:'700',
    paddingLeft:10,
    
  },
  location:{
    flex: 0.5,
    justifyContent:"flex-end",
    alignItems:"flex-end",
    bottom:0,
    paddingBottom:10,
    padding:5,
  },
  icon2:{
    flexDirection:"row",
    flex:0.7,
    alignItems:'flex-end',
  },
  distance:{
    flex: 0.4,
    justifyContent:"flex-end",
  },
  text3: {
    color: '#808080',
    fontSize: 18,
    paddingLeft:10,
 
    paddingTop:5,
  },
    icon3:{
    position:'absolute',
    bottom:0,
    fontSize:15,
    fontWeight:'700',
    paddingRight:5,
    paddingBottom:10,
    color:"#5F9EA0",
  },
    icon4:{
    position:'absolute',
    bottom:10,
    padding:10,
    paddingLeft:10,
    color:"#2C92F7",
    // border:2,
  },
   buttonView: {
    flex: 1.2,
    marginTop: 40,
    paddingLeft:10,
  },
    buttonView1: {
    flex: 2,
    alignItems:'center',
  },
    button3:{
    height: 35,
    width: 150,
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#93C572',
    backgroundColor: '#93C572',
  },
   text5:{

    textAlign: 'center',
    color:"#fff",
    fontSize: 15,
    fontWeight:'700',
  },
    button2:{
    flex: 1,
    // marginTop: 40,
    // paddingLeft:5,
    // height: 20,
    // width: 150,
    justifyContent:'center',
    alignItems: 'center',
    borderColor: '#D3E9FF',
    backgroundColor: '#D3E9FF',
  },
  text4:{
   
    textAlign: 'center',
    color:"#5F9EA0",
    fontSize: 15,
    fontWeight:'700',
  },
  });
