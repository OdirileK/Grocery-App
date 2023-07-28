import { StyleSheet, Text, View, SafeAreaView, Image, Button, TouchableOpacity} from "react-native";
import React, {useState, useEffect } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from 'expo-router';
import PaymentModal from "./Payment";
import { useDispatch, useSelector } from "react-redux";

const Cart = ({route}) => {
  const cartItems = route.params.cartItems;
  const [cartData, setCartData] = useState(cartItems);
  const nav = useNavigation()
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);


  const {cartList, total} = useSelector((store) => store.cart)

  useEffect(() => {
    setTotalPrice(total);
  }, []);

  
  const handleOpenPaymentModal = () => {
    setIsPaymentModalVisible(true);
  };
  const handleClosePaymentModal = () => {
    setIsPaymentModalVisible(false);
  };

  const CardView = ({ item }) => {
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
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>x {item.quantity}</Text>
            
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ }}>
      <View style={styles.header}>
      <TouchableOpacity activeOpacity={0.1} onPress={() => nav.navigate('Home')}>
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
          data={cartList}
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
          <Text style={{ fontSize: 25, fontWeight: "bold", color: 'white' }}>Total price: R{total/100}</Text>
        </View>
          {/*checkout button */}
        <View style={{backgroundColor: 'white', marginTop: 18, height: '20%', width: '70%', justifyContent: 'center', alignItems: 'center', borderRadius: 25, marginHorizontal: '15%'}} >
          <TouchableOpacity activeOpacity={0.1} onPress={handleOpenPaymentModal}>
          <Text style={styles.title}>Checkout</Text>
          </TouchableOpacity>
          <PaymentModal isVisible={isPaymentModalVisible} onClose={handleClosePaymentModal} />
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