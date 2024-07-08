export const expoSecureValueKeyNames = {
  accessToken: "accessToken",
};

const backEndUrl = "https://sleekspace-server.onrender.com";

export const tabsMenu = {
  home: "Home",
  account: "Account",
  favorites: "Favorites",
  post: "Postproperty",
  search: "Search",
};
export const endpoints = {
  login: `${backEndUrl}/login`,
  nativeRegistration: `${backEndUrl}/register`,
  nativeRegistrationCodeVerification: `${backEndUrl}/verification-code/registration`,
  deleteUser: `${backEndUrl}/user`,
  logout: `${backEndUrl}/logout`,
  changePassword: `${backEndUrl}/password`,
  createVerificationCodeForSecurity: `${backEndUrl}/verification-code`,
  verifyCodeForSecurity: `${backEndUrl}/verification-code/security`,
  resendVerificationCode: `${backEndUrl}/resend-verification-code`,
};

export const faceBookAuthClientId = process.env.FACEBOOK_AUTH_CLIENT_ID;
