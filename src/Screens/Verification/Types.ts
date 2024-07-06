export type IUserVerificationData = {
  userId: number;
  verificationCode: number;
};

export type INewPasswordData = {
  userId: number;
  password: string;
};
