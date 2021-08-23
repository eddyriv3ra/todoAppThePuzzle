import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Platform, ScrollView, StyleSheet, View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import CheckBox from "@react-native-community/checkbox";
import Button from "../../components/button";
import Header from "../../components/header";
import { RootStackParamList } from "../../App";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../store/selectors";
import { changeTodo } from "../../store/actions";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home = () => {
  const navigation = useNavigation<HomeScreenProp>();
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  const pendingDisplayValues = () => {
    const noTodos = todos.every((todo: any) => todo.completed !== false);
    if (noTodos) {
      return <Text>No Pendings Tasks</Text>;
    } else {
      return todos.map((todo: any) => {
        if (!todo.completed) {
          return (
            <View key={todo.id} style={styles.tasksContainer}>
              <CheckBox
                disabled={false}
                value={todo.completed}
                boxType="square"
                onValueChange={(newValue) => {
                  dispatch(changeTodo(newValue, todo.id));
                }}
                style={styles.checkBox}
              />
              <Text style={styles.task}>{todo.task}</Text>
            </View>
          );
        }
      });
    }
  };

  const completedDisplayValues = () => {
    const noTodos = todos.every((todo: any) => todo.completed !== true);
    if (noTodos) {
      return <Text>No Completed Tasks</Text>;
    } else {
      return todos.map((todo: any) => {
        if (todo.completed) {
          return (
            <View key={todo.id} style={styles.tasksContainer}>
              <CheckBox
                disabled={false}
                value={todo.completed}
                boxType="square"
                onValueChange={(newValue) => {
                  dispatch(changeTodo(newValue, todo.id));
                }}
                style={styles.checkBox}
              />
              <Text style={styles.task}>{todo.task}</Text>
            </View>
          );
        }
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
        <View style={styles.completedTasks}>
          <Text style={styles.taskTitle}>Completed Tasks</Text>
          {todos.length === 0 ? (
            <Text>No completed tasks</Text>
          ) : (
            completedDisplayValues()
          )}
        </View>
        <View>
          <Text style={styles.taskTitle}>Pending Tasks</Text>
          {todos.length === 0 ? (
            <Text>No pending tasks</Text>
          ) : (
            pendingDisplayValues()
          )}
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
  task: { fontSize: 18, marginLeft: 10, marginBottom: 5 },
  tasksContainer: { flexDirection: "row", alignItems: "center" },
  taskTitle: {
    fontSize: 23,
    fontWeight: "500",
    color: "black",
    marginBottom: 20,
  },
  checkBox: { transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] },
  completedTasks: { marginVertical: 30 },
  buttomContainer:
    Platform.OS === "android" ? { margin: 20 } : { marginHorizontal: 20 },
});
