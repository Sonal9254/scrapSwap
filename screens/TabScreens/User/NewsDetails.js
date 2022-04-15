import React, { Component } from 'react';
import { StyleSheet, Text, View, Image , TextInput, Button, ScrollView,FlatList,TouchableOpacity,Dimensions,ImageBackground} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {  Icon,  Avatar, ListItem, Divider } from "react-native-elements";
import * as RootNavigation from "../../../RootNavigation" 

const { width, height } = Dimensions.get("window");

export default class NewsDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"Budget 2022 focusses on making agriculture smart, modern"
    };
  }

  render(){   
    return (
       <View style={styles.container}>
        <ScrollView style={{backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
{/* 
           <Image source={require('../../../assets/bckground.jpeg')} style={styles.image} />     
          <View style={styles.backIcon}>
           <Feather name="chevron-left" size={30} color="#fff" />
          </View> */}
            <ImageBackground
                    style={styles.headerImage}
                    imageStyle={{     borderBottomLeftRadius:20,
                      borderBottomRightRadius:20,}}
                    source={require("../../../assets/bckground.jpeg")  }
                >
         
        
              <View style={styles.filterRow}>
                <View style={styles.headerBlockOne}>
                  <TouchableOpacity
                    onPress={() =>
                      RootNavigation.navigate("News")
                    }
                    style={styles.topButton}
                  >
                    <Icon
                      name="chevron-left"
                      type="feather"
                      color="#fff"
                      size={20}
                    />
                  </TouchableOpacity>
                </View>

               
              </View>
            
          </ImageBackground>

       <View style={{padding:20,backgroundColor:'#fff'}}>
          <View style={styles.maintext}>
            <Text style={styles.text1}>{this.state.title}</Text>
          </View>

          <View style={styles.maintext1}>
           <Text style={styles.text2}>Agricultural loans for farmers have been increased by 2.5 times in the last seven years, the Prime Minister said while adding that the union budget presented on February 1 will give a major boost to modernise agriculture and also promote natural farming, with a special focus on agri-waste management.
           Increasing farmer’s income, reduce farming cost and connecting farmers to market is the aim of the government, PM Narendra Modi emphasized. He called on the corporate world, technology sector, financial world and start up world to collaborate with the government and take Budget initiatives to farmers before they start the new agriculture year.
            Agricultural loans for farmers have been increased by 2.5 times in the last seven years, the Prime Minister said while adding that the union budget presented on February 1 will give a major boost to modernise agriculture and also promote natural farming, with a special focus on agri-waste management.
        
            Increasing farmer’s income, reduce farming cost and connecting farmers to market is the aim of the government, PM Narendra Modi emphasized. He called on the corporate world, technology sector, financial world and start up world to collaborate with the government and take Budget initiatives to farmers before they start the new agriculture year.
           </Text>
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
    backgroundColor: '#fff',
  },
  maintext:{
    paddingLeft:10,
    borderLeftWidth:4,
    borderColor:"#78BE1F",
  },
  text1:{
    fontSize:16,
    fontFamily:'poppins-semiBold',
    color:'#000',
    fontWeight:'600',
    
  },
  maintext1:{
    marginTop:15
  },
  text2:{
    fontSize:12,
    fontFamily:'poppins-regular',
    fontWeight:'600',
    color:'#ccc'
  },
  headerImage: {
    width: width,
    height: height/2,

  },

  filterRow: {
    flexDirection: "row",
    paddingTop: 50,
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
  

});