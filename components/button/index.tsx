import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
}

const Button = ({ label, onPress, ...touchableProps }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      {...touchableProps}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 60,
    backgroundColor: "rgb(38, 192, 110)",
    borderRadius: 15,
    paddingVertical: 18,
  },
  text: {
    alignSelf: "center",
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
