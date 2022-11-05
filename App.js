import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const background = './assets/Marketing.jpg';
const play = './assets/Play.png'
const feed = './assets/Feed.jpg'

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <MyStack />
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(background)} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Feed')}
      >
          <Image source={require(play)}/>
      </TouchableOpacity>
    </View>
  );
};

const Feed = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(feed)} resizeMode="cover" style={styles.image}>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  button: {
    position: "absolute",
    top: 410,
    left: 50,
  }
});

export default App;