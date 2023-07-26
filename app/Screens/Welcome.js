import { Dimensions, StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Food from '../services/Food'

import { useNavigation } from 'expo-router';

// const {width, height} = Dimensions.get('window')

const Welcome = () => {

    const nav = useNavigation()

    const route = () => {
        try{
            nav.navigate('Login');
            console.log('done')
    }
    catch(err){
        console.log(err)
    }
        } 

  return (
   <ImageBackground style={{backgroundColor: 'white'}}>
   {/*Top view */}
        <View style={styles.header}>
        <ImageBackground source={require('../assets/peach.jpg')} style={styles.image} >
            {/* <Text style={{flex: 1, alignItems: 'center', color: 'white', justifyContent: 'center'}}>dnsiocdicdindisk</Text> */}
        </ImageBackground>
    
        </View>
        {/*Bottom view */}
        <View style={styles.details}>
          <View style={{backgroundColor: 'black', marginTop: 30, height: '15%', width: '50%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginHorizontal: '24%'}} >
          <TouchableOpacity activeOpacity={0.1} onPress={route}>
          <Text style={styles.title}>Let's get started!</Text>
          </TouchableOpacity>
          </View>
        </View>
   </ImageBackground>
  )
}

export default Welcome

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '80%'
    },
    image: {
        height: '100%', 
        width: '100%', 
        // borderBottomRightRadius: 120,
    },
    details: {
        backgroundColor: 'white',
        height: '40%',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        top: -80
        
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white', 
        fontWeight: 'bold', 
        fontSize: 25,
      }
})