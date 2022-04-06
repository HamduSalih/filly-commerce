import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import createStore from "./Store/CreateStore";
import AppContainer from "./Navigation/AppContainer";

const initialState = window.___INTITIAL_STATE__;
const store = createStore(initialState);

export default function App() {
  const propTypes = {
    store: PropTypes.object.isRequired,
  };
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
