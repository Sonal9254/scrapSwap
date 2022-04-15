import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native';
import { Button,Image } from 'react-native-elements';
import * as RootNavigation from "../../../RootNavigation"
import StepIndicator from 'react-native-step-indicator';


const labels = [
    'Personal Details',
    'Location Details',
    'Vehicle Details',
    
  ];
  const customStyles = {
    stepIndicatorSize: 24,
    currentStepIndicatorSize: 24,
    separatorStrokeWidth: 5,
    currentStepStrokeWidth: 12,
    stepStrokeCurrentColor: "#8FDC2E",
    stepStrokeWidth: 4,
    stepStrokeFinishedColor: "#8FDC2E",
    stepStrokeUnFinishedColor: "#e4e4e4",
    separatorFinishedColor: "#8FDC2E",
    separatorUnFinishedColor: "#e4e4e4",
    stepIndicatorFinishedColor: "#8FDC2E",
    stepIndicatorUnFinishedColor: "#ffffff",
    stepIndicatorLabelFontSize: 0,
    labelSize: 9,
    currentStepIndicatorLabelFontSize: 0,
  };

export default class PersonalDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPosition: 0,
        userName:'Rohan'
      }
    }
    
  
 render() {

   return (
    <ScrollView style={{backgroundColor:'#fff'}} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

     
   
        <View style={{alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.head}>Scrap Swap</Text>
          <View style={{paddingLeft:10}}>
                <Image
                source={require('../../../assets/Logo.png')}
                style={{height:45,width:45}}
                />
           </View>

        </View>
     <View style={styles.titleView}>
        <Text style={styles.title}>Hi {this.state.userName},</Text>
     </View>
   
         <Text style={{fontSize:17,   color:'#3E3E3E'}}>Complete your profile</Text>
         <View style={{marginTop:25}}>
            <StepIndicator
                customStyles={customStyles}
                currentPosition={this.state.currentPosition}
                labels={labels}
                stepCount={3}
              />
         </View>
    
  
     <View style={{}}>
         <TextInput
          style={styles.input}
         placeholder='Mobile Number'
         />
        <TextInput
          style={styles.input}
         placeholder='Email Address'
         />
          <TextInput
          style={styles.input1}
            placeholder='Bio'
            multiline={true}
         />

       
     </View>
     
     <View style={{alignSelf:'center',marginTop:'20%'}}>
         <Button
            title='Continue'
            onPress={()=>RootNavigation.navigate("LocationDetails")}
            buttonStyle={{borderRadius:15,width:"100%",padding:13,backgroundColor:'#427AA1'}}
            titleStyle={{fontFamily:'poppins-medium',fontSize:13}}
            
         />
     </View>
     <View style={{alignSelf:'center',marginTop:10}}>
        <Text style={{color:'#427AA1',fontSize:13,fontFamily:'poppins-medium'}}>Skip</Text>
     </View>

     </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding:25,
    paddingTop:'20%'
  },
  head:{
      fontSize:16,
     color:'#78BE1F',
     fontFamily:'poppins-semiBold'
  },
  title:{
    fontSize:24,
    fontFamily:'poppins-semiBold',
    color:'#3E3E3E'
  },
  titleView:{
    alignSelf:'flex-start',
    marginTop:'10%'
  },
  input:{
    backgroundColor:'#E6E6E6',
    borderRadius:12,
  //   height:50,
    padding:8,
    marginTop:22,
    paddingLeft:15,
    fontSize:11,
    fontFamily:'poppins-regular'
  
},
input1:{
    backgroundColor:'#E6E6E6',
    borderRadius:12,
  //   height:50,
    padding:40,
    // color:'#000',
    marginTop:25,
    paddingLeft:15,
    fontSize:12,
    // height:'60%',
    textAlign:'auto',
    fontFamily:'poppins-regular'
}
 
});
