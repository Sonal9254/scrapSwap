
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView, } from 'react-native';
import { Button,Image } from 'react-native-elements';
import * as RootNavigation from "../../RootNavigation"


export default class SignUp extends React.Component {
    constructor(props) {
      super(props);
    }
    
  
 render() {

  return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
   
        <View style={{alignSelf:'center',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={styles.head}>Scrap Swap</Text>
            <View style={{paddingLeft:10}}>
                <Image
                source={require('../../assets/Logo.png')}
                style={{height:45,width:45}}
                />
            </View>

        </View>
     <View style={styles.titleView}>
        <Text style={styles.title}>Sign Up</Text>
     </View>
     <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
         <Text style={{fontSize:12,color:'#000',fontFamily:'poppins-regular'}}>Not registered yet?</Text>
         <Text style={{fontSize:13,color:'#427AA1',fontFamily:'poppins-semiBold'}}> Create an Account</Text>
     </View>
     <View style={{}}>
     <TextInput
          style={styles.input}
          placeholder='Name'
         />
         <TextInput
          style={styles.input}
          placeholder='Username'
         />
        <TextInput
          style={styles.input}
          placeholder='Password'
         />
          <TextInput
          style={styles.input}
          placeholder='Confirm Password'
         />
         

       
     </View>
     <View style={{alignSelf:'center',marginTop:50}}>
         <Button
            title='Sign Up'
            onPress={()=>RootNavigation.navigate("PersonalDetails")}
            buttonStyle={{borderRadius:15,width:"100%",padding:10,backgroundColor:'#427AA1'}}
            titleStyle={{fontFamily:'poppins-medium',fontSize:13}}
            
         />
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
    padding:20,
    paddingTop:'17%'
  },
  head:{
      fontSize:16,
     color:'#78BE1F',
     fontFamily:'poppins-semiBold'
  },
  title:{
    fontSize:29,
    fontFamily:'poppins-semiBold',
    color:'#3E3E3E'


  },
  titleView:{
    alignSelf:'flex-start',
    marginTop:'25%'
  },
  input:{
      backgroundColor:'#E6E6E6',
      borderRadius:12,
      padding:8,
      marginTop:32,
      paddingLeft:15,
      fontSize:12,
      fontFamily:'poppins-regular'
  }
});
