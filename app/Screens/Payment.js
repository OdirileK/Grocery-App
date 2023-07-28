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
























// import { useState } from "react";
// import Toast from "react-native-root-toast";
// import { Paystack } from "react-native-paystack-webview";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TextInput,
//   Button,
//   Modal
// } from "react-native";
// export default function PaymentModal({ isVisible, onClose, totalPrice }) {
//   const [pay, setPay] = useState(false);
//   const [billingDetail, setBillingDetail] = useState({
//     billingName: "",
//     billingEmail: "",
//     billingMobile: "",
//     amount: totalPrice,
//   });



//   const handleOnchange = (text, input) => {
//     setBillingDetail((prevState) => ({ ...prevState, [input]: text }));
//   };
//   const handleSubmit = () => {
//     if (
//       billingDetail.billingName &&
//       billingDetail.billingEmail &&
//       billingDetail.billingMobile &&
//       billingDetail.amount
//     ) {
//       setPay(true);
//     } else {
//       Toast.show("Fill in all fields", {
//         duration: Toast.durations.LONG,
//       });
//     }
//   };
//   return (
//     <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
//     <ScrollView>
//         <View style={styles.appBar}>
//           <Text style={styles.appBarTitle}>React Native and Paystack</Text>
//         </View>
//         <View style={styles.body}>
//           <TextInput
//             style={styles.input}
//             placeholder="Billing Name"
//             onChangeText={(text) => handleOnchange(text, "billingName")}
//             value={billingDetail?.billingName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Billing Email"
//             onChangeText={(text) => handleOnchange(text, "billingEmail")}
//             value={billingDetail?.billingEmail}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Billing Mobile"
//             onChangeText={(text) => handleOnchange(text, "billingMobile")}
//             value={billingDetail?.billingMobile}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Amount"
//             onChangeText={(text) => handleOnchange(text, "amount")}
//             value={billingDetail?.amount}
//           />
//           <Text>{billingDetail?.amount}</Text>
//           <Button
//             title="Pay Now"
//             color="#841584"
//             accessibilityLabel="pay now"
//             onPress={handleSubmit}
//           />

//           {pay && (
//             <View style={{ flex: 1 }}>
//               <Paystack
//                 paystackKey='sk_test_35fe4eeb0aff4639546fc811b809bd0db89f29ea'
//                 amount={billingDetail.amount}
//                 billingEmail={billingDetail.billingEmail}
//                 billingMobile={billingDetail.billingMobile}
//                 activityIndicatorColor="green"
//                 onCancel={(e) => {
//                   // handle response here
//                   Toast.show("Transaction Cancelled!!", {
//                     duration: Toast.durations.LONG,
//                   });
//                 }}
//                 onSuccess={(response) => {
//                   // handle response here

//                   const responseObject = response["transactionRef"]["message"];
//                   if (responseObject === "Approved") {
//                     Toast.show("Transaction Approved!!", {
//                       duration: Toast.durations.LONG,
//                     });
//                   }
//                 }}
//                 autoStart={pay}
//               />
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </Modal>
//   );
// }
// const styles = StyleSheet.create({
//   appBar: {
//     backgroundColor: "#fff",
//     height: 95,
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   appBarTitle: {
//     fontSize: 20,
//     fontWeight: "600",
//     color: "#841584",
//   },
//   body: {
//     padding: 10,
//   },
//   input: {
//     borderColor: "black",
//     borderWidth: 2,
//     padding: 10,
//     marginTop: 15,
//   },
// });