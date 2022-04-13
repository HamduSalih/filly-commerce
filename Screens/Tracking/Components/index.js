import * as React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import {
  Feather,
  Entypo,
  MaterialIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { styles } from "./style.js";

export default class Tracking extends React.Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mapContainer}>
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
                Tracking
              </Text>
            </View>
            <View>
              {/* <MaterialIcons
              style={{ backgroundColor: "red", padding: 3, borderRadius: 50 }}
              name="favorite"
              size={20}
              color="#fff"
            /> */}
            </View>
          </View>
          <MapView
            initialRegion={{
              latitude: 5.6604616,
              longitude: -0.0077599,
              latitudeDelta: 0.0522,
              longitudeDelta: 0.00721,
            }}
            style={{
              ...StyleSheet.absoluteFillObject,
            }}
          >
            <Marker
              coordinate={{
                latitude: 5.6604616,
                longitude: -0.0077599,
              }}
            />
          </MapView>
        </View>
        <View style={styles.deliveryStatus}>
          <Text
            style={{
              fontSize: 30,
              color: "#003A83",
              fontWeight: "700",
              marginBottom: 20,
            }}
          >
            Delivery Status
          </Text>

          <View style={styles.statusRow}>
            <View style={styles.left}>
              <FontAwesome5
                name="centercode"
                size={30}
                color="#003A83"
                style={{ marginRight: 20 }}
              />
              <View>
                <Text style={styles.statusHead}>Order Accepted</Text>
                <Text style={styles.statusTime}>25 Jan 2022</Text>
              </View>
            </View>
            <View style={styles.right}>
              <FontAwesome name="check-circle" size={24} color="#003A83" />
            </View>
          </View>
          <View style={styles.statusRow}>
            <View style={styles.left}>
              <FontAwesome5
                name="box-open"
                size={30}
                color="#FD95D3"
                style={{ marginRight: 20 }}
              />
              <View>
                <Text style={styles.statusHead}>Order is being prepared</Text>
                <Text style={styles.statusTime}>25 Jan 2022</Text>
              </View>
            </View>
            <View style={styles.right}>
              <FontAwesome name="check-circle-o" size={24} color="#9EB4D0" />
            </View>
          </View>
          <View style={styles.statusRow}>
            <View style={styles.left}>
              <FontAwesome5
                name="truck"
                size={30}
                color="#FDD33E"
                style={{ marginRight: 20 }}
              />
              <View>
                <Text style={styles.statusHead}>Order Shipped</Text>
                <Text style={styles.statusTime}>25 Jan 2022</Text>
              </View>
            </View>
            <View style={styles.right}>
              <FontAwesome name="check-circle-o" size={24} color="#9EB4D0" />
            </View>
          </View>

          <TouchableOpacity
            style={{
              width: "100%",
              borderRadius: 25,
              backgroundColor: "#F5F5F7",
              paddingVertical: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#003A83",
                fontWeight: "700",
                fontSize: 15,
              }}
            >
              View Package Information
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
