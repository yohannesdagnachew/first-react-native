import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryGridtitle from "../components/CatagoryGridtitle";

const renderCatagoryItem = (itemData) => {
  return (
    <CatagoryGridtitle
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};

export default function CatagoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatagoryItem}
      numColumns={2}
    />
  );
}
