import axios from "axios";

import { IContactNumber } from "@/src/Redux/Slices/UserSlice/Type/Type";
import { userRoutes } from "@/src/BackendRoutes/UserRoutes";

export const updateAndCreateContactNumberHttpFunc = (contactData: {
  contactNumbers: IContactNumber[];
  accessToken: string;
  userId: number;
}) => {
  return axios.put(
    `${userRoutes.getAndUpdateUserContactNumber}/${contactData.userId}`,
    { contacts: contactData.contactNumbers },
    {
      headers: { Authorization: `Bearer ${contactData.accessToken}` },
    }
  );
};

export const createContactHttpFunc = (contactData: {
  contactNumber: IContactNumber;
  accessToken: string;
}) => {
  return axios.post(
    `${userRoutes.getAndUpdateUserContactNumber}`,
    contactData.contactNumber,
    {
      headers: { Authorization: `Bearer ${contactData.accessToken}` },
    }
  );
};
