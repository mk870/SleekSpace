import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from "expo-image-picker";

import { IResidentialRentalOtherInfo } from "../Types/FormTypes";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import {
  BUTTON_MAX_WIDTH,
  BUTTON_SIZE_SCREEN_BREAK_POINT,
  maxPropertyImages,
} from "@/src/Utils/Constants";
import InputField from "@/src/Components/InputField/InputField";
import { dark, gray, light, red } from "@/src/Theme/Colors";
import { family, medium, small } from "@/src/Theme/Font";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import MediaModal from "@/src/Components/Modals/MediaModal/MediaModal";
import SelectedPropertyImageList from "@/src/Components/SelectedPropertyImagesList/SelectedPropertyImageList";

type Props = {
  propertyDetails: IResidentialRentalOtherInfo;
  setPropertyDetails: React.Dispatch<
    React.SetStateAction<IResidentialRentalOtherInfo>
  >;
};

const OtherInformation: React.FC<Props> = ({
  propertyDetails,
  setPropertyDetails,
}) => {
  const [openMediaModal, setOpenMediaModal] = useState<boolean>(false);
  const theme = useAppSelector((state) => state.theme.value);
  const { width } = useWindowDimensions();

  return (
    <View style={styles.inputWrapper}>
      <View style={styles.featuresContainer}>
        <View style={{ width: "100%" }}>
          <ThemedText type="subHeader" styles={{ textAlign: "left" }}>
            Other Information
          </ThemedText>
        </View>
        <View>
          <InputField
            textValue={propertyDetails?.tenantRequirements}
            placeHolder=""
            width={"100%"}
            multiLine
            handleOnChangeText={(e) =>
              setPropertyDetails({
                ...propertyDetails,
                tenantRequirements: e,
              })
            }
            height={57}
            contentType="none"
            type="default"
            label="What do you expect or require from tenants?"
            backgroundColor="transparent"
            borderColor={gray}
          />
          <Text style={styles.nbText}>
            *Separate the requirements with a comma.
          </Text>
        </View>
        <View>
          <InputField
            textValue={propertyDetails?.marketingStatement}
            placeHolder=""
            width={"100%"}
            multiLine
            handleOnChangeText={(e) =>
              setPropertyDetails({
                ...propertyDetails,
                marketingStatement: e,
              })
            }
            height={57}
            contentType="none"
            type="default"
            label="Marketing Statement"
            backgroundColor="transparent"
            borderColor={gray}
          />
        </View>
        <View style={styles.btnContainer}>
          {propertyDetails.images.length > 0 && (
            <SelectedPropertyImageList images={propertyDetails.images} />
          )}
          <TouchableOpacity
            onPress={() => setOpenMediaModal(true)}
            style={[
              {
                width:
                  width > BUTTON_SIZE_SCREEN_BREAK_POINT
                    ? BUTTON_MAX_WIDTH
                    : "100%",
                backgroundColor:
                  theme === "light" ? light.background : dark.darkGray,
              },
              styles.addImages,
            ]}
          >
            <FontAwesome name="image" size={24} color={gray} />
            <Text style={styles.text}>Add Property Images</Text>
          </TouchableOpacity>
          <Text style={styles.nbText}>
            {`*You can upload a maximum of ${maxPropertyImages} images`}
          </Text>
        </View>
      </View>
      <MediaModal
        isModalVisible={openMediaModal}
        handleCancel={() => setOpenMediaModal(false)}
        type="property-Photo"
        uri=""
        setPropertyImages={(e: ImagePicker.ImagePickerAsset[]) =>
          setPropertyDetails({ ...propertyDetails, images: e })
        }
      />
    </View>
  );
};

export default OtherInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    width: "100%",
  },
  featuresContainer: {
    width: "100%",
    gap: 10,
  },
  row: {
    gap: 8,
    width: "100%",
  },
  nbText: {
    fontFamily: family,
    color: red,
    fontSize: small,
  },
  btnContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  addImages: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    height: 50,
    borderRadius: 7,
    marginTop: 20,
  },
  text: {
    fontFamily: family,
    marginTop: 5,
    color: gray,
    fontSize: medium,
  },
});
