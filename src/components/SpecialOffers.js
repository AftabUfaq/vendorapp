import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const offerImage = { uri: "https://picsum.photos/600/300" };

export default function SpecialOffers() {
  return (
    <View>
      <Text style={styles.title}>Special Offers</Text>

      <ImageBackground
        source={offerImage}
        style={styles.card}
        imageStyle={styles.image}
      >
        {/* Top right icons */}
        <View style={styles.topRight}>
          <View style={styles.mergedPill}>
            <View style={styles.pillSection}>
              <Ionicons name="flame" size={14} color="#fff" />
              <Text style={styles.pillText}>10</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.pillSection}>
              <Ionicons name="water" size={14} color="#fff" />
            </View>
          </View>

          <Ionicons
            name="arrow-up-outline"
            size={18}
            color="#fff"
            style={styles.arrow}
          />
        </View>


        {/* Bottom left text */}
        <View style={styles.textContainer}>
          <Text style={styles.offerTitle}>Vitaker Jahresstart</Text>
          <Text style={styles.offerLocation}>Bremen</Text>
        </View>

        {/* Dots ON IMAGE */}
        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
      </ImageBackground>
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

  card: {
    marginHorizontal: 16,
    marginTop: 12,
    height: 190,
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    borderRadius: 20,
  },

  /* Top Right */
topRight: {
  position: "absolute",
  top: 14,
  right: 14,
  flexDirection: "row",
  alignItems: "center",
},

mergedPill: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FF8C3A",
  borderRadius: 18,
  paddingHorizontal: 6,
  height: 34,
},

pillSection: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 10,
},

pillText: {
  color: "#fff",
  fontWeight: "700",
  fontSize: 13,
  marginLeft: 4,
},

divider: {
  width: 1,
  height: 16,
  backgroundColor: "rgba(255,255,255,0.35)",
},

arrow: {
  marginLeft: 10,
},


  /* Text */
  textContainer: {
    position: "absolute",
    left: 16,
    bottom: 38,
  },

  offerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  offerLocation: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
    marginTop: 2,
  },

  /* Dots */
  dots: {
    position: "absolute",
    bottom: 14,
    alignSelf: "center",
    flexDirection: "row",
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    opacity: 0.6,
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: "#3CB371",
    opacity: 1,
  },
});
