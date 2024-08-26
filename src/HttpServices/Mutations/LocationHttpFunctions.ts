import axios from "axios";

import { ILocation } from "@/src/Redux/Slices/UserSlice/Type/Type";
import { locationIQRoutes } from "@/src/BackendRoutes/LocationIQRoutes";
import { userRoutes } from "@/src/BackendRoutes/UserRoutes";

export const updateUserLocationHttpFunc = (
  locationData: {
    location:ILocation,
    accessToken:string
  }
) => {
  return axios.put(`${userRoutes.getAndUpdateUserLocation}`, locationData.location, {
    headers: { Authorization: `Bearer ${locationData.accessToken}` },
  });
};

export const createUserLocationHttpFunc = (
  locationData: {
    location:ILocation,
    accessToken:string
  }
) => {
  return axios.post(`${userRoutes.getAndUpdateUserLocation}`, locationData.location, {
    headers: { Authorization: `Bearer ${locationData.accessToken}` },
  });
};

export const locationAutoCompleteHttpFunc = (location: {
  locationName: string;
}) => {
  return axios.post(`${locationIQRoutes.locationAutoComplete}`, location);
};

export const locationReverseGeoCodingHttpFunc = (coords: {
  lat: string;
  lon: string;
}) => {
  return axios.post(`${locationIQRoutes.locationReverseGeoCoding}`, coords);
};
