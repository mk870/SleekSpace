import {
  FlatList,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { PropertyTypesEnum, SCREEN_BREAK_POINT } from "@/src/Utils/Constants";
import { getAllResidentialRentalPropertiesHttpFunc } from "@/src/HttpServices/Queries/Properties/PropertiesHttpFuncs";
import {
  IResidentialRentalPropertyWithManager,
} from "@/src/GlobalTypes/Property/Residential/RentalTypes";
import HttpError from "@/src/Components/HttpError/HttpError";
import LoadingSkeleton from "../LoadingSkeleton/LoadingSkeleton";
import PropertyCard from "@/src/Components/PropertyCard/PropertyCard";
import EmptyPropertyList from "@/src/Components/EmptyPropertyList/EmptyPropertyList";

type Props = {
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
};

const ResidentialRentals: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<string>("");
  const [properties, setProperties] = useState<
    IResidentialRentalPropertyWithManager[]
  >([]);
  const [numberOfpages, setNumberOfPages] = useState<number>(0);
  const { width } = useWindowDimensions();
  const fetchProperties = () => {
    getAllResidentialRentalPropertiesHttpFunc({ page: 1 })
      .then(({ data: { properties, totalPages } }) => {
        setProperties(properties);
        setNumberOfPages(totalPages);
      })
      .catch((error: any) => {
        if (error.response?.data?.error) {
          if (error.response?.data?.error !== "") {
            setHttpError(error.response?.data?.error);
          } else setHttpError("Something went wrong");
        } else setHttpError("Something went wrong");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const text =
    "We currently do not have Residential Rental Properties, please try again soon. Please checkout other property types in the meantime.";
  return (
    <View style={styles.container}>
      {isLoading && <LoadingSkeleton />}
      {httpError && (
        <HttpError
          retryFunc={() => {
            setHttpError("");
            setIsLoading(true);
            fetchProperties();
          }}
        />
      )}
      {!httpError && !isLoading && properties.length < 1 && (
        <EmptyPropertyList text={text} />
      )}
      {!httpError &&
        !isLoading &&
        properties.length > 0 &&
        width < SCREEN_BREAK_POINT && (
          <FlatList
            data={properties}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
            // refreshControl={undefined}
            // onRefresh={propertiesQuery.refetch}
            renderItem={({ item }) => (
              <PropertyCard
                type={PropertyTypesEnum.ResidentialRentals}
                property={item}
              />
            )}
          />
        )}
      {!httpError &&
        !isLoading &&
        properties.length > 0 &&
        width > SCREEN_BREAK_POINT && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={styles.largeScreenWrapper}
            >
              {properties.map((property) => (
                <PropertyCard
                  type={PropertyTypesEnum.ResidentialRentals}
                  key={property.id}
                  property={property}
                />
              ))}
            </View>
          </ScrollView>
        )}
    </View>
  );
};

export default ResidentialRentals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  largeScreenWrapper:{
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
  }
});
