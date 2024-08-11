import { ISearchLocation } from "../GlobalTypes/Types";

export const expoSecureValueKeyNames = {
  accessToken: "accessToken",
  theme: "theme",
};

const backEndUrl = "https://sleekspace-server.onrender.com";

export const tabsMenu = {
  home: "Home",
  account: "Account",
  favorites: "Favorites",
  post: "Postproperty",
  search: "Search",
  chats: "Chats",
};

export const SCREEN_BREAK_POINT = 700
export const BUTTON_MAX_WIDTH = 400
export const BUTTON_SIZE_SCREEN_BREAK_POINT = 500
export const MAX_INPUT_WIDTH = 600

export const endpoints = {
  login: `${backEndUrl}/login`,
  nativeRegistration: `${backEndUrl}/register`,
  nativeRegistrationCodeVerification: `${backEndUrl}/verification-code/registration`,
  user: `${backEndUrl}/user`,
  logout: `${backEndUrl}/logout`,
  changePassword: `${backEndUrl}/password`,
  createVerificationCodeForSecurity: `${backEndUrl}/verification-code`,
  verifyCodeForSecurity: `${backEndUrl}/verification-code/security`,
  resendVerificationCode: `${backEndUrl}/resend-verification-code`,
  locationAutoComplete: `${backEndUrl}/location/autocomplete`,
  locationReverseGeoCoding: `${backEndUrl}/location/reverse-geocoding`,
  locationCreationAndUpdate: `${backEndUrl}/location`,
  contactNumberCreationAndUpdate: `${backEndUrl}/contact-number`,
  getManagerAccountByUserId: `${backEndUrl}/manager/user/`,
  postDeleteAndGetManagerAccountById: `${backEndUrl}/manager`,
};
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
//const searchUrl = `https://api.locationiq.com/v1/search.php?key=pk.5bd5d6c9527e29a965f843c398289678&q=${value}&format=json`;
export const faceBookAuthClientId = process.env.FACEBOOK_AUTH_CLIENT_ID;
export const locationIQToken = process.env.LOCATION_IQ_ACCESS_TOKEN;
export const supabaseApiKey = process.env.SUPABASE_APIKEY
export const supabaseRefID =  process.env.SUPABASE_REF_ID
export const supabaseUrl =  process.env.SUPABASE_URL
