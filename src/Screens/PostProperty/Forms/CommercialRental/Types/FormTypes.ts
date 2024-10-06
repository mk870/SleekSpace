import * as ImagePicker from "expo-image-picker";

export type ICommercialRentalGeneralInfo = {
  numberOfRooms: string;
  rentAmount: string;
  currency: ICurrency;
  sizeNumber: string;
  sizeDimensions: string;
  type: string;
  otherType: string;
  stories: string;
  yearBuilt: string;
  isFullSpace: boolean;
};

export type IGeneralInfoFormError =
  | "stories"
  | "rentAmount"
  | "yearBuilt"
  | ""
  | "propertySize"
  | "numberOfRooms"
  | "type"
  | "location";

export type ICommercialRentalFeaturesInfo = {
  hasElectricity: boolean;
  hasWater: boolean;
  otherInteriorFeatures: string;
  otherExteriorFeatures: string;
};

export type ICommercialRentalOtherInfo = {
  tenantRequirements: string;
  marketingStatement: string;
  images: ImagePicker.ImagePickerAsset[];
};
