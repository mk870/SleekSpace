export type IPropertyReportReponseOrUpdate = {
  id: number;
  propertyId: number;
  managerId: number;
  report: string;
};

export type IPropertyReportCreation = {
  propertyId: number;
  managerId: number;
  report: string;
};