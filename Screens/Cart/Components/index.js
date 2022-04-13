import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Feather, Entypo, MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./style.js";
import Item from "./Cards/ItemCard";

export default class Cart extends React.Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.statusBarHeight} />
        <View style={styles.header}>
          <View>
            <MaterialIcons
              name="arrow-back"
              size={24}
              color="#242424"
              onPress={() => this.props.navigation.goBack()}
            />
          </View>
          <View>
            <Text
              style={{ color: "#003A83", fontWeight: "bold", fontSize: 18 }}
            >
              My Cart
            </Text>
          </View>
          <View>
            <MaterialIcons name="delete" size={24} color="#242424" />
          </View>
        </View>
        <ScrollView>
          <View style={styles.itemsContainer}>
            <Item
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
              quantity={2}
            />
            <Item
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
              quantity={2}
            />
            <Item
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
              quantity={2}
            />
            <Item
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
              quantity={2}
            />
            <Item
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
              quantity={2}
            />
            <Item
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
              quantity={2}
            />
            <Item
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
              quantity={2}
            />
          </View>
        </ScrollView>
        <View style={styles.amount}>
          <Text style={{ color: "#000" }}>
            <Text style={styles.subtotal}>Subtotal: </Text>GHC{" "}
            <Text style={{ fontSize: 25, fontWeight: "700" }}>45001</Text>
          </Text>
          <Text style={{ color: "#000" }}>
            <Text style={styles.subtotal}>Taxes: </Text>GHC{" "}
            <Text style={{ fontSize: 25, fontWeight: "700" }}>40</Text>
          </Text>
        </View>
        <View style={styles.checkoutBox}>
          <Text style={{ fontWeight: "700" }}>
            GHC <Text style={{ fontSize: 28, fontWeight: "700" }}>259</Text>
          </Text>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={{ color: "white" }}>Check Out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
