import React from "react";
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Example story data
const storyData = [
  { id: 1, label: "Alice", image: "https://randomuser.me/api/portraits/women/1.jpg", icon: "heart" },
  { id: 2, label: "Bob", image: "https://randomuser.me/api/portraits/men/2.jpg", icon: "star" },
  { id: 3, label: "Cara", image: "https://randomuser.me/api/portraits/women/3.jpg", icon: "add" },
  { id: 4, label: "David", image: "https://randomuser.me/api/portraits/men/4.jpg", icon: "alarm" },
  { id: 5, label: "Eva", image: "https://randomuser.me/api/portraits/women/5.jpg", icon: "checkmark" },
  { id: 6, label: "Frank", image: "https://randomuser.me/api/portraits/men/6.jpg", icon: "flash" },
  { id: 7, label: "Gina", image: "https://randomuser.me/api/portraits/women/7.jpg", icon: "heart" },
  { id: 8, label: "Henry", image: "https://randomuser.me/api/portraits/men/8.jpg", icon: "star" },
];

export default function Stories() {
  return (
    <View>
      <Text style={styles.title}>Stories</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {storyData.map((story) => (
          <View key={story.id} style={styles.storyContainer}>
            {/* Story Image */}
            <Image source={{ uri: story.image }} style={styles.storyImage} />

            {/* Label bottom-left */}
            <Text style={styles.storyLabel}>{story.label}</Text>

            {/* Icon top-right */}
            <TouchableOpacity style={styles.iconOverlay}>
              <Ionicons name={story.icon} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 16,
    marginTop: 20,
  },
  row: {
    paddingHorizontal: 16,
    gap: 16,
    marginTop: 12,
  },
  storyContainer: {
    width: 100,       // Increased width
    height: 100,      // Increased height
    borderRadius: 16,
    overflow: "hidden",
    marginRight: 8,
  },
  storyImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  storyLabel: {
    position: "absolute",
    bottom: 8,
    left: 8,
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  iconOverlay: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
});
