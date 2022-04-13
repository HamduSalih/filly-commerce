import * as React from "react";
import { View, StyleSheet, Text, Image, } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export default class Item extends React.Component {
  render() {
    return (
      <View style={[styles.container, styles.shadowProp]}>
        <View style={styles.left}>
          <Image style={styles.image} source={this.props.source} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.productName}>{this.props.name}</Text>
          <Text style={styles.price}>
            <Text style={styles.currency}>GHC</Text> {this.props.price}
          </Text>
        </View>
        <View style={styles.right}>
          <MaterialCommunityIcons
            style={styles.minusIcon}
            name="minus"
            size={14}
            color="black"
          />
          <Text style={{ textAlign: "center", padding: 3 }}>
            {this.props.quantity.toString()}
          </Text>
          <MaterialCommunityIcons
            style={styles.plusIcon}
            name="plus"
            size={14}
            color="black"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 15,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  shadowProp: {
    shadowColor: "#000",
    elevation: 5,
  },
  image: {
    height: 70,
    width: 70,
  },
  middle: {
    flexDirection: "column",
    justifyContent: "center",
  },
  right: {
    flexDirection: "column",
  },
  productName: {
    fontSize: 18,
    color: "#9BB1CE",
    fontWeight: "600",
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    color: "#003A83",
    fontWeight: "700",
    textAlign: "center",
  },
  currency: {
    fontSize: 13,
    color: "#9BB1CE",
  },
  minusIcon: {
    padding: 2,
    shadowColor: "#000",
    elevation: 0.2,
    borderRadius: 50,
  },
  plusIcon: {
    padding: 2,
    shadowColor: "#FABB92",
    elevation: 0.2,
    borderRadius: 50,
  },
});
