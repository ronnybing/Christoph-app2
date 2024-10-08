import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, Image } from 'react-native';


export default function App() {
  const [page, setPage] = useState(1); // Track which page to display

  // Dishes for the menu (editable)
  const [mainCourseIndex, setMainCourseIndex] = useState(0);
  const [dessertsIndex, setDessertsIndex] = useState(0);
  const [drinksIndex, setDrinksIndex] = useState(0);

  const mainCourses = [
    "Fancy Grilled Salmon",
    "Gourmet Beef Wellington",
    "Herb-Crusted Lamb Chops",
    "Saffron Risotto with Asparagus",
    "Truffle Infused Mushroom Pasta"
  ];

  const desserts = [
    "Luxurious Chocolate Lava Cake",
    "Decadent Tiramisu",
    "Crème Brûlée",
    "Raspberry Cheesecake",
    "Artisan Gelato Selection"
  ];

  const drinks = [
    "Vintage Red Wine",
    "Craft Cocktails",
    "Freshly Brewed Iced Tea",
    "Sparkling Water with Lemon",
    "Classic Mojito"
  ];

  // Welcome Page (Page 1)
  const WelcomePage = () => (
    <View style={styles.page}>
      <Image 
        source={{ uri: 'calculator/savanna.jpg' }} 
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Welcome to Christoph's</Text>
      <TouchableOpacity style={styles.button} onPress={() => setPage(2)}>
        <Text style={styles.buttonText}>Go to Menu</Text>
      </TouchableOpacity>
    </View>
  );

  // Menu Page (Page 2)
  const MenuPage = () => (
    <ScrollView contentContainerStyle={styles.page}>
      <Text style={styles.heading}>Menu</Text>
      
      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Main Courses</Text>
        <Text style={styles.widgetText}>{mainCourses[mainCourseIndex]}</Text>
      </View>
      
      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Desserts</Text>
        <Text style={styles.widgetText}>{desserts[dessertsIndex]}</Text>
      </View>

      <View style={styles.widget}>
        <Text style={styles.widgetTitle}>Drinks</Text>
        <Text style={styles.widgetText}>{drinks[drinksIndex]}</Text>
      </View>

      <View style={styles.menuButtonsContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => setPage(1)}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        {/* Space between buttons */}
        <View style={styles.spacer} />

        <TouchableOpacity style={styles.editButton} onPress={() => setPage(3)}>
          <Text style={styles.buttonText}>Edit Menu</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );

  // Edit Menu Page (Page 3)
  const EditMenuPage = () => (
    <View style={styles.page}>
      <Text style={styles.heading}>Edit Menu</Text>

      <View style={styles.editWidget}>
        <Text style={styles.editTitle}>Edit Main Course</Text>
        {mainCourses.map((course, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.editOptionButton} 
            onPress={() => setMainCourseIndex(index)}>
            <Text style={styles.buttonText}>{course}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.editWidget}>
        <Text style={styles.editTitle}>Edit Desserts</Text>
        {desserts.map((dessert, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.editOptionButton} 
            onPress={() => setDessertsIndex(index)}>
            <Text style={styles.buttonText}>{dessert}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.editWidget}>
        <Text style={styles.editTitle}>Edit Drinks</Text>
        {drinks.map((drink, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.editOptionButton} 
            onPress={() => setDrinksIndex(index)}>
            <Text style={styles.buttonText}>{drink}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.menuButtonsContainer}>
        <TouchableOpacity style={styles.backToMenuButton} onPress={() => setPage(2)}>
          <Text style={styles.buttonText}>Back to Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {page === 1 && <WelcomePage />}
      {page === 2 && <MenuPage />}
      {page === 3 && <EditMenuPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  widget: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  widgetTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  widgetText: {
    fontSize: 18,
  },
  button: {
    backgroundColor: '#D3D3D3', 
    paddingVertical: 12,
    paddingHorizontal: 30, 
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: 'black', 
    fontSize: 16,
  },
  backButton: {
    backgroundColor: '#D3D3D3', 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 10,
    marginVertical: 5,
    width: '40%', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 20,
  },
  editButton: {
    backgroundColor: '#D3D3D3', // Light grey color
    paddingVertical: 10, // Original height for edit button
    paddingHorizontal: 20, // Adequate horizontal padding
    borderRadius: 10,
    marginVertical: 5,
    width: '40%', // Consistent width with back button
    alignItems: 'center',
  },
  menuButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  spacer: {
    width: 20, // Space between buttons
  },
  editWidget: {
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  editTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  editOptionButton: {
    backgroundColor: '#D3D3D3', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 10,
    marginVertical: 5,
    width: '80%', 
    alignItems: 'center',
  },
  backToMenuButton: {
    backgroundColor: '#D3D3D3', 
    paddingVertical: 10, 
    paddingHorizontal: 15, 
    borderRadius: 10,
    marginVertical: 5,
    width: '40%', 
    alignItems: 'center',
  },
});