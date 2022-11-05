import React from "react";
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Image, Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const home = './assets/home-bg.jpg';
const kids = './assets/kids-bg.jpg';
const feedGame = './assets/feed-game-bg.jpg'

const buttonPlay = './assets/button-play.png'
const snack = './assets/button-snack.png'
const buttonKids = './assets/button-kids.png';
const buttonParents = './assets/button-parents.png';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="KidsArea" component={KidsArea} />
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
      <ImageBackground source={require(home)} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <TouchableOpacity
        style={styles.buttonKids}
        onPress={() => navigation.navigate('KidsArea')}
      >
          <Image source={require(buttonKids)}/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonParents}
        onPress={() => navigation.navigate('ParentsArea')}
      >
          <Image source={require(buttonParents)}/>
      </TouchableOpacity>
    </View>
  );
};

const KidsArea = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(kids)} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <TouchableOpacity
        style={styles.play}
        onPress={() => navigation.navigate('Feed')}
      >
          <Image source={require(buttonPlay)}/>
      </TouchableOpacity>
    </View>
  );
};

const Feed = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(feedGame)} resizeMode="cover" style={styles.image}>
      </ImageBackground>
      <TouchableOpacity
        style={styles.snack}
        onPress={snackMessage}
      >
          <Image source={require(snack)}/>
      </TouchableOpacity>
    </View>
  );
}

function snackMessage() {
  Alert.alert('Testando!')
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
  play: {
    position: "absolute",
    top: 410,
    left: 50
  },
  snack: {
    position: "absolute",
    top: 545,
    left: 275
  },
  buttonKids: {
    position: "absolute",
    top: 550,
    left: 20
  },
  buttonParents: {
    position: "absolute",
    top: 550,
    right: 20
  }
});

export default App;