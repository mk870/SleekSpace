import axios from "axios";

import { IManagerAccount } from "@/src/GlobalTypes/Types";
import { managerRoutes } from "@/src/BackendRoutes/ManagerRoutes";

export const CreateManager = (requestData: {
  accessToken: string;
  manager: IManagerAccount;
}) => {
  return axios.post(
    managerRoutes.postDeleteAndGetManagerAccountById,
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
    managerRoutes.postDeleteAndGetManagerAccountById + `/${requestData.manager.id}`,
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
    managerRoutes.postDeleteAndGetManagerAccountById + `/${requestData.id}`,
    {
      headers: {
        Authorization: `Bearer ${requestData.accessToken}`,
      },
    }
  );
};
