import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

const Details = ({ route }) => {
  const { foodItem } = route.params;

  return (
    <SafeAreaView style={{ backgroundColor: "black" }} >
      <View style={styles.header} >
      <ImageBackground source={require('../assets/vegetables-with-salt-corn-cob.jpg')} style={{width: '100%', height: '100%'}}>
      </ImageBackground>
      </View>

      <View style={styles.card}>
        {/*Text Views*/}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            marginHorizontal: 20,
            paddingBottom: 2
          }}
        >
        {/*Image View */}
        <View style={{ alignItems: "center", top: -200, }}>
          <Image
            source={foodItem.image}
            style={{ height: 300, width: 300, borderRadius: 150, backgroundColor: 'black'}}
          />
        </View>
        <View style={{top: -160}}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{foodItem.name}</Text>
        <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              R{foodItem.price}
            </Text>
            </View>
        <Text style={{ fontSize: 20, marginTop: 4, color: "gray" }}>
          {foodItem.type}
        </Text>
        <Text style={{marginTop: 10}}>{foodItem.description}
          </Text>          
      </View>
        </View>
        
      </View>
      
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    height: "30%",
  },
  card: {
    height: "80%",
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 25,
  },
  priceTag: {
    backgroundColor: 'black',
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderRadius: 25,
    marginHorizontal:300
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: {fontWeight: 'bold', fontSize: 28},
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
    
    
});
