import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { WalkthroughAppConfig } from "./WalkthroughAppConfig";

const WalkthroughScreen = () => {
  const slides = WalkthroughAppConfig.map((screenSpec, index) => {
    return {
      key: `${index}`,
      text: screenSpec.description,
      title: screenSpec.title,
      image: screenSpec.icon,
    };
  });

  const _renderItem = ({ item, dimensions }) => (
    <View style={[styles.container, dimensions]}>
      <Image
        style={styles.image}
        source={item.image}
        size={100}
        color="white"
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  return (
    <AppIntroSlider
      data={slides}
      slides={slides}
      renderItem={_renderItem}
      //Handler for the done On last slide
      showSkipButton={false}
      showDoneButton={true}
      onDone={() => {
        console.log("done");
      }}
      showNextButton={false}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 25,
    color: "white",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "white",
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 60,
    tintColor: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  button: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
});

export default WalkthroughScreen;
