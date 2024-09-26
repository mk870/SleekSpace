import { IManagerAccount } from "../../Manager/ManagerTypes";
import { IPropertyInsights } from "../Insights/InsightsTypes";
import { IPropertyLocation, IPropertyLocationCreation } from "../Location/LocationTypes";
import { IPropertyImageOrVideo, IPropertyImageOrVideoCreationOrUpdate } from "../Media/ImageOrVideoTypes";

export type ICommercialRentalPropertyCreation = {
    managerId: number;
    numberOfRooms: number;
    rentAmount: number;
    sizeNumber: number;
    hasElectricity: boolean;
    hasWater: boolean;
    isFullSpace:boolean;
    status: "on the market"|"off the market";
    yearBuilt: string;
    currency: string;
    stories: string;
    type: string;
    sizeDimensions: string;
    interiorFeatures: string;
    exteriorFeatures: string;
    otherDetails: string;
    propertyLocation: IPropertyLocationCreation;
    media: IPropertyImageOrVideoCreationOrUpdate[];
}

export type ICommercialRentalProperty = {
    id: number;
    managerId: number;
    uniqueId: number;
    numberOfRooms: number;
    rentAmount: number;
    sizeNumber: number;
    hasElectricity: boolean;
    hasWater: boolean;
    isFullSpace:boolean;
    status: "on the market"|"off the market";
    yearBuilt: string;
    stories: string;
    currency: string;
    type: string;
    sizeDimensions: string;
    interiorFeatures: string;
    exteriorFeatures: string;
    otherDetails: string;
    postedTime: string;
    insights:IPropertyInsights,
    propertyLocation: IPropertyLocation;
    media: IPropertyImageOrVideo[];
}

export type ICommercialRentalPropertyWithManager = {
    id: number;
    managerId: number;
    uniqueId: number;
    numberOfRooms: number;
    rentAmount: number;
    sizeNumber: number;
    hasElectricity: boolean;
    hasWater: boolean;
    isFullSpace:boolean;
    status: "on the market"|"off the market";
    yearBuilt: string;
    stories: string;
    currency: string;
    type: string;
    sizeDimensions: string;
    interiorFeatures: string;
    exteriorFeatures: string;
    otherDetails: string;
    postedTime: string;
    insights:IPropertyInsights,
    propertyLocation: IPropertyLocation;
    media: IPropertyImageOrVideo[];
    manager: IManagerAccount
}
export type ICommercialRentalPropertyUpdate = {
    id: number;
    managerId: number;
    uniqueId: number;
    numberOfRooms: number;
    rentAmount: number;
    sizeNumber: number;
    hasElectricity: boolean;
    hasWater: boolean;
    isFullSpace:boolean;
    status: "on the market"|"off the market";
    yearBuilt: string;
    stories: string;
    currency: string;
    type: string;
    sizeDimensions: string;
    interiorFeatures: string;
    exteriorFeatures: string;
    otherDetails: string;
}