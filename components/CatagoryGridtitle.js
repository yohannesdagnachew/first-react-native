import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function CatagoryGridtitle({title, color}) {
  return (
    <View style={style.gridItem}>
      <Pressable style={style.button}>
        <View style={style.innerContainer}>
          <Text>{title}</Text>
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
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    button : {
        flex: 1,
    }
});