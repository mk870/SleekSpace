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

export type ILandProperty = {
  id: number;
  managerId: number;
  uniqueId: number;
  price: number;
  sizeNumber: number;
  areaHasElectricity: boolean;
  isServiced: boolean;
  isNegotiable: boolean;
  status: "on the market" | "off the market";
  type: string;
  sizeDimensions: string;
  otherDetails: string;
  postedTime: string;
  insights: IPropertyInsights;
  propertyLocation: IPropertyLocation;
  media: IPropertyImageOrVideo[];
};

export type ILandPropertyCreation = {
  managerId: number;
  price: number;
  sizeNumber: number;
  areaHasElectricity: boolean;
  isServiced: boolean;
  isNegotiable: boolean;
  status: "on the market" | "off the market";
  type: string;
  sizeDimensions: string;
  otherDetails: string;
  propertyLocation: IPropertyLocationCreation;
  media: IPropertyImageOrVideoCreationOrUpdate[];
};

export type ILandPropertyWithManager = {
  id: number;
  managerId: number;
  uniqueId: number;
  price: number;
  sizeNumber: number;
  areaHasElectricity: boolean;
  isServiced: boolean;
  isNegotiable: boolean;
  status: "on the market" | "off the market";
  type: string;
  sizeDimensions: string;
  otherDetails: string;
  postedTime: string;
  insights: IPropertyInsights;
  propertyLocation: IPropertyLocation;
  media: IPropertyImageOrVideo[];
  manager: IManagerAccount;
};

export type ILandPropertyUpdate = {
  id: number;
  managerId: number;
  uniqueId: number;
  price: number;
  sizeNumber: number;
  areaHasElectricity: boolean;
  isServiced: boolean;
  isNegotiable: boolean;
  status: "on the market" | "off the market";
  type: string;
  sizeDimensions: string;
  otherDetails: string;
};
