import axios from "axios";

import { IUserLoginData } from "@/src/Screens/Login/Types";
import { IUserRegistrationData } from "@/src/Screens/Register/Types";
import {
  INewPasswordData,
  IUserVerificationData,
} from "@/src/Screens/Verification/Types";
import { authRoutes } from "@/src/BackendRoutes/AuthRoutes";

export const loginHttpFunc = (userLoginData: IUserLoginData) => {
  return axios.post(authRoutes.login, userLoginData);
};

export const nativeRegisterHttpFunc = (
  userRegistrationData: IUserRegistrationData
) => {
  return axios.post(authRoutes.nativeRegistration, userRegistrationData);
};

export const createVerificationCodeForSecurityHttpFunc = (email: {
  email: string | undefined;
}) => {
  return axios.post(authRoutes.createVerificationCodeForSecurity, email);
};

export const verificationCodeForSecurityHttpFunc = (
  verificationData: IUserVerificationData
) => {
  return axios.post(authRoutes.verifyCodeForSecurity, verificationData);
};

export const changePasswordHttpFunc = (
  newPasswordAndVerificationCode: INewPasswordData
) => {
  return axios.put(authRoutes.changePassword, newPasswordAndVerificationCode);
};

export const resendVerificationCodeHttpFunc = (userId: number) => {
  return axios.get(`${authRoutes.resendVerificationCode}/${userId}`);
};

export const verifyCodeForNativeUserRegistrationHttpFunc =
  (verificationDetails: { userId: number; verificationCode: number }) => {
    return axios.post(
      authRoutes.nativeRegistrationCodeVerification,
      verificationDetails
    );
  };
