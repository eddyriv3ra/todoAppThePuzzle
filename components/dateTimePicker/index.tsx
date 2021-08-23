import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Entypo } from "@expo/vector-icons";
import format from "date-fns/format";
import { AntDesign } from "@expo/vector-icons";
import intlFormat from "date-fns/intlFormat";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import "intl";
import "intl/locale-data/jsonp/en";
interface datePickerProps {
  label: string;
  placeholder: string;
  mode: "date" | "time";
  onSelect: (value: Date) => void;
  value: Date | undefined;
}

const DatePicker = ({
  label,
  placeholder,
  mode,
  onSelect,
  value,
}: datePickerProps) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (selectedDate: Date) => {
    hideDatePicker();
    onSelect(selectedDate);
  };

  const timeDateFormat = (dateValue: Date) => {
    if (mode === "time") {
      return intlFormat(dateValue, {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
    }
    return format(new Date(dateValue), "yyyy-MM-dd");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.input} onPress={showDatePicker}>
        <View style={styles.inputContent}>
          <Text style={!value ? { color: "gray" } : { color: "black" }}>
            {value ? timeDateFormat(value) : placeholder}
          </Text>
          {mode === "date" ? (
            <Entypo
              name="chevron-down"
              size={24}
              color="gray"
              style={styles.chevron}
            />
          ) : (
            <AntDesign
              name="clockcircleo"
              size={20}
              color="gray"
              style={styles.chevron}
            />
          )}
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode={mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          date={value}
        />
      </Pressable>
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: { marginVertical: 5, width: "100%" },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
    color: "black",
  },
  input: {
    height: 55,
    backgroundColor: "rgba(218, 211, 211, 0.283)",
    borderRadius: 5,
  },
  inputContent: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  chevron: {
    width: 24,
  },
});
