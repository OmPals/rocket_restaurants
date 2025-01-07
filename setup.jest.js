import { TextDecoder, TextEncoder } from "util";
import fetchRestaurantsMock from "./src/Tests/Mocks/fetchRestaurantsMock.json";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.navigator.geolocation = {
  getCurrentPosition: jest.fn(),
};

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(fetchRestaurantsMock);
    },
  });
});
