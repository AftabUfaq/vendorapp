import React from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Sample data
const offers = [
  {
    id: '1',
    name: 'Poco',
    location: 'Berlin, Germany',
    date: '18 Feb - 22 Feb',
    distance: '5.0km from you',
    type: 'weekly Offer',
  },
  {
    id: '2',
    name: 'Poco',
    location: 'Berlin, Germany',
    date: '18 Feb - 22 Feb',
    distance: '5.0km from you',
    discount: '25% Discount',
  },
  {
    id: '3',
    name: 'Cafe Latte',
    location: 'Munich, Germany',
    date: '20 Feb - 25 Feb',
    distance: '2.5km from you',
    type: 'weekly Offer',
  },
];

export default function BrochureScreen() {
  const navigation = useNavigation();

const renderItem = ({ item }) => (
  <View style={{ marginBottom: 24 }}>
    {/* Card */}
    <View style={styles.card}>
      {/* Top Row: Offer tag and Discount tag */}
      <View style={styles.topRow}>
        {item.type && (
          <View style={styles.offerTag}>
            <Text style={styles.offerTagText}>{item.type}</Text>
          </View>
        )}
        {item.discount && (
          <View style={styles.discountTag}>
            <Text style={styles.discountText}>{item.discount}</Text>
          </View>
        )}
      </View>

      {/* Name + location on left, date on right */}
      <View style={styles.nameDateRow}>
        {/* Left: name + location */}
        <View>
          <Text style={styles.businessName}>{item.name}</Text>
          <View style={styles.iconTextRow}>
            <Image
              source={require('../../assets/location.png')}
              style={styles.iconSmall}
            />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>

        {/* Right: date with calendar icon */}
        <View style={styles.iconTextRow}>
          <Image
            source={require('../../assets/calendar.png')}
            style={styles.iconSmall}
          />
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    </View>

    {/* Distance outside the card */}
    <Text style={styles.distanceOutside}>{item.distance}</Text>
  </View>
);



  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Brochure</Text>
      <Text style={styles.subtitle}>A clear overview of local businesses</Text>

      {/* Search bar + Map icon row */}
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search your favourite shop"
            placeholderTextColor="#777"
            style={styles.searchInput}
          />
        </View>

        <TouchableOpacity style={styles.mapButton}>
          <Image source={require('../../assets/maps.png')} style={styles.mapIcon} />
        </TouchableOpacity>
      </View>

      {/* Offers list */}
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
 iconTextRow: {
  flexDirection: 'row',
  alignItems: 'center', // ensures icon and text are vertically centered
  marginTop: 2,
},

iconSmall: {
  width: 18,
  height: 18,
  marginRight: 6, 
  resizeMode: 'contain',
  marginTop: -6

},



  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },

  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },

  // Search row
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  searchContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 50,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },

  searchInput: {
    fontSize: 14,
    color: '#000',
  },

  mapButton: {
    marginLeft: 12,
    backgroundColor: '#000',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mapIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },

  // Card styles
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },

  offerTag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },

  offerTagText: {
    fontSize: 10,
    color: '#333',
  },

  discountTag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },

  discountText: {
    fontSize: 12,
    color: '#333',
  },

  businessName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },

  location: {
    fontSize: 12,
    color: '#555',
    marginBottom: 8,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  date: {
    fontSize: 12,
    color: '#777',
  },

  distance: {
    fontSize: 12,
    color: '#777',
  },
  nameDateRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 8,
},

distanceOutside: {
  fontSize: 12,
  color: '#777',
  marginLeft: 8,  // align with card padding
},

});
