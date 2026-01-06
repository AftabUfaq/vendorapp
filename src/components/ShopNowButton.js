import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ShopNowButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Shop Now</Text>
      <View style={styles.iconContainer}>
        <Ionicons name="arrow-forward" size={16} color="white" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-between",
    width: 160, // you can adjust width
  },

  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  iconContainer: {
    backgroundColor: "green",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
