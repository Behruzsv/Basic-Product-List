import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";

const ProductDetail = () => {
  const route = useRoute();
  const { productID } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productID}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [productID]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.text}>{product.title}</Text>
      <Text style={styles.priceText}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
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
  image: {
    height: 300,
    width: "100%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  priceText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    margin: 5,
  },
});

export default ProductDetail;
