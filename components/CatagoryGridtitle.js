import React from "react";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

export default function CatagoryGridtitle({ title, color, onPress }) {
  return (
    <View style={[style.gridItem, {backgroundColor: color}]}>
      <Pressable
        and roid_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          style.button,
          pressed ? style.buttonPressed : null,
        ]}
        onPress={onPress} 
      >
        <View style={style.innerContainer}>
          <Text style={style.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
