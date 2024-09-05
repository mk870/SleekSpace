export type IUser = {
    email: string;
    givenName: string;
    familyName: string;
    id: number;
    location: IUserLocation | null;
    contactNumbers: IUserContactNumber[];
    favoriteResidentialRentalProperties: number[];
    favoriteResidentialForSaleProperties: number[];
    favoriteCommercialRentalProperties: number[];
    favoriteCommercialForSaleProperties: number[];
    favoriteLandProperties: number[];
    favoriteStands: number[];
    accessToken: string;
    profiePicture: IUserProfilePicture | null;
  };

  export type IUserRegistrationData = {
    givenName: string | undefined;
    familyName: string | undefined;
    email: string | undefined;
    password: string | undefined;
  };

  export type IUserLogin = {
    email: string | undefined;
    password: string | undefined;
  };

  export type IUserVerificationData = {
    userId: number;
    verificationCode: number;
  };
  
  export type INewPasswordData = {
    userId: number;
    password: string;
  };

  export type IUserLocation = {
    lat: string;
    lon: string;
    city: string;
    county: string;
    country: string;
    countryCode: string;
    surburb: string;
    id?: number;
    boundingbox: string[] | null;
    displayName: string;
    province: string;
    userId: number;
  };
  
  export type IUserContactNumber = {
    id?: number;
    number: string;
    type: "whatsapp" | "phone";
    countryCode: string;
    countryAbbrv: string;
    userId: number;
  };
  

export type IUserProfilePicture = {
    id: number;
    userId: number;
    uri: string;
    name: string;
    contentType: string | undefined;
    size: number;
    fileType: string | undefined;
  };

  export type IUserProfilePictureUpdateAndCreation = {
    id?: number;
    userId: number;
    image: string;
    name: string;
    contentType: string | undefined;
    size: number;
    fileType: string | undefined;
  };
  