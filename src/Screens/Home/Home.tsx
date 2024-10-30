import React, { useState } from "react";

import Screen from "@/src/Components/ScreenWrapper/Screen";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import AnimatedListHeader from "./Components/AnimatedListHeader/AnimatedListHeader";
import LoadingSkeleton from "./Components/LoadingSkeleton/LoadingSkeleton";
import ResidentialRentals from "./Components/PropertyTypes/ResidentialRentals";


const Home:INoPropsReactComponent = () => {
  const [propertyType,setPropertyType] = useState<IPropertyType>("Residential Rentals")
  return (
    <Screen>
      {/* <AnimatedListHeader setPropertyType={setPropertyType}/> */}
      <ResidentialRentals/>
    </Screen>
  );
};

export default Home;
