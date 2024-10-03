import * as ImagePicker from "expo-image-picker";

export type IResidentialForSaleGeneralInfo = {
  isNegotiable: boolean;
  numberOfRooms: string;
  price: string;
  currency: ICurrency;
  sizeNumber: string;
  sizeDimensions: string;
  type: string;
  stories: string;
  yearBuilt: string;
};

export type IGeneralInfoFormError =
  | "stories"
  | "price"
  | "yearBuilt"
  | ""
  | "propertySize"
  | "numberOfRooms"
  | "location";


  export type IResidentialForSaleInteriorInfo = {
    bedrooms: string;
    bathrooms: string;
    isTiled: boolean;
    hasCeiling: boolean;
    isPlustered: boolean;
    isPainted: boolean;
    hasElectricity: boolean;
    hasWater: boolean;
    otherInteriorFeatures: string;
  };
  
  export type IInteriorInfoFormError =
  "bedrooms"
  | ""
  | "bathrooms"

  export type IResidentialForSaleExteriorInfo = {
    numberOfGarages: string;
    hasSwimmingPool: boolean;
    isPaved: boolean;
    hasBoreHole: boolean;
    typeOfExteriorSecurity: string;
    otherExteriorFeatures: string;
  };
  
  export type IExteriorInfoFormError =
  "numberOfGarages"
  | ""

  export type IResidentialForSaleOtherInfo = {
    marketingStatement: string;
    images: ImagePicker.ImagePickerAsset[];
  };