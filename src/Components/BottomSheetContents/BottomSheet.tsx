import { StyleSheet } from "react-native";
import React, { useEffect, useMemo, useRef } from "react";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";

import ProfileContent from "./Profile/ProfileContent";
import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { dark, pureWhite } from "@/src/Theme/Colors";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { ScrollView } from "react-native-gesture-handler";

type Props = {
  openBottomSheet: boolean;
  onCloseFunc: IVoidFunc;
};

const BottomSheetView: React.FC<Props> = ({ openBottomSheet, onCloseFunc }) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "30%"], []);
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    if (openBottomSheet) {
      bottomSheetRef.current?.expand();
    }
  }, [openBottomSheet]);

  const renderBackdrop = (props: any) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.8}
    />
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      style={styles.bottomSheet}
      backdropComponent={renderBackdrop}
      onChange={onCloseFunc}
      backgroundStyle={{
        backgroundColor: theme === "light" ? pureWhite : dark.darkGray,
      }}
    >
      <ScrollView>
        <ProfileContent
          closeBottomSheetFunc={() => bottomSheetRef.current?.close()}
        />
      </ScrollView>
    </BottomSheet>
  );
};

export default BottomSheetView;

const styles = StyleSheet.create({
  bottomSheet: {
    borderRadius: 15,
    backgroundColor: dark.background,
  },
});
