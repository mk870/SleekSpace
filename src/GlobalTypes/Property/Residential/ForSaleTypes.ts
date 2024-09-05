import { IManagerAccount } from "../../Manager/ManagerTypes";
import { IPropertyInsights } from "../Insights/InsightsTypes";
import {
  IPropertyLocation,
  IPropertyLocationCreation,
} from "../Location/LocationTypes";
import {
  IPropertyImageOrVideo,
  IPropertyImageOrVideoCreationOrUpdate,
} from "../Media/ImageOrVideoTypes";

export type IResidentialPropertyForSaleCreation = {
  managerId: number;
  numberOfRooms: number;
  price: number;
  sizeNumber: number;
  numberOfGarages: number;
  hasElectricity: boolean;
  hasSwimmingPool: boolean;
  hasWater: boolean;
  isNegotiable: boolean;
  bathooms: string;
  bedrooms: string;
  status: "on the market"|"off the market";
  yearBuilt: string;
  stories: string;
  type: string;
  sizeDimensions: string;
  interiorFeatures: string;
  exteriorFeatures: string;
  otherDetails: string;
  propertyLocation: IPropertyLocationCreation;
  media: IPropertyImageOrVideoCreationOrUpdate[];
};

export type IResidentialPropertyForSale = {
  id: number;
  managerId: number;
  numberOfRooms: number;
  price: number;
  sizeNumber: number;
  numberOfGarages: number;
  hasElectricity: boolean;
  hasSwimmingPool: boolean;
  hasWater: boolean;
  isNegotiable: boolean;
  bathooms: string;
  bedrooms: string;
  status: "on the market"|"off the market";
  yearBuilt: string;
  stories: string;
  type: string;
  sizeDimensions: string;
  interiorFeatures: string;
  exteriorFeatures: string;
  otherDetails: string;
  postedTime: string;
  insights: IPropertyInsights;
  propertyLocation: IPropertyLocation;
  media: IPropertyImageOrVideo[];
};

export type IResidentialPropertyForSaleWithManager = {
  id: number;
  managerId: number;
  numberOfRooms: number;
  price: number;
  sizeNumber: number;
  numberOfGarages: number;
  hasElectricity: boolean;
  hasSwimmingPool: boolean;
  hasWater: boolean;
  isNegotiable: boolean;
  bathooms: string;
  bedrooms: string;
  status: "on the market"|"off the market";
  yearBuilt: string;
  stories: string;
  type: string;
  sizeDimensions: string;
  interiorFeatures: string;
  exteriorFeatures: string;
  otherDetails: string;
  postedTime: string;
  insights: IPropertyInsights;
  propertyLocation: IPropertyLocation;
  media: IPropertyImageOrVideo[];
  manager: IManagerAccount;
};
export type IResidentialPropertyForSaleUpdate = {
  id: number;
  managerId: number;
  numberOfRooms: number;
  price: number;
  sizeNumber: number;
  numberOfGarages: number;
  hasElectricity: boolean;
  hasSwimmingPool: boolean;
  hasWater: boolean;
  isNegotiable: boolean;
  bathooms: string;
  bedrooms: string;
  status: "on the market"|"off the market";
  yearBuilt: string;
  stories: string;
  type: string;
  sizeDimensions: string;
  interiorFeatures: string;
  exteriorFeatures: string;
  otherDetails: string;
};
