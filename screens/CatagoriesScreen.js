import { View, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CatagoryGridtitle from "../components/CatagoryGridtitle";



export default function CatagoriesScreen({ navigation }) {

    const renderCatagoryItem = (itemData) => {

        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                catagoryId: itemData.item.id,
            });
        }  
      return (
        <CatagoryGridtitle
          title={itemData.item.title}
          color={itemData.item.color}
          onPress={pressHandler}
        />
      );
    };


  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCatagoryItem}
      numColumns={2}
    />
  );
}
