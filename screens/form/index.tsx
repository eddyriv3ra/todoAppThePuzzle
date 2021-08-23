import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import Header from "../../components/header";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Input from "../../components/input";
import DateTimePicker from "../../components//dateTimePicker";
import Select from "../../components/select";
import Button from "../../components/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { addTodo } from "../../store/actions";
import { useDispatch } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

const reminders = [
  { label: "5 minutes early", value: 5 },
  { label: "10 minutes early", value: 10 },
  { label: "15 minutes early", value: 15 },
];

const repeats = [
  { label: "daily", value: "daily" },
  { label: "weekly", value: "weekly" },
  { label: "yearly", value: "yearly" },
];

type FormScreenProp = StackNavigationProp<RootStackParamList, "Form">;

const Form = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<FormScreenProp>();
  const [values, setValues] = useState({
    task: "",
    deadline: undefined,
    startTime: undefined,
    endTime: undefined,
    remind: "",
    repeat: "",
  });

  const addTask = () => {
    dispatch(addTodo(values));
    navigation.navigate("Home");
  };

  const handleInout = (value: string | Date, key: string) => {
    setValues({ ...values, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Header
        title="Add task"
        accessoryLeft={() => {
          return (
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.button}
            >
              <Entypo name="chevron-left" size={24} color="black" />
            </Pressable>
          );
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Input
          label="Title"
          placeholder="Design Team Meating"
          onChangeText={(value) => handleInout(value, "task")}
          value={values.task}
        />
        <DateTimePicker
          label="Deadline"
          placeholder="Select a date"
          mode="date"
          value={values.deadline}
          onSelect={(date: Date) => handleInout(date, "deadline")}
        />
        <View style={styles.timeContainer}>
          <View style={styles.firstTimeBox}>
            <DateTimePicker
              label="Start time"
              placeholder="Select"
              mode="time"
              value={values.startTime}
              onSelect={(startTime: Date) =>
                handleInout(startTime, "startTime")
              }
            />
          </View>
          <View style={styles.secondTimeBox}>
            <DateTimePicker
              label="End time"
              placeholder="Select"
              mode="time"
              value={values.endTime}
              onSelect={(endTime: Date) => handleInout(endTime, "endTime")}
            />
          </View>
        </View>
        <Select
          label="Remind"
          placeholder={{ label: "Select", value: "" }}
          onValueChange={(value: string) => handleInout(value, "remind")}
          items={reminders.map((reminder) => {
            return {
              key: reminder.label,
              label: reminder.label,
              value: reminder.value,
            };
          })}
        />
        <Select
          label="Repeat"
          placeholder={{ label: "Select", value: "" }}
          onValueChange={(value: string) => handleInout(value, "repeat")}
          items={repeats.map((repeat) => {
            return {
              key: repeat.label,
              label: repeat.label,
              value: repeat.value,
            };
          })}
        />
      </ScrollView>
      <SafeAreaView edges={["bottom"]} style={styles.buttomContainer}>
        <Button
          label="Create a Task"
          onPress={addTask}
          disabled={
            !values.task ||
            !values.deadline ||
            !values.startTime ||
            !values.endTime ||
            !values.remind ||
            !values.repeat
          }
        />
      </SafeAreaView>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  scrollContainer: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    flex: 1,
    marginTop: 20,
  },
  button: {
    marginRight: 20,
  },
  timeContainer: {
    flexDirection: "row",
    width: "100%",
  },
  endTimeContainer: { marginLeft: 10, flex: 1 },
  firstTimeBox: { flex: 1 },
  secondTimeBox: { flex: 1, marginLeft: 10 },
  buttomContainer:
    Platform.OS === "android" ? { margin: 20 } : { marginHorizontal: 20 },
});
