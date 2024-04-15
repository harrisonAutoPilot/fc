import 'react-native-gesture-handler/jestSetup';
import { renderReducer } from "@Helper/testHelpers.js";
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import { NativeModules } from 'react-native';



const RNEncryptedStorage = {
  setItem: jest.fn(() => Promise.resolve()),
  getItem: jest.fn(() => Promise.resolve('{ "foo": 1 }')),
  removeItem: jest.fn(() => Promise.resolve()),
  clear: jest.fn(() => Promise.resolve()),
};



global.renderReducer = renderReducer