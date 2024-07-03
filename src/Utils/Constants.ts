export const expoSecureValueKeyNames = {
  accessToken: "accessToken",
};

const backEndUrl = "https://sleekspace-server.onrender.com";

export const endpoints = {
  login: `${backEndUrl}/login`,
  nativeRegistration: `${backEndUrl}/register`,
  nativeRegistrationVerification: `${backEndUrl}/verification-code`,
  deleteUser: `${backEndUrl}/user`,
  logout: `${backEndUrl}/logout`,
  changePassword: `${backEndUrl}/password`,
  changePasswordAndVerification: `${backEndUrl}/password`,
  resendVerificationCode: `${backEndUrl}/resend-verification-code`,
};
