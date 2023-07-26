import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity} from "react-native";
import React, {useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from 'expo-router';
import PaymentModal from "./Payment";

const Cart = ({route}) => {
  const cartItems = route.params.cartItems;
  const [cartData, setCartData] = useState(cartItems);
  const nav = useNavigation()
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price whenever cartData changes
    setTotalPrice(getTotalPrice());
  }, [cartData]);

  
  const handleOpenPaymentModal = () => {
    setIsPaymentModalVisible(true);
  };
  const handleClosePaymentModal = () => {
    setIsPaymentModalVisible(false);
  };

  const getTotalPrice = () => {
    return cartData.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  };

  const incrementItem = (itemId) => {
    const updatedCart = cartData.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartData(updatedCart);
  };
  const decrementItem = (itemId) => {
    const updatedCart = cartData.map((item) =>
      item.id === itemId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0);
    setCartData(updatedCart);
  };
    const routeHome = () => {
        try{
            nav.navigate('Home');
            console.log('done')
    }
    catch(err){
        console.log(err)
    }
        }

  const CardView = ({ item }) => {
    const quantity = item.quantity || 1;
    return (
      <View style={styles.cart}>
        <Image
           source={item.image}
          style={{ height: 100, width: 100, borderRadius: 60 }}
        ></Image>
        <View
          style={{ height: 120, marginLeft: 20, paddingVertical: 20, flex: 1 }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.name}</Text>
          <Text style={{ fontSize: 14, fontStyle: "italic", color: "gray" }}>
            {item.type}
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 12 }}> R{item.price/100} </Text>
          <View style={{ alignItems: "flex-end", top: -40 }}>
          {/*number of itens in the cart */}
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.quantity}</Text>
            {/*increment and decrement */}
            <View style={styles.plusBtn}>
            <TouchableOpacity onPress={() => decrementItem(item.id)}><Icon name="remove" size={24} color="#fff"></Icon></TouchableOpacity>
            <TouchableOpacity onPress={() => incrementItem(item.id)}><Icon name="add" size={24} color="#fff"></Icon></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ }}>
      <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.1} onPress={routeHome}>
      <Icon name="arrow-back-ios" size={28} color={"black"} />
      </TouchableOpacity>
        <Text style={{ fontSize: 30, marginLeft: 120, color: "black" }}>
          Cart
        </Text>
      </View>
      <View style={{ height: "70%"}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 50 }}
          data={cartData}
        renderItem={CardView}
        keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={{
        backgroundColor: 'black',
          height: "30%",
          borderTopLeftRadius: 70,
          borderTopRightRadius: 70,
          paddingHorizontal: 50,
          top: -40
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "bold", color: 'white' }}>Total price: R{getTotalPrice()/100}</Text>
        </View>
          {/*checkout button */}
        <View style={{backgroundColor: 'white', marginTop: 18, height: '20%', width: '70%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginHorizontal: '15%'}} >
          <TouchableOpacity activeOpacity={0.1} onPress={handleOpenPaymentModal}>
          <Text style={styles.title}>Checkout</Text>
          </TouchableOpacity>
          <PaymentModal isVisible={isPaymentModalVisible} onClose={handleClosePaymentModal} totalPrice={totalPrice}/>
          </View>
      </View>
    </SafeAreaView>
  );
};
export default Cart;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    marginHorizontal: 20,
  },
  cart: {
    height: 150,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  plusBtn: {
    width: 60,
    height: 30,
    backgroundColor: "black",
    borderRadius: 30,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  }
});