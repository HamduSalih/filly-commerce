import * as React from "react";
import {
  ImageBackground,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { Entypo, MaterialIcons, Fontisto, Octicons } from "@expo/vector-icons";
import { styles } from "./style.js";

export default class Profile extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../../assets/propagebg.png")}
        style={styles.container}
        resizeMode="cover"
      >
        <View style={styles.statusBarHeight} />
        <View style={styles.profilePictureContaiener}>
          <Image
            style={styles.profilePic}
            source={require("../../../assets/propic.jpg")}
          />
          <View style={styles.profileNameContainer}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                fontWeight: "700",
              }}
            >
              Kwame Koffi
            </Text>
            <View style={styles.activeStatusContainer}>
              <Text
                style={{
                  width: 5,
                  height: 5,
                  backgroundColor: "yellow",
                  borderRadius: 50,
                  marginRight: 6,
                }}
              ></Text>
              <Text
                style={{
                  color: "white",
                }}
              >
                Active Status
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <TouchableOpacity style={styles.profileItem}>
            <Entypo
              style={{ marginRight: 20 }}
              name="shopping-bag"
              size={24}
              color="white"
            />
            <Text style={styles.ItemDesc}>Catalogue</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileItem}>
            <Entypo
              style={{ marginRight: 20 }}
              name="shopping-cart"
              size={24}
              color="white"
            />
            <Text style={styles.ItemDesc}>Your Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileItem}>
            <MaterialIcons
              style={{ marginRight: 20 }}
              name="favorite"
              size={24}
              color="white"
            />
            <Text style={styles.ItemDesc}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileItem}>
            <MaterialIcons
              style={{ marginRight: 20 }}
              name="insert-drive-file"
              size={24}
              color="white"
            />
            <Text style={styles.ItemDesc}>Your Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.profileItem}>
            <Fontisto
              style={{ marginRight: 20 }}
              name="player-settings"
              size={24}
              color="white"
            />
            <Text style={styles.ItemDesc}>Settings</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileItem}>
          <Octicons
            style={{ marginRight: 20 }}
            name="sign-out"
            size={24}
            color="white"
          />
          <Text style={[styles.ItemDesc, { fontWeight: "500" }]}>Sign Out</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
