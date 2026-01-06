import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Header from '../components/Header'
import SearchBar from "../components/SearchBar";
import Stories from "../components/Stories";
import SpecialOffers from "../components/SpecialOffers";
import LocalNews from "../components/LocalNews";
import Discover from "../components/Discover";
import { SafeAreaView } from "react-native-safe-area-context";
import ShopNowButton from "../components/ShopNowButton";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} >

      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <SearchBar />
        <Stories />
        <SpecialOffers />
        <LocalNews />
        <Discover />
        <View style={styles.centerButtonWrapper}>
          <ShopNowButton />
        </View>
      </ScrollView>


      {/* TODO: Bottom Navigation */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5f5f5",
  },
  centerButtonWrapper: {
  alignItems: "center",
  marginTop: 20,
  marginBottom: 40,  // spacing from bottom
},

});
