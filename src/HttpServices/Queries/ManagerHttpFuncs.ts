import { IUser } from "@/src/Redux/Slices/UserSlice/Type/Type";
import { endpoints } from "@/src/Utils/Constants";
import axios from "axios";

export const getManagerByUserId = (user: IUser) => {
  return axios.get(endpoints.getManagerAccountByUserId + user.id, {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
};

export const getManagerById = (requestData: {
  user: IUser;
  managerId: number;
}) => {
  return axios.get(
    endpoints.postDeleteAndGetManagerAccountById + "/" + requestData.managerId,
    {
      headers: {
        Authorization: `Bearer ${requestData.user.accessToken}`,
      },
    }
  );
};
