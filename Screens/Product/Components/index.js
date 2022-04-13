import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Feather, Entypo, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./style.js";

export default class Product extends React.Component {
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
              Filly Commerce
            </Text>
          </View>
          <View>
            <MaterialIcons
              style={{ backgroundColor: "red", padding: 3, borderRadius: 50 }}
              name="favorite"
              size={20}
              color="#fff"
            />
          </View>
        </View>

        <View style={styles.sliderContainer}>
          <SliderBox
            images={[
              require("../../../assets/air-max.png"),
              require("../../../assets/shirt.png"),
            ]}
            sliderBoxHeight="100%"
          />
        </View>
        <ScrollView style={styles.details}>
          <View>
            <Text style={styles.productName}>Nike Air Max</Text>
            <Text style={styles.productCaption}>
              The best sneaker for indoor and outdoor training.
            </Text>
          </View>
          <View style={styles.productSize}>
            <Text style={styles.title}>Size: </Text>
            <Text style={[styles.size, { backgroundColor: "#FABB92" }]}>
              UK 7
            </Text>
            <Text style={styles.size}>UK 8</Text>
            <Text style={styles.size}>UK 9</Text>
            <Text style={styles.size}>UK 10</Text>
          </View>
          <View style={styles.productSize}>
            <Text style={styles.title}>Available Colors: </Text>
            <Text
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#3A81CF",
                borderRadius: 50,
                borderColor: "#C4D6EC",
                borderWidth: 5,
              }}
            ></Text>
            <Text
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#FE6601",
                borderRadius: 50,
                borderColor: "#F7CFB6",
                borderWidth: 5,
              }}
            ></Text>
            <Text
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#D80C58",
                borderRadius: 50,
                borderColor: "#EDB8CD",
                borderWidth: 5,
              }}
            ></Text>
            <Text
              style={{
                width: 30,
                height: 30,
                backgroundColor: "#12810A",
                borderRadius: 50,
                borderColor: "#BAD6B9",
                borderWidth: 5,
              }}
            ></Text>
          </View>
        </ScrollView>
        <View style={{ backgroundColor: "#F4F4F6" }}>
          <View style={styles.checkoutBox}>
            <Text style={{ fontWeight: "700" }}>
              GHC <Text style={{ fontSize: 28, fontWeight: "700" }}>259</Text>
            </Text>
            <TouchableOpacity style={styles.checkoutBtn}>
              <Text style={{ color: "#003A83", fontWeight: "700" }}>
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
