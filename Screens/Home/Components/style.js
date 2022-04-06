import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = {
  container: {
    flex: 1,
  },
  header: {
    height: "10%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    padding: 25,
    marginBottom: "5%",
  },
  filterView: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginBottom: 20,
  },
  scrollView: {
    flexDirection: "column",
    padding: 25,
  },
  filterScroll: {
    flexDirection: "row",
    paddingHorizontal: 25,
    width: "100%",
    justifyContent: "space-between",
    margin: 0,
  },
  productRow: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  cart: {
    position: "absolute",
    alignItems: "center",
    width: '100%',
    bottom: '10%',
    zIndex: 1,
  },
};
