import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, ScrollView, StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Button from "../../components/button";
import Header from "../../components/header";
import { RootStackParamList } from "../../App";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { getTodos } from "../../store/selectors";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const todos = useSelector(getTodos);

  const lala = () => {
    const sarasa = todos.every((todo: any) => todo.completed !== false);
    if (sarasa) {
      return <Text>No Pendings Tasks</Text>;
    } else {
      return todos.map((todo: any) => {
        return <Text key={todo.id}>{todo.task}</Text>;
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header
        title="To-Do App"
        accessoryRight={() => {
          return (
            <View style={styles.iconsContainer}>
              <Ionicons name="md-search-outline" size={24} color="black" />
              <Feather name="bell" size={24} color="black" />
              <Octicons name="three-bars" size={24} color="black" />
            </View>
          );
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.taskTitle}>Completed Tasks</Text>
          {todos.length === 0 ? (
            <Text>No completed tasks</Text>
          ) : (
            todos.map((todo: any) => {
              <Text>{todo.task}</Text>;
            })
          )}
        </View>
        <View>
          <Text style={styles.taskTitle}>Pending Tasks</Text>
          {todos.length === 0 ? <Text>No pending tasks</Text> : lala()}
        </View>
      </ScrollView>
      <SafeAreaView edges={["bottom"]} style={styles.buttomContainer}>
        <Button
          label="Add a task"
          onPress={() => navigation.navigate("Form")}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    marginHorizontal: 20,
    backgroundColor: "rgb(255, 255, 255)",
    flex: 1,
  },
  iconsContainer: {
    width: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskTitle: {
    fontSize: 23,
    fontWeight: "500",
  },
  buttomContainer:
    Platform.OS === "android" ? { margin: 20 } : { marginHorizontal: 20 },
});
