import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class Product extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("Product");
        }}
        style={[styles.container, styles.shadowProp]}
      >
        <View style={styles.top}>
          <View style={styles.discount}>
            <Text>40%</Text>
          </View>

          <View style={styles.favorite}>
            <MaterialIcons name="favorite" size={24} color="red" />
          </View>
        </View>
        <View style={styles.main}>
          <Image style={styles.image} source={this.props.source} />
          <Text style={styles.productName}>{this.props.name}</Text>
          <Text style={styles.price}>
            <Text style={styles.currency}>GHC</Text> {this.props.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: "48%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
  },
  shadowProp: {
    shadowColor: "#000",
    elevation: 5,
  },
  top: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  main: {
    alignItems: "center",
  },
  productName: {
    fontSize: 18,
    color: "#9BB1CE",
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    color: "#003A83",
    fontWeight: "700",
  },
  currency: {
    fontSize: 13,
    color: "#9BB1CE",
  },
});
