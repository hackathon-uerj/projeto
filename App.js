import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const background = './assets/Marketing.jpg';
const play = './assets/Play.png'

const MyStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
  );
};

const App = () => {
  return (
  <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(background)} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <TouchableOpacity
        style={styles.button}
        onPress={navigation.navigate('Feed')}
      >
          <Image source={require(play)}/>
      </TouchableOpacity>
    </View>
  );
};

const Feed = () => {
  return (
      <Text>Hello Navigation!</Text>
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