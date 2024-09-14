import { StyleSheet, Text } from "react-native";
import React, { useEffect, useState } from "react";

import Screen from "@/src/Components/ScreenWrapper/Screen";
import { useAppDispatch, useAppSelector } from "@/src/Redux/Hooks/Config";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import PropertiesScreenWrapper from "@/src/Components/PropertiesScreenWrapper/PropertiesScreenWrapper";
import ResidentialRental from "./Forms/ResidentialRental";
import ResidentialForSale from "./Forms/ResidentialForSale";
import CommercialRental from "./Forms/CommercialRental";
import CommercialForSale from "./Forms/CommercialForSale";
import Stand from "./Forms/Stand";
import Land from "./Forms/Land";
import { getManagerByUserId } from "@/src/HttpServices/Queries/Manager/ManagerHttpFuncs";
import { addManagerAccount } from "@/src/Redux/Slices/ManagerAccountSlice/ManagerSlice";
import SigninAndSignupBtn from "@/src/Components/SigninAndSignupBtns/SigninAndSignupBtn";
import MessageModal from "@/src/Components/Modals/MessageModal";
import ManagerSignUpBtns from "../Account/Screens/Preferences/ManagerAccount/Screens/Components/ManagerSignUpBtns/ManagerSignUpBtns";

const PostProperty: INoPropsReactComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<string>("");
  const [hasManagerAccount, setHasManagerAccount] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user.accessToken) {
      getManagerByUserId(user)
        .then((res) => {
          dispatch(addManagerAccount(res.data.response));
          setHasManagerAccount(true);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error.response?.data?.error !== "") {
            if (
              error.response?.data?.error ===
              "this property management account does not exist"
            ) {
              setHasManagerAccount(false);
              setIsLoading(false);
            } else {
              setHttpError(error.response?.data?.error);
              setIsLoading(false);
            }
          } else {
            setHttpError("Something went wrong");
            setIsLoading(false);
          }
        });
    }
  }, [user.accessToken]);

  return (
    <Screen>
      {!user.accessToken && <SigninAndSignupBtn screenType={"post_property"} />}
      {user.accessToken && (
        <>
          {isLoading && <Text>Loading...</Text>}
          {!isLoading &&
            (hasManagerAccount ? (
              <PropertiesScreenWrapper>
                <ResidentialRental />
                <ResidentialForSale />
                <CommercialRental />
                <CommercialForSale />
                <Stand />
                <Land />
              </PropertiesScreenWrapper>
            ) : (
              <ManagerSignUpBtns />
            ))}
        </>
      )}
      <MessageModal
        message={httpError}
        type="error"
        isModalVisible={httpError ? true : false}
        handleCancel={() => setHttpError("")}
      />
    </Screen>
  );
};

export default PostProperty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
