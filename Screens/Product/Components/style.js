import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");
export const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  statusBarHeight: {
    height: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    // paddingVertical: 15,
    backgroundColor: "white",
  },
  sliderContainer: {
    height: height * 0.4,
    backgroundColor: "#fff",
  },
  details: {
    padding: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: "#F4F4F6",
  },
  productName: {
    fontSize: 25,
    color: "#003A83",
    fontWeight: "700",
    lineHeight: 45,
  },
  productCaption: {
    color: "#ACBDD3",
    marginBottom: 30,
  },
  productSize: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  size: {
    padding: 8,
    fontSize: 18,
    borderRadius: 20,
  },
  title: {
    color: "#ACBDD3",
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
    backgroundColor: "#F5F5F7",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 25,
    fontSize: 20,
  },
};
