export type IUser = {
  email: string;
  givenName: string;
  familyName: string;
  id: number;
  avatar: string;
  location: ILocation | null;
  contactNumbers: IContactNumber[];
  accessToken: string;
};
export type ILocation = {
  lat: string;
  lon: string;
  city: string;
  county: string;
  country: string;
  countryCode: string;
  surburb: string;
  id?: number;
  boundingbox: string[] | null;
  displayName: string;
  province: string;
  userId: number;
};

export type IContactNumber = {
  id?: number;
  number: string;
  type: "whatsapp" | "phone";
  countryCode: string;
  countryAbbrv: string;
  userId: number;
};
