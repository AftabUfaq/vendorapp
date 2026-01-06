import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import Svg, { Path } from "react-native-svg";

const ChipBackground = ({ active }) => (
  <Svg width="100%" height="100%" viewBox="0 0 120 44">
    <Path
      d="
        M10 0
        H92
        C102 0 102 16 92 16
        H120
        V44
        H10
        C4 44 0 40 0 34
        V10
        C0 4 4 0 10 0
        Z
      "
      fill={active ? "#16A34A" : "#1E1E1E"}
    />
  </Svg>
);


const filters = [
  { label: "All", emoji: "📰" },
  { label: "Gastro", emoji: "🍽️" },
  { label: "Jobs", emoji: "💼" },
  { label: "Events", emoji: "🎉" },
  { label: "Sports", emoji: "⚽" },
  { label: "Music", emoji: "🎵" },
  { label: "Tech", emoji: "💻" },
  { label: "Health", emoji: "🏥" },
  { label: "Offers", emoji: "🔥" },
  { label: "Travel", emoji: "✈️" },
  { label: "Education", emoji: "🎓" },
];

export default function LocalNews() {
  const [active, setActive] = useState("All");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Local News</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {filters.map(item => {
          const isActive = active === item.label;

          return (
            <TouchableOpacity
              key={item.label}
              style={[styles.chip, isActive && styles.activeChip]}
              onPress={() => setActive(item.label)}
            >
              <Text style={[styles.chipText, isActive && styles.activeText]}>
                <Text style={styles.emoji}>{item.emoji}</Text> {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "",
    paddingBottom: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
    paddingHorizontal: 16,
    marginTop: 20,
  },

  row: {
    paddingHorizontal: 16,
    marginTop: 12,
    flexDirection: "row",
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    backgroundColor: "#1E1e1e",
    marginRight: 10,
  },

  activeChip: {
    backgroundColor: "#16A34A",
  },

  chipText: {
    color: "#A1A1AA",
    fontSize: 14,
    fontWeight: "500",
  },

  activeText: {
    color: "#FFFFFF",
  },

  emoji: {
    fontSize: 14,
  },
});
