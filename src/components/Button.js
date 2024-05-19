import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({ title, func }) => {
  const clickedFunc = () => {
    func();
  };
  return (
    <Pressable onPress={() => clickedFunc()} style={styles.button}>
      <Text style={styles.btnText}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  button: {
    
    backgroundColor: "#AFAFB8",
    borderRadius: 8,
    margin: 10,
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
});
