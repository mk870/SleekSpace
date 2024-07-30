import axios from "axios";

import { ILocation } from "@/src/Redux/Slices/UserSlice/Type/Type";
import { endpoints } from "@/src/Utils/Constants";

export const updateLocationHttpFunc = (
  locationData: {
    location:ILocation,
    accessToken:string
  }
) => {
  return axios.put(`${endpoints.locationCreationAndUpdate}`, locationData.location, {
    headers: { Authorization: `Bearer ${locationData.accessToken}` },
  });
};

export const createLocationHttpFunc = (
  locationData: {
    location:ILocation,
    accessToken:string
  }
) => {
  return axios.post(`${endpoints.locationCreationAndUpdate}`, locationData.location, {
    headers: { Authorization: `Bearer ${locationData.accessToken}` },
  });
};

export const locationAutoCompleteHttpFunc = (location: {
  locationName: string;
}) => {
  return axios.post(`${endpoints.locationAutoComplete}`, location);
};

export const locationReverseGeoCodingHttpFunc = (coords: {
  lat: string;
  lon: string;
}) => {
  return axios.post(`${endpoints.locationReverseGeoCoding}`, coords);
};
