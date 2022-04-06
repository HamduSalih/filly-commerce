import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

export const styles = {
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginBottom: "5%",
    backgroundColor: "white",
  },
  itemsContainer: {
    flexDirection: "column",
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  amount: {
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusBarHeight: {
    height: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  subtotal: {
    color: "#C8C8CA",
    fontWeight: "700",
  },
  checkoutBox: {
    paddingVertical: 25,
    paddingHorizontal: 30,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
  },
  checkoutBtn: {
    backgroundColor: "#003A83",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    fontSize: 20
  },
};
