import { Modal, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ISearchLocation, IVoidFunc } from "@/src/GlobalTypes/Types";
import LocationInputField from "../../LocationInputField/LocationInputField";

type Props = {
  handleCancel: IVoidFunc;
  message: string;
  isModalVisible: boolean;
  placeHolder: string;
  isFocused?: boolean;
  showLabel?: boolean;
  setLocation: React.Dispatch<React.SetStateAction<string | ISearchLocation>>;
};

const SearchLocationModal: React.FC<Props> = ({
  isModalVisible,
  handleCancel,
  isFocused,
  placeHolder,
  setLocation,
  showLabel,
}) => {
  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={handleCancel}
      transparent
      animationType="slide"
    >
      {/* <LocationInputField placeHolder="enter your location" showLabel setLocation={setLocation}/> */}
    </Modal>
  );
};

export default SearchLocationModal;

const styles = StyleSheet.create({});
