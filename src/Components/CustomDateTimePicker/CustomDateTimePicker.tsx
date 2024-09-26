import { StyleSheet } from "react-native";
import React from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

type Props = {
  setDate: (currentData: Date) => void;
  hideDatePicker: () => void;
  date: Date;
};

const CustomDateTimePicker: React.FC<Props> = ({
  setDate,
  hideDatePicker,
  date,
}) => {
  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate ? selectedDate : new Date();
    hideDatePicker();
    setDate(currentDate);
  };
  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode={"date"}
      is24Hour={true}
      onChange={onChange}
      display="spinner"
    />
  );
};

export default CustomDateTimePicker;

const styles = StyleSheet.create({});
