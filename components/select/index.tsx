import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import RNPickerSelect, { PickerSelectProps } from "react-native-picker-select";
import { Entypo } from "@expo/vector-icons";

interface SelectProps extends PickerSelectProps {
  label: string;
  placeholder: {};
}

const Select = ({ label, placeholder, items, onValueChange }: SelectProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        placeholder={placeholder}
        useNativeAndroidPickerStyle={false}
        items={items}
        style={{
          ...Platform.select({
            android: {
              inputAndroid: {
                padding: 15,
                color: "black",
                backgroundColor: "rgba(218, 211, 211, 0.283)",
              },
            },
            ios: {
              inputIOS: {
                fontSize: 16,
                padding: 15,
                height: 55,
                backgroundColor: "rgba(218, 211, 211, 0.283)",
              },
            },
          }),
          placeholder: {
            color: "gray",
          },
          iconContainer: {
            right: 20,
            top: 15,
          },
        }}
        Icon={() => {
          return <Entypo name="chevron-down" size={24} color="gray" />;
        }}
      />
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: { marginVertical: 5 },
  selectContainer: {
    height: 55,
    backgroundColor: "rgba(218, 211, 211, 0.283)",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
    color: "black",
  },
});
