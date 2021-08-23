import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
} from "react-native";

interface InputProps extends TextInputProps {
  label: string;
  placeholder: string;
  value: string;
}

const Input = ({
  label,
  placeholder,
  value,
  ...textInputProps
}: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="gray"
        {...textInputProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: { marginVertical: 5 },
  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
    color: "black",
  },
  input: {
    height: 55,
    backgroundColor: "rgba(218, 211, 211, 0.283)",
    padding: 20,
  },
});
