import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./style.js";
import FilterCard from "./Cards/filterCard";
import ProductCard from "./Cards/ProductCard";

export default class Home extends React.Component {
  state = {
    sortValue: "",
  };
  render() {
    let { sortValue } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Feather name="menu" size={24} color="#242424" />
          </View>
          <View>
            <Text
              style={{ color: "#003A83", fontWeight: "bold", fontSize: 18 }}
            >
              Filly Commerce
            </Text>
          </View>
          <View>
            <Feather name="search" size={24} color="#242424" />
          </View>
        </View>
        <View style={styles.filterView}>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                alignContent: "center",
                color: "#0D0F21",
                fontWeight: "bold",
                fontSize: 23,
              }}
            >
              Our Products
            </Text>
          </View>
          <Picker
            selectedValue={sortValue}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ sortValue: itemValue })
            }
            mode="dropdown"
            style={{ width: "45%" }}
          >
            <Picker.Item
              label="Sort by"
              value="sort by"
              style={{ color: "grey" }}
            />
          </Picker>
        </View>
        <View style={styles.filterScroll}>
          <FilterCard
            text="Sneakers"
            source={require("../../../assets/sneakers.png")}
          />
          <FilterCard
            text="Shirts"
            source={require("../../../assets/shirt.png")}
          />
          <FilterCard
            text="Watches"
            source={require("../../../assets/watch.png")}
          />
        </View>
        <View style={styles.cart}>
          <Entypo
            style={{
              backgroundColor: "#003A83",
              padding: 15,
              borderRadius: 50,
            }}
            name="shopping-cart"
            size={40}
            color="white"
            onPress={() => {
              this.props.navigation.navigate("Cart");
            }}
          />
        </View>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.productRow}>
            <ProductCard
              navigation={this.props.navigation}
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
            />
            <ProductCard
              navigation={this.props.navigation}
              name="TM Lewin"
              price="250.00"
              source={require("../../../assets/shirt.png")}
            />
          </View>
          <View style={styles.productRow}>
            <ProductCard
              navigation={this.props.navigation}
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
            />
            <ProductCard
              navigation={this.props.navigation}
              name="TM Lewin"
              price="250.00"
              source={require("../../../assets/shirt.png")}
            />
          </View>
          <View style={styles.productRow}>
            <ProductCard
              navigation={this.props.navigation}
              name="Nike Air Max"
              price="250.00"
              source={require("../../../assets/air-max.png")}
            />
            <ProductCard
              navigation={this.props.navigation}
              name="TM Lewin"
              price="250.00"
              source={require("../../../assets/shirt.png")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
