import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
import Home from "./Screens/Home";
import Welcome from "./Screens/Welcome";
import Details from "./Screens/Details";
import Cart from "./Screens/Cart";
import Login from "./Screens/Login";
import Payment from "./Screens/Payment";
import store from './store'
import { Provider } from "react-redux";
import AuthorizationScreen from './Screens/AuthorizationScreen';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
   <Provider store={store}>
    <Stack.Navigator style={styles.main}>
    {/* <Stack.Screen options={{ headerShown: false}} name="Welcome" component={Welcome}/>
    <Stack.Screen options={{ headerShown: false}} name="Login" component={Login}/> */}
      <Stack.Screen options={{ headerShown: false}} name="Home" component={Home}/>
      <Stack.Screen options={{ headerShown: false}} name="Details" component={Details}/>
      <Stack.Screen options={{ headerShown: false}} name="Cart" component={Cart}/>
      <Stack.Screen options={{ headerShown: false}} name="Payment" component={Payment}/>
      <Stack.Screen name="AuthorizationScreen" component={AuthorizationScreen} />
    </Stack.Navigator>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

export default App;