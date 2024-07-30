import axios from "axios";

import { IUser } from "@/src/Redux/Slices/UserSlice/Type/Type";
import { endpoints } from "@/src/Utils/Constants";

export const fetchUserData = (
  user: IUser,
  setUserData: (userResponse: any) => void,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setOpenSuccessModal: React.Dispatch<React.SetStateAction<boolean>>,
  setUpdateError: React.Dispatch<React.SetStateAction<string>>
) => {
  axios
    .get(endpoints.user + `/${user.id}`, {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    })
    .then((data) => {
      setUserData(data.data.response);
      setOpenSuccessModal(true);
    })
    .catch((error) => {
      if (error.response?.data?.error !== "") {
        setUpdateError(error.response?.data?.error);
      } else setUpdateError("Something went wrong");
    })
    .finally(() => setIsLoading(false));
};
