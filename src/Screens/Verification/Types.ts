export type IUserVerificationData = {
  userId: number;
  verificationCode: number;
};

export type INewPasswordAndVerificationData = {
  userId: number;
  verificationCode: number;
  password: string;
};
