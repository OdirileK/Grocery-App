import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, Linking, Image } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from 'axios';
import { useNavigation } from 'expo-router';
import { useDispatch, useSelector } from "react-redux";



const PaymentModal = ({ isVisible, onClose, navigation  }) => {
  // const [amount, setAmount] = useState('');
  const [paymentData, setPaymentData] = useState(null);

  const navigate = useNavigation()
  const { total} = useSelector((store) => store.cart)

  const handlePayment = async () => {
    
    const serverData = {
      email: 'kekanaodirile@gmail.com',
      amount: total,
    };

    try {
      const response = await axios.post('http://10.255.67.96:5000/initiate-payment', serverData);
      const { data } = response;
      // console.log(data);
      setPaymentData(data);
      
    } catch (error) {
      console.log('Payment initiation error:', error);
    }
  }

  const handleAuthorizationURLPress = () => {
    try {
      navigate.navigate('AuthorizationScreen', {
        authorizationURL: paymentData.data.authorization_url,
      });
    } catch (e) {
      console.warn('An error occurred', e);
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
       <Image source={require('../assets/pay.jpg')} style={{height: '60%', width: '100%', justifyContent:'center'}}></Image>
      <View style={styles.modalContainer}>
       
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Initialize payment</Text>
        </TouchableOpacity>
        {paymentData && (
          <TouchableOpacity style={styles.button} onPress={handleAuthorizationURLPress}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={{ justifyContent: 'center', top: '80%'}}onPress={onClose}>
        <Icon name="close" size={30} style={{ justifyContent: "center" }} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
export default PaymentModal;


