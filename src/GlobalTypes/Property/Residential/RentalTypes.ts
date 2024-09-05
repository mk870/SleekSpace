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

export type IResidentialRentalPropertyCreation = {
  managerId: number;
  numberOfRooms: number;
  rentAmount: number;
  sizeNumber: number;
  numberOfGarages: number;
  hasElectricity: boolean;
  hasSwimmingPool: boolean;
  hasWater: boolean;
  isFullHouse: boolean;
  bathooms: string;
  bedrooms: string;
  status: string;
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

export type IResidentialRentalProperty = {
  id: number;
  managerId: number;
  numberOfRooms: number;
  rentAmount: number;
  sizeNumber: number;
  numberOfGarages: number;
  hasElectricity: boolean;
  hasSwimmingPool: boolean;
  hasWater: boolean;
  isFullHouse: boolean;
  bathooms: string;
  bedrooms: string;
  status: string;
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

export type IResidentialRentalPropertyWithManager = {
  id: number;
  managerId: number;
  numberOfRooms: number;
  rentAmount: number;
  sizeNumber: number;
  numberOfGarages: number;
  hasElectricity: boolean;
  hasSwimmingPool: boolean;
  hasWater: boolean;
  isFullHouse: boolean;
  bathooms: string;
  bedrooms: string;
  status: string;
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
export type IResidentialRentalPropertyUpdate = {
  id: number;
  managerId: number;
  numberOfRooms: number;
  rentAmount: number;
  sizeNumber: number;
  numberOfGarages: number;
  hasElectricity: boolean;
  hasSwimmingPool: boolean;
  hasWater: boolean;
  isFullHouse: boolean;
  bathooms: string;
  bedrooms: string;
  status: string;
  yearBuilt: string;
  stories: string;
  type: string;
  sizeDimensions: string;
  interiorFeatures: string;
  exteriorFeatures: string;
  otherDetails: string;
};
