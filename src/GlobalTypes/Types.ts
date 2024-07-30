import React from "react";

export type IVoidFunc = () => void;
export type INoPropsReactComponent = React.FC;
export type IStringOrNull = string | null;
export type INumberOrNull = number | null;
export type IUserLogin = {
  email: string | undefined;
  password: string | undefined;
};

export type ISearchLocation = {
  address: IAddress;
  boundingbox: string[];
  class: string;
  display_address: string;
  display_name: string;
  display_place: string;
  lat: string;
  licence: string;
  lon: string;
  osm_id: string;
  osm_type: string;
  place_id: string;
  type: string;
};

export type IReverseLocation = {
  address: IAddress;
  boundingbox: string[];
  display_name: string;
  lat: string;
  licence: string;
  lon: string;
  osm_id: string;
  osm_type: string;
  place_id: string;
};

type IAddress = {
  city: string;
  country: string;
  country_code: string;
  county: string;
  state: string;
  surburb: string;
};
