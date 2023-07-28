// AuthorizationScreen.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const AuthorizationScreen = ({ route }) => {
  const { authorizationURL } = route.params;

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
