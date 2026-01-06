import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Header() {
  const notificationCount = 3; // example badge count
  const userImage = "https://randomuser.me/api/portraits/men/75.jpg"; // replace with real image

  return (
    <View style={styles.container}>
      {/* Location */}
      
      <View style={styles.mapContainer}>
  <View style={styles.iconWrapper}>
    <Ionicons name="location-outline" size={16} color="#fff" />
  </View>
  <View style={styles.locationContainer}>
        <Ionicons name="location-outline" size={16} color="#000" style={{ marginRight: 6 }} />
        <Text style={styles.locationText}>Berlin, Germany</Text>
      </View>
</View>
      

      {/* Right Icons */}
      <View style={styles.right}>
        {/* Notification */}
        <TouchableOpacity style={styles.iconWrapper2}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* User */}
        <TouchableOpacity style={styles.iconWrapper}>
          <Image source={{ uri: userImage }} style={styles.userImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  mapContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 20,
  },
  locationText: {
    color: "#000",
    fontWeight: "600",
    fontSize: 14,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconWrapper2: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "red",
    width: 16,
    height: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  userImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  iconWrapper: {
    width: 32,           // size of the circle
    height: 32,
    borderRadius: 16,    // half of width/height for perfect circle
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
