import { IManagerAccount } from "../../Manager/ManagerTypes";
import { IPropertyInsights } from "../Insights/InsightsTypes";
import { IPropertyLocation, IPropertyLocationCreation } from "../Location/LocationTypes";
import { IPropertyImageOrVideo, IPropertyImageOrVideoCreationOrUpdate } from "../Media/ImageOrVideoTypes";

export type ICommercialPropertyForSale = {
  id: number;
  managerId: number;
  uniqueId: number;
  numberOfRooms: number;
  price: number;
  sizeNumber: number;
  hasElectricity: boolean;
  hasWater: boolean;
  isNegotiable: boolean;
  status: "on the market"|"off the market";
  yearBuilt: string;
  stories: string;
  type: string;
  sizeDimensions: string;
  currency: string;
  interiorFeatures: string;
  exteriorFeatures: string;
  otherDetails: string;
  postedTime: string;
  insights:IPropertyInsights,
  propertyLocation: IPropertyLocation;
  media: IPropertyImageOrVideo[]
};

export type ICommercialPropertyForSaleCreation = {
    managerId: number;
    numberOfRooms: number;
    price: number;
    sizeNumber: number;
    hasElectricity: boolean;
    hasWater: boolean;
    isNegotiable: boolean;
    status: "on the market"|"off the market";
    yearBuilt: string;
    stories: string;
    currency: string;
    type: string;
    sizeDimensions: string;
    interiorFeatures: string;
    exteriorFeatures: string;
    otherDetails: string;
    propertyLocation: IPropertyLocationCreation;
    media: IPropertyImageOrVideoCreationOrUpdate[]
  };

export type ICommercialPropertyForSaleWithManager = {
    id: number;
    managerId: number;
    uniqueId: number;
    numberOfRooms: number;
    price: number;
    sizeNumber: number;
    hasElectricity: boolean;
    hasWater: boolean;
    isNegotiable: boolean;
    status: "on the market"|"off the market";
    yearBuilt: string;
    stories: string;
    type: string;
    currency: string;
    sizeDimensions: string;
    interiorFeatures: string;
    exteriorFeatures: string;
    otherDetails: string;
    postedTime: string;
    insights:IPropertyInsights,
    propertyLocation: IPropertyLocation;
    media: IPropertyImageOrVideo[];
    manager: IManagerAccount
  };

export type ICommercialPropertyForSaleUpdate = {
    id: number;
    managerId: number;
    uniqueId: number;
    numberOfRooms: number;
    price: number;
    sizeNumber: number;
    hasElectricity: boolean;
    hasWater: boolean;
    isNegotiable: boolean;
    status: "on the market"|"off the market";
    yearBuilt: string;
    stories: string;
    type: string;
    currency: string;
    sizeDimensions: string;
    interiorFeatures: string;
    exteriorFeatures: string;
    otherDetails: string;
  };
