import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

export const styles = {
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  profilePictureContaiener: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 20,
  },

  statusBarHeight: {
    height: Constants.statusBarHeight,
  },
  profileNameContainer: {
    justifyContent: "center",
  },
  activeStatusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  ItemDesc: {
    color: "white",
    fontWeight: "700",
    fontSize: 23,
  },
};
