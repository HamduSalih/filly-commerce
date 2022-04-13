import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

export const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    // paddingVertical: 15,
    zIndex: 1,
  },
  statusBarHeight: {
    height: Constants.statusBarHeight,
  },
  mapContainer: {
    width: "100%",
    height: height * 0.6,
    background: "#6fb76f",
  },
  deliveryStatus: {
    flex: 1,
    padding: 25,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -(height * 0.1),
    flexDirection: "column",
  },
  statusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  left: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusHead: {
    fontSize: 20,
    color: "#235594",
    fontWeight: "700",
  },
  statusTime: {
    color: "#235594",
  },
};
