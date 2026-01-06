import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Discover() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.title}>Discover</Text>

      {/* Grid layout */}
      <View style={styles.gridRow}>
        {/* Left big card */}
        <ImageBackground
          source={{ uri: "https://picsum.photos/500/800?random=1" }}
          style={styles.bigCard}
          imageStyle={{ borderRadius: 16 }}
        >
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </TouchableOpacity>
        </ImageBackground>

        {/* Right column */}
        <View style={styles.rightColumn}>
          <ImageBackground
            source={{ uri: "https://picsum.photos/300/200?random=2" }}
            style={styles.smallCardTop}
            imageStyle={{ borderRadius: 16 }}
          >
            <TouchableOpacity style={styles.iconContainerSmall}>
              <Ionicons name="arrow-forward" size={16} color="white" />
            </TouchableOpacity>
          </ImageBackground>

          <ImageBackground
            source={{ uri: "https://picsum.photos/300/150?random=3" }}
            style={styles.smallCardBottom}
            imageStyle={{ borderRadius: 16 }}
          >
            <TouchableOpacity style={styles.iconContainerSmall}>
              <Ionicons name="arrow-forward" size={16} color="white" />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  gridRow: {
    flexDirection: "row",
    gap: 12,
    flex: 1,
  },

  bigCard: {
    flex: 1,
    justifyContent: "flex-start",
  },

  rightColumn: {
    flex: 1,
    justifyContent: "space-between",
  },

  smallCardTop: {
    height: 120,
    justifyContent: "flex-start",
  },

  smallCardBottom: {
    height: 80,
    justifyContent: "flex-start",
  },

  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "green",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainerSmall: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "green",
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
