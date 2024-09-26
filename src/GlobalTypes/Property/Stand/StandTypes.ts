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

export type IStandProperty = {
  id: number;
  managerId: number;
  uniqueId: number;
  price: number;
  sizeNumber: number;
  areaHasElectricity: boolean;
  isServiced: boolean;
  isNegotiable: boolean;
  status: "on the market" | "off the market";
  level: string;
  type: string;
  sizeDimensions: string;
  otherDetails: string;
  postedTime: string;
  currency: string;
  insights: IPropertyInsights;
  propertyLocation: IPropertyLocation;
  media: IPropertyImageOrVideo[];
};

export type IStandPropertyCreation = {
  managerId: number;
  price: number;
  sizeNumber: number;
  areaHasElectricity: boolean;
  isServiced: boolean;
  isNegotiable: boolean;
  status: "on the market" | "off the market";
  level: string;
  type: string;
  currency: string;
  sizeDimensions: string;
  otherDetails: string;
  propertyLocation: IPropertyLocationCreation;
  media: IPropertyImageOrVideoCreationOrUpdate[];
};

export type IStandPropertyWithManager = {
  id: number;
  managerId: number;
  uniqueId: number;
  price: number;
  sizeNumber: number;
  areaHasElectricity: boolean;
  isServiced: boolean;
  isNegotiable: boolean;
  status: "on the market"|"off the market";
  level: string;
  type: string;
  currency: string;
  sizeDimensions: string;
  otherDetails: string;
  postedTime: string;
  insights: IPropertyInsights;
  propertyLocation: IPropertyLocation;
  media: IPropertyImageOrVideo[];
  manager: IManagerAccount;
};

export type IStandPropertyUpdate = {
  id: number;
  managerId: number;
  uniqueId: number;
  price: number;
  sizeNumber: number;
  areaHasElectricity: boolean;
  isServiced: boolean;
  isNegotiable: boolean;
  status: "on the market"|"off the market";
  level: string;
  type: string;
  currency: string;
  sizeDimensions: string;
  otherDetails: string;
};
