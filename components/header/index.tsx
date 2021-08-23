import React, { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
  title: string;
  accessoryLeft?: () => ReactElement | undefined;
  accessoryRight?: () => ReactElement | undefined;
}

const Header = ({ title, accessoryLeft, accessoryRight }: HeaderProps) => {
  return (
    <SafeAreaView mode="margin" edges={["top"]}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {accessoryLeft && accessoryLeft()}
          <Text style={styles.title}>{title}</Text>
        </View>
        {accessoryRight && accessoryRight()}
      </View>
      <View style={styles.line} />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 20,
  },
  titleContainer: { flexDirection: "row", alignItems: "center" },
  title: {
    fontSize: 25,
    fontWeight: "500",
    color: "black",
  },
  line: {
    marginTop: 10,
    borderWidth: 1,
    borderBottomColor: "rgba(143, 155, 179, 0.48)",
  },
});
