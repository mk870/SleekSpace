import { StyleSheet, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { EvilIcons } from "@expo/vector-icons";

import { ISearchLocation } from "@/src/GlobalTypes/Types";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { light, dark, gray } from "@/src/Theme/Colors";
import ThemedText from "../ThemedText/ThemedText";
import SuggestedLocations from "./SuggestedLocations/SuggestedLocations";
import MessageModal from "../Modals/MessageModal";

type Props = {
  placeHolder: string;
  isFocused?: boolean;
  showLabel?: boolean;
  setLocation: React.Dispatch<React.SetStateAction<string | ISearchLocation>>;
  location: ISearchLocation | string;
};

const LocationInputField: React.FC<Props> = ({
  isFocused,
  placeHolder,
  showLabel,
  setLocation,
  location,
}) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  const [locationSuggestions, setLocationSuggestions] = useState<
    ISearchLocation[] | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openSuggestions, setOpenSuggestions] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string>("");
  const theme = useAppSelector((state) => state.theme.value);
  const autocompleteUrl = `https://api.locationiq.com/v1/autocomplete.php?key=pk.5bd5d6c9527e29a965f843c398289678&q=${value}&limit=10`;
  const searchUrl = `https://api.locationiq.com/v1/search.php?key=pk.5bd5d6c9527e29a965f843c398289678&q=${value}&format=json`;
  const handleSearch = () => {
    setIsLoading(true);
    axios
      .get<ISearchLocation[]>(autocompleteUrl)
      .then((res) => {
        setLocationSuggestions(res.data);
        setOpenSuggestions(true);
        setValue("");
      })
      .catch((error) => {
        console.log(error);
        setValue("");
        if (error.response?.data?.error !== "") {
          setLocationError(error.response?.data?.error);
        } else setLocationError("Something went wrong");
      })
      .finally(() => setIsLoading(false));
  };
  const handleCancelErrorModal = () => {
    setLocationError("");
  };
  useEffect(() => {
    if (location) {
      if (typeof location !== "string") setValue(location.display_name);
    }
    else setValue("")
  }, [location]);
  return (
    <View style={[styles.container]}>
      {showLabel && <ThemedText type="regular">Enter your Location</ThemedText>}
      <View>
        {value && value.length < 36 && (
          <EvilIcons
            name="location"
            size={26}
            color={gray}
            style={styles.icon}
          />
        )}
        {!value && (
          <EvilIcons
            name="location"
            size={26}
            color={gray}
            style={styles.icon}
          />
        )}
        <TextInput
          value={value}
          onChangeText={(e) => setValue(e)}
          placeholder={placeHolder}
          textContentType={"location"}
          placeholderTextColor={gray}
          autoFocus={isFocused ? isFocused : false}
          onSubmitEditing={handleSearch}
          autoCorrect={false}
          enterKeyHint={"search"}
          keyboardType="default"
          keyboardAppearance={theme === "light" ? "light" : "dark"}
          cursorColor={theme === "light" ? light.text : dark.text}
          style={[
            { color: theme === "light" ? light.text : dark.text },
            {
              borderWidth: 1,
              borderColor: gray,
              backgroundColor:
                theme === "light" ? light.background : dark.background,
            },
            styles.input,
          ]}
        />
      </View>
      {(isLoading || openSuggestions) && (
        <SuggestedLocations
          isLoading={isLoading}
          suggestions={locationSuggestions}
          setLocation={setLocation}
          setTextInputValue={setValue}
          setOpenSuggestions={setOpenSuggestions}
        />
      )}
      <MessageModal
        header="Location Error!"
        message={`Sorry, we could not get the coordinates of ${value}, please try again.`}
        isModalVisible={locationError ? true : false}
        handleCancel={handleCancelErrorModal}
        type="error"
      />
    </View>
  );
};

export default LocationInputField;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 7,
    gap: 2,
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    height: 45,
    width: "100%",
    textAlign: "left",
    paddingLeft: 10,
    borderRadius: 7,
  },
  icon: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 2,
  },
});
