import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home";
import ProductsScreen from "./src/screens/Products";
import ProductDetailScreen from "./src/screens/ProductDetail";
import { StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Kategori Listesi",
            headerStyle: {
              backgroundColor: "#070089",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 23,
            },
          }}
          style={styles.homeTitle}
        />
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={{
            title: "Urun Listesi",
            headerStyle: {
              backgroundColor: "#070089",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 23,
            },
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
          options={{
            title: "Urun Detay",
            headerStyle: {
              backgroundColor: "#070089",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 23,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeTitle: {
    flex: 1,
    backgroundColor: "red",
  },
});
