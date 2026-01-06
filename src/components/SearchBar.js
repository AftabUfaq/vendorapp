import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      {/* Search input with icon */}
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#6B7280" style={{ marginRight: 8 }} />
        <TextInput
          placeholder="Search everything here"
          placeholderTextColor="#6B7280"
          style={styles.input}
        />
      </View>

      {/* Rounded icon on the right */}
      <TouchableOpacity style={styles.roundedIcon}>
        <Ionicons name="options-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 12,
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 14,
  },
  roundedIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
  },
});
