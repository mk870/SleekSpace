import axios from "axios";

import { endpoints } from "@/src/Utils/Constants";
import { IUser } from "@/src/Redux/Slices/UserSlice/Type/Type";

export const updateUserHttpFunc = (userData: IUser) => {
  return axios.put(
    `${endpoints.user}/${userData.id}`,userData,
    {
      headers: { Authorization: `Bearer ${userData.accessToken}` },
    }
  );
};

export const deleteUserHttpFunc = (userData: {
  id: number;
  accessToken: string;
}) => {
  return axios.delete(`${endpoints.user}/${userData.id}`, {
    headers: { Authorization: `Bearer ${userData.accessToken}` },
  });
};
