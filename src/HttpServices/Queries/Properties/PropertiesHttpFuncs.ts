import axios from "axios";

import { commercialPropertiesForSaleRoutes } from "@/src/BackendRoutes/Properties/Commercial/CommercialForSalePropertiesRoutes";
import { commercialRentalPropertiesRoutes } from "@/src/BackendRoutes/Properties/Commercial/CommercialRentalPropertiesRoutes";
import { residentialRentalPropertiesRoutes } from "@/src/BackendRoutes/Properties/Residential/ResidentialRentalPropertiesRoutes";
import { residentialPropertiesForSaleRoutes } from "@/src/BackendRoutes/Properties/Residential/ResidentialPropertiesForSaleRoutes";
import { standRoutes } from "@/src/BackendRoutes/Properties/Stand/StandRoutes";
import { landRoutes } from "@/src/BackendRoutes/Properties/Land/LandRoutes";
import { propertyInsightsRoutes } from "@/src/BackendRoutes/Properties/Insights/PropertyInsightsRoutes";
import { propertyLocationRoutes } from "@/src/BackendRoutes/Properties/Location/PropertyLocationRoutes";
import { propertyMediaRoutes } from "@/src/BackendRoutes/Properties/Media/PropertyMediaRoutes";
import { reportRoutes } from "@/src/BackendRoutes/Properties/Report/ReportRoutes";

export const getCommercialPropertyForSaleHttpFunc = (requestData: {
  propertyId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${commercialPropertiesForSaleRoutes.getUpdateAndDeleteCommercialPropertyForSale}/${requestData.propertyId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getAllCommercialPropertiesForSaleHttpFunc = (requestData: {
  accessToken: string;
}) => {
  return axios.get(
    `${commercialPropertiesForSaleRoutes.getAllCommercialForSaleProperties}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getCommercialRentalPropertyHttpFunc = (requestData: {
  propertyId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${commercialRentalPropertiesRoutes.getUpdateAndDeleteCommercialRentalProperty}/${requestData.propertyId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getAllCommercialRentalPropertiesHttpFunc = (requestData: {
  accessToken: string;
}) => {
  return axios.get(
    `${commercialRentalPropertiesRoutes.getAllCommercialRentalProperties}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getResidentialRentalPropertyHttpFunc = (requestData: {
  propertyId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${residentialRentalPropertiesRoutes.getUpdateAndDeleteResidentialRentalProperty}/${requestData.propertyId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getAllResidentialRentalPropertiesHttpFunc = (requestData: {
  accessToken: string;
}) => {
  return axios.get(
    `${residentialRentalPropertiesRoutes.getAllResidentialRentalProperties}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getResidentialPropertyForSaleHttpFunc = (requestData: {
  propertyId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${residentialPropertiesForSaleRoutes.getUpdateAndDeleteResidentialPropertyForSale}/${requestData.propertyId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getAllResidentialPropertiesForSaleHttpFunc = (requestData: {
  accessToken: string;
}) => {
  return axios.get(
    `${residentialPropertiesForSaleRoutes.getAllResidentialForSaleProperties}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getStandPropertyHttpFunc = (requestData: {
  propertyId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${standRoutes.getAllGetOnePostDeleteAndUpdateStand}/${requestData.propertyId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getAllStandsHttpFunc = (requestData: { accessToken: string }) => {
  return axios.get(`${standRoutes.getAllGetOnePostDeleteAndUpdateStand}`, {
    headers: { Authorization: `Bearer ${requestData.accessToken}` },
  });
};

export const getLandPropertyHttpFunc = (requestData: {
  propertyId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${landRoutes.getAllGetOnePostDeleteAndUpdateLand}/${requestData.propertyId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getAllLandPropertiesHttpFunc = (requestData: {
  accessToken: string;
}) => {
  return axios.get(`${landRoutes.getAllGetOnePostDeleteAndUpdateLand}`, {
    headers: { Authorization: `Bearer ${requestData.accessToken}` },
  });
};

export const getPropertyInsightsByPropertyIdHttpFunc = (requestData: {
  propertyId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${propertyInsightsRoutes.getPropertyInsightsByPropertyId}/${requestData.propertyId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getPropertyInsightsByIdHttpFunc = (requestData: {
  insightId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${propertyInsightsRoutes.getPropertyInsightsByPropertyId}/${requestData.insightId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getPropertyLocationHttpFunc = (requestData: {
  locationId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${propertyLocationRoutes.getAndUpdatePropertyLocation}/${requestData.locationId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getPropertyImageOrVideoHttpFunc = (requestData: {
  imageOrVideoId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${propertyMediaRoutes.postGetDeleteAndUpdatePropertyMedia}/${requestData.imageOrVideoId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getPropertyReportyByIdHttpFunc = (requestData: {
  reportId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${reportRoutes.getAllGetOnePostDeleteAndUpdateReport}/${requestData.reportId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getPropertyReportyByPropertyIdHttpFunc = (requestData: {
  propertyId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${reportRoutes.getReportsByPropertyId}/${requestData.propertyId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};

export const getPropertyReportyByManagerIdHttpFunc = (requestData: {
  managerId: number;
  accessToken: string;
}) => {
  return axios.get(
    `${reportRoutes.getReportsByManagerId}/${requestData.managerId}`,
    {
      headers: { Authorization: `Bearer ${requestData.accessToken}` },
    }
  );
};
