import { managerRoutes } from "@/src/BackendRoutes/ManagerRoutes";
import { IManagerProfilePictureUpdateAndCreation } from "@/src/GlobalTypes/Manager/ManagerTypes";
import axios from "axios";

export const UpdateManagerProfilePicture = (requestData: {
    accessToken: string;
    managerId: number;
    managerProfilePicture: IManagerProfilePictureUpdateAndCreation;
  }) => {
    return axios.put(
      managerRoutes.updateManagerContactNumbers + `/${requestData.managerId}`,
      requestData.managerProfilePicture,
      {
        headers: {
          Authorization: `Bearer ${requestData.accessToken}`,
        },
      }
    );
  };