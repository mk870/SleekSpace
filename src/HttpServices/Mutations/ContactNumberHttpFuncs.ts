import axios from "axios";

import { IContactNumber } from "@/src/Redux/Slices/UserSlice/Type/Type";
import { endpoints } from "@/src/Utils/Constants";

export const updateAndCreateContactNumberHttpFunc = (contactData: {
  contactNumbers: IContactNumber[];
  accessToken: string;
  userId: number;
}) => {
  return axios.put(
    `${endpoints.contactNumberCreationAndUpdate}/${contactData.userId}`,
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
    `${endpoints.contactNumberCreationAndUpdate}`,
    contactData.contactNumber,
    {
      headers: { Authorization: `Bearer ${contactData.accessToken}` },
    }
  );
};
