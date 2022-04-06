import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default class Filter extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.shadowProp]}>
        <Image style={styles.image} source={this.props.source} />
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
  },
  shadowProp: {
    shadowColor: "#000",
    elevation: 10,
  },
  image: {
    height: 30,
    width: 30,
  },
});
