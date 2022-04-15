import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,ScrollView,Image } from 'react-native';

export default function Splash() {
    return (
           <View style={styles.container}>
              <Image
                source={require('../../assets/Rectangle.png')}
                style={{height:100,width:100}}

               />
             
           </View>
        );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#78BE1F',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
        paddingTop:'17%'
      },

    })