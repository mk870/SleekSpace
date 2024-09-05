import React, { useEffect, useState } from "react";
import { useWindowDimensions, View } from "react-native";

import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import StackScreen from "@/src/Components/StackScreenWrapper/StackScreen";
import SigninAndSignupBtn from "@/src/Components/SigninAndSignupBtns/SigninAndSignupBtn";
import { useAppDispatch, useAppSelector } from "@/src/Redux/Hooks/Config";
import { getManagerByUserId } from "@/src/HttpServices/Queries/Manager/ManagerHttpFuncs";
import { addManagerAccount } from "@/src/Redux/Slices/ManagerAccountSlice/ManagerSlice";
import MessageModal from "@/src/Components/Modals/MessageModal";
import ScreenSpinner from "@/src/Components/Spinners/ScreenSpinner";
import ManagerProfile from "./Screens/Components/ManagerProfile/ManagerProfile";
import ManagerSignUpBtns from "./Screens/Components/ManagerSignUpBtns/ManagerSignUpBtns";

const ManagerAccount: INoPropsReactComponent = () => {
  const user = useAppSelector((state) => state.user.value);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<string>("");
  const [hasManagerAccount, setHasManagerAccount] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { height } = useWindowDimensions();

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
      <StackScreen>
        {!user.accessToken && <SigninAndSignupBtn screenType={"profile"} />}
        {user.accessToken && (
          <>
            {isLoading && (
              <View style={{ flex: 1, height: height - 60 }}>
                <ScreenSpinner />
              </View>
            )}
            {!isLoading &&
              (hasManagerAccount ? <ManagerProfile /> : <ManagerSignUpBtns />)}
          </>
        )}
        <MessageModal
          message={httpError}
          type="error"
          isModalVisible={httpError ? true : false}
          handleCancel={() => setHttpError("")}
        />
      </StackScreen>
    </Screen>
  );
};

export default ManagerAccount;
