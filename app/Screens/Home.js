import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList } from "react-native-gesture-handler";
import foodData from "../services/Food";
import { Dimensions } from "react-native";
import { useNavigation } from "expo-router";
import {handleAddToCart} from '../Redux/cartSlice'
import { UseSelector, useDispatch } from "react-redux";


//getting size from the screen width
const { width } = Dimensions.get("screen");
const cardWidth = width / 2 - 20;

const Home = () => {
  const nav = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([])
  const dispatch = useDispatch()

  // Filter the data based on the search query
  const filteredData = foodData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (foodData) => {
    const existingItem = cartItems.find((item) => item.id === foodData.id);
    try{
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === foodData.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...foodData, quantity: 1 }]);
    }
  }
  catch (err) {
    console.log(err)
  }
    
  };


  // Cards view
  const renderCard = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => nav.navigate("Details", { foodItem: item })}
      >
        <View style={{ alignItems: "center", top: -20 }}>
          <Image
            source={item.image}
            style={{ height: 120, width: 120, borderRadius: 60 }}
          />
        </View>
        {/* Inside the card */}
        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 14, marginTop: 2 }}>{item.type}</Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>R{item.price/100}</Text>
          <TouchableOpacity
            style={styles.addToCart} onPress={() => addToCart(item)} >
            <Icon name="add" size={20} color={"white"} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", image: require('../assets/background.jpg'), }}>
    
      {/* Header View */}
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 28, marginTop: 35 }}>Hello,</Text>
           
          </View>
          <Text style={{ marginTop: 10, fontSize: 22, color: "gray" }}>
            What are you looking for today?
          </Text>
        </View>
        <TouchableOpacity onPress={() => nav.navigate('Cart', { cartItems: cartItems })}>
          <Icon name="shopping-cart" size={28} />
          
        </TouchableOpacity>
        
      </View>
     

      {/* Search View */}
      <View
        style={{ marginTop: 0, flexDirection: "row", paddingHorizontal: 20 }}
      >
        <View style={styles.inputContainer}>
          {/* Insert search icon here */}
          <TextInput
            style={{ flex: 1, fontSize: 18, backgroundColor: "#D3D3D3" }}
            placeholder="Search ..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          <Icon name="search" size={30} style={{ justifyContent: "center" }} />
        </View>
      </View>
       
      {/* List items view */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={filteredData} // Render the filtered data
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // backgroundColor: 'black',
    height: 150
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#D3D3D3",
    paddingHorizontal: 20,
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 12,
    backgroundColor: "white",
  },
  addToCart: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
