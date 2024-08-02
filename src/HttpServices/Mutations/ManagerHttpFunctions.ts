import axios from "axios";

import { IManagerAccount } from "@/src/GlobalTypes/Types";
import { endpoints } from "@/src/Utils/Constants";

export const CreateManager = (requestData: {
  accessToken: string;
  manager: IManagerAccount;
}) => {
  return axios.post(
    endpoints.postDeleteAndGetManagerAccountById,
    requestData.manager,
    {
      headers: {
        Authorization: `Bearer ${requestData.accessToken}`,
      },
    }
  );
};

export const UpdateManager = (requestData: {
  accessToken: string;
  manager: IManagerAccount;
}) => {
  return axios.put(
    endpoints.postDeleteAndGetManagerAccountById + `/${requestData.manager.id}`,
    requestData.manager,
    {
      headers: {
        Authorization: `Bearer ${requestData.accessToken}`,
      },
    }
  );
};

export const deleteManager = (requestData: {
  accessToken: string;
  id: number;
}) => {
  return axios.delete(
    endpoints.postDeleteAndGetManagerAccountById + `/${requestData.id}`,
    {
      headers: {
        Authorization: `Bearer ${requestData.accessToken}`,
      },
    }
  );
};
