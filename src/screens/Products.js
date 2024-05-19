import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const CategoryDetail = ({ route }) => {
  const navigation = useNavigation();
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const goToDetailPage = (id) => {
    navigation.navigate("ProductDetail", { productID: id });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => goToDetailPage(item.id)}
            style={styles.productItem}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.priceText} numberOfLines={2}>
              ${item.price}
            </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  productItem: {
    width: 170,
    height: 250,
    backgroundColor: "#D9D9D9",
    padding: 15,
    paddingTop: 15,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: 150,
    width: 140,
    padding: 10,
  },
  text: {
    margin: 5,
    fontSize: 15,
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
});

export default CategoryDetail;
