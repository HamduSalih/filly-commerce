import update from "react-addons-update";
import constants from "./actionConstants";
//helps you get latidue delta from main size of window
import { Dimensions, AsyncStorage } from "react-native";

//--------------------
//Constants
//--------------------
//THESE ARE ACTIONS CONSTANTS THEY SHOULD BE CALLED
//IN actionConstants.js
const {} = constants;

const { width, height } = Dimensions.get("window");
let ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.035;
const LONGITUDE_DELTA = 0.035;
//---------------
//Actions
//---------------

//--------------------
//Action Handlers
//--------------------

const ACTION_HANDLERS = {};
const initialState = {};

export function CartReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
