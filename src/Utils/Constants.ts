import { ISearchLocation } from "../GlobalTypes/LocationIQ/LocationIQTypes";

export const expoSecureValueKeyNames = {
  accessToken: "accessToken",
  theme: "theme",
};

//export const backEndUrl = "https://sleekspace-server.onrender.com";
export const backEndUrl = "http://192.168.98.196:8080"

export const tabsMenu = {
  home: "Home",
  account: "Account",
  favorites: "Favorites",
  post: "Postproperty",
  search: "Search",
  chats: "Chats",
};

export const SCREEN_BREAK_POINT = 700;
export const BUTTON_MAX_WIDTH = 400;
export const BUTTON_SIZE_SCREEN_BREAK_POINT = 500;
export const MAX_INPUT_WIDTH = 600;

export const emptyLocation: ISearchLocation = {
  display_address: "",
  display_name: "",
  display_place: "",
  address: {
    city: "",
    country: "",
    country_code: "",
    county: "",
    state: "",
    surburb: "",
  },
  type: "",
  boundingbox: [],
  lat: "",
  licence: "",
  lon: "",
  osm_id: "",
  osm_type: "",
  class: "",
  place_id: "",
};
export const firebaseBucketName = "ImagesAndVideos"
//const searchUrl = `https://api.locationiq.com/v1/search.php?key=pk.5bd5d6c9527e29a965f843c398289678&q=${value}&format=json`;
export const faceBookAuthClientId = process.env.EXPO_PUBLIC_FACEBOOK_AUTH_CLIENT_ID;
export const locationIQToken = process.env.EXPO_PUBLIC_LOCATION_IQ_ACCESS_TOKEN;
export const supabaseApiKey = process.env.EXPO_PUBLIC_SUPABASE_APIKEY;
export const supabaseRefID = process.env.EXPO_PUBLIC_SUPABASE_REF_ID;
export const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
export const firebaseApiKey = process.env.EXPO_PUBLIC_FIREBASE_API_KEY;
export const firebaseAuthDomain = process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN;
export const firebaseProjectId = process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID;
export const firebaseStorageBucket = process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET;
export const firebaseMessagingSenderId =
  process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
export const firebaseAppId = process.env.EXPO_PUBLIC_FIREBASE_APP_ID;
export const firebaseMeasurementId = process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID;
