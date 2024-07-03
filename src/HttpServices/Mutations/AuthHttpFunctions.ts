import axios from "axios";

import { IUserLoginData } from "@/src/Screens/Login/Types";
import { IUserRegistrationData } from "@/src/Screens/Register/Types";
import { INewPasswordAndVerificationData } from "@/src/Screens/Verification/Types";
import { endpoints } from "@/src/Utils/Constants";

export const loginHttpFunc = (userLoginData: IUserLoginData) => {
  return axios.post(endpoints.login, userLoginData);
};

export const nativeRegisterHttpFunc = (
  userRegistrationData: IUserRegistrationData
) => {
  return axios.post(endpoints.nativeRegistration, userRegistrationData);
};

export const changePasswordHttpFunc = (email: {
  email: string | undefined;
}) => {
  return axios.post(endpoints.changePassword, email);
};
export const changePasswordAndVerifyCodeHttpFunc = (
  newPasswordAndVerificationCode: INewPasswordAndVerificationData
) => {
  return axios.put(endpoints.changePassword, newPasswordAndVerificationCode);
};
export const resendVerificationCodeHttpFunc = (userId: number) => {
  return axios.get(`${endpoints.resendVerificationCode}/${userId}`);
};
export const verifyCodeHttpFunc = (verificationDetails: {
  userId: number;
  verificationCode: number;
}) => {
  return axios.post(
    endpoints.nativeRegistrationVerification,
    verificationDetails
  )
};
