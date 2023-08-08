import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import { clearCart } from '../Redux/cartSlice';
import { useNavigation } from 'expo-router';
import { useDispatch } from 'react-redux';

const AuthorizationScreen = ({ route }) => {
  const { authorizationURL } = route.params;
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const handlePaymentSuccess = () => {
    dispatch(clearCart()); // Dispatch the clearCart action to clear the cart
    navigation.navigate('Home'); // Navigate back to the home screen
  };


  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: authorizationURL }}
        style={styles.webView}
        startInLoadingState
        scalesPageToFit
        javaScriptEnabled
        domStorageEnabled
      />
       <Button title="Clear Cart and Go Back" onPress={handlePaymentSuccess} style={{}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});

export default AuthorizationScreen;
