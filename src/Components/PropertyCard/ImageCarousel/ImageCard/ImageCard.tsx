import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";

import { IPropertyImageOrVideo } from "@/src/GlobalTypes/Property/Media/ImageOrVideoTypes";
import { dark, white } from "@/src/Theme/Colors";
import { family } from "@/src/Theme/Font";
import { SCREEN_BREAK_POINT } from "@/src/Utils/Constants";

type Props = {
  image: IPropertyImageOrVideo;
  index: number;
  total: number;
};

const ImageCard: React.FC<Props> = ({
  image,
  index,
  total,
}) => {
  const { width } = useWindowDimensions();
  const widthValue = width > SCREEN_BREAK_POINT ? 360 : width;

  return (
    <View style={[styles.container, { width: widthValue }]}>
      <ImageBackground source={{ uri: image.uri }} style={styles.image} resizeMode="cover">
        <View style={[styles.counterContainer]}>
          <Text style={styles.counterText}>{`${index + 1} / ${total}`}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  image: { height: 250, width: "100%" },
  counterContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: dark.background,
    width: 40,
    borderRadius: 10,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontFamily: family,
    fontSize: 11,
    color: white,
  },
});
