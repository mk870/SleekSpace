import React from "react";

export type IVoidFunc = () => void;
export type INoPropsReactComponent = React.FC;
export type IStringOrNull = string | null
export type INumberOrNull = number | null
export type IUserLogin = {
  email: string | undefined;
  password: string | undefined;
};
