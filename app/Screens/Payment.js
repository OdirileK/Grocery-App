import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, TextInput, Linking } from 'react-native';
import axios from 'axios';



const PaymentModal = ({ isVisible, onClose, totalPrice }) => {
  const [amount, setAmount] = useState('');
  const [paymentData, setPaymentData] = useState(null);
  const handlePayment = async () => {
    
    const serverData = {
      email: 'kekanaodirile@gmail.com',
      amount: totalPrice,
    };

    try {
      const response = await axios.post('http://10.255.67.96:5000/initiate-payment', serverData);
      const { data } = response;
      console.log(data);
      setPaymentData(data);

      // If the paymentData contains the authorization_url, open it in the browser
      // if (data.data.authorization_url) {
      //   Linking.openURL(data.data.authorization_url)
      //     .catch((err) => console.error('Error while opening the URL:', err));
      // }
    } catch (error) {
      console.log('Payment initiation error:', error);
    }
  }

  const handleAuthorizationURLPress = () => {
    try {
      Linking.openURL(`${paymentData.data.authorization_url}`);
    } catch (e) {
      console.warn('An error occurred', e);
    }
  };

  return (
    <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <Text>Payment Form</Text>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Initialize payment</Text>
        </TouchableOpacity>
        {paymentData && (
          <TouchableOpacity style={styles.button} onPress={handleAuthorizationURLPress}>
            <Text style={styles.buttonText}>Pay Now</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={{marginTop: 20}}onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
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
    backgroundColor: '#4CAF50',
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