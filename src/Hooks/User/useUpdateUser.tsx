import React, { useEffect } from "react";
import { IUser } from "@/src/Redux/Slices/UserSlice/Type/Type";
import { useAppDispatch } from "@/src/Redux/Hooks/Config";
import {
  addAccessToken,
  addAvatar,
  addContactNumber,
  addEmailAddress,
  addFamilyName,
  addGivenName,
  addLocation,
  addUserId,
  addWhatsAppNumber,
} from "@/src/Redux/Slices/UserSlice/User";

const useUpdateUser = (user: IUser | null) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      dispatch(addEmailAddress(user.email));
      dispatch(addFamilyName(user.familyName));
      dispatch(addGivenName(user.givenName));
      dispatch(addUserId(user.id));
      dispatch(addLocation(user.location));
      dispatch(addWhatsAppNumber(user.whatsAppNumber));
      dispatch(addContactNumber(user.contactNumber));
      dispatch(addAvatar(user.avatar))
      dispatch(addAccessToken(user.accessToken))
    }
  }, [user]);
};

export default useUpdateUser;
