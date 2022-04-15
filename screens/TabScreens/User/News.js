import React, { Component } from 'react';
import { StyleSheet, Text, View, Image , TextInput, Button, ScrollView,FlatList, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import news from '../../../components/news';
import * as RootNavigation from "../../../RootNavigation";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: news,     
    };
  }

  render(){   
    return (
      <View style={styles.container}>
        <ScrollView style={{ backgroundColor: '#E5E5E5',padding:10}} showsVerticalScrollIndicator={false}>
       
        <View style={styles.mainView}>
                      <Text style={{fontSize:32,fontFamily:'poppins-bold',fontWeight:'600',color:"#282828"}}>News Feed</Text>
                       <Feather name="bell" size={30} color="#000000" />
                  </View>
        
          <View style={styles.imageView2}>
              <Text style={styles.text4}>Latest news</Text>
               
                <Text style={styles.text5}>View all</Text>
               
          </View>

          <View style={styles.card}>
            <FlatList horizontal={false} data={this.state.data}
              renderItem={({ item, index }) => {
              return (
            <TouchableOpacity style={styles.card1} onPress={()=>RootNavigation.navigate("NewsDetails")}>
                <View style={styles.imagestyle} >                
                  <Image source={item.image}  style={styles.imageView4} />               
                </View>
       
                <View style={styles.cardstart}>
                  <Text style={styles.text2}>{item.name}
                  </Text>
                  <View style={styles.imageView1}>
                    <Text style={styles.text3} >{item.time}</Text> 
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
    // padding:15,
   
    backgroundColor: '#E5E5E5',
    // backgroundColor:'red'
  },
  mainView:{
    marginVertical:40,
    backgroundColor: '#E5E5E5',
    marginHorizontal:16,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

},
  imageView2: {
    flex: 1,
    flexDirection:"row",
    justifyContent:'space-between',
    marginHorizontal:16,
    // padding:20,
  },
  text1: {
    flex:1,
    color: '#000',
    fontSize: 30,
    fontWeight:'700',
  },
  imageView1: {
    flex: 1,
    alignItems:'flex-start',
    padding:5,
    justifyContent:'flex-end',
  },
  text4:{
    fontFamily: 'poppins-medium',
    textAlign: 'center',
    color:"#78BE1F",
    fontSize: 18,
    fontWeight:'600',
    letterSpacing:1
  },
  text5:{
    color:'#427AA1',
    fontWeight:'600',
    fontFamily:'poppins-regular'
  },
  image:{
    flex:1,
    alignItems:"flex-end",
    paddingLeft:20,
  },
  card:{
    padding:5,
  },
  card1: {
    flex: 1,
    flexDirection:'row',
    borderRadius:15,
    // margin:8,
    padding:7,
    marginVertical:7,
    // paddingHorizontal:7,
    // borderColor:"#fff",
    backgroundColor:"#fff",
    // borderWidth:1,
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
    
    // backgroundColor:'red'
  },
  imageView4: {
    // flex: 2,
    // resizeMode: 'contain',
    width:120,
    height:100,
    borderRadius:15
  },
  cardstart:{
    flex:1,
    // paddingTop:10,
    // backgroundColor:'red',
margin:7
  },
  text2: {
    color: '#563F1F',
    fontSize: 11.5,
    fontWeight:'600',  
    fontFamily:'poppins-semiBold' 
  },
  text3: {
    color:"#ccc",
    fontSize: 12,
    fontWeight:'700',
  },

});